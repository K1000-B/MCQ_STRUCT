import { useEffect, useMemo, useState } from 'react'
import { Layout } from './components/Layout'
import { QuestionCard } from './components/QuestionCard'
import { PrimaryButton } from './components/PrimaryButton'
import { SecondaryButton } from './components/SecondaryButton'
import { SessionHeader } from './components/SessionHeader'
import { StatsView } from './components/StatsView'
import { questions } from './data/questions'
import type { Question, SessionResult } from './types'

const RECENT_BUFFER = 15

type Mode = 'home' | 'session' | 'results'

type AnswerStatus = 'correct' | 'incorrect'

const formatDuration = (ms: number) => {
  const totalSeconds = Math.max(0, Math.floor(ms / 1000))
  const minutes = Math.floor(totalSeconds / 60)
  const seconds = totalSeconds % 60
  return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`
}

const formatSeconds = (ms: number) => `${(ms / 1000).toFixed(1)}s`

const pickQuestion = (pool: Question[], recentIds: number[]) => {
  if (pool.length === 0) {
    return null
  }

  if (pool.length <= RECENT_BUFFER || recentIds.length === 0) {
    return pool[Math.floor(Math.random() * pool.length)]
  }

  const recentSet = new Set(recentIds)
  const available = pool.filter((question) => !recentSet.has(question.id))

  if (available.length === 0) {
    return pool[Math.floor(Math.random() * pool.length)]
  }

  return available[Math.floor(Math.random() * available.length)]
}

const matchesCorrectAnswers = (question: Question, selections: string[]) => {
  const correctKeys = question.answers.filter((answer) => answer.correct).map((answer) => answer.key)
  if (correctKeys.length !== selections.length) {
    return false
  }
  return correctKeys.every((key) => selections.includes(key))
}

function App() {
  const [mode, setMode] = useState<Mode>('home')
  const [currentQuestion, setCurrentQuestion] = useState<Question | null>(null)
  const [selectedKeys, setSelectedKeys] = useState<string[]>([])
  const [showFeedback, setShowFeedback] = useState(false)
  const [recentIds, setRecentIds] = useState<number[]>([])
  const [results, setResults] = useState<SessionResult[]>([])
  const [correctCount, setCorrectCount] = useState(0)
  const [incorrectCount, setIncorrectCount] = useState(0)
  const [skippedCount, setSkippedCount] = useState(0)
  const [currentStreak, setCurrentStreak] = useState(0)
  const [bestStreak, setBestStreak] = useState(0)
  const [answeredTimeMs, setAnsweredTimeMs] = useState(0)
  const [sessionStart, setSessionStart] = useState<number | null>(null)
  const [questionStart, setQuestionStart] = useState<number | null>(null)
  const [elapsedMs, setElapsedMs] = useState(0)
  const [sessionDurationMs, setSessionDurationMs] = useState(0)

  useEffect(() => {
    if (mode !== 'session' || sessionStart === null) {
      return
    }

    const id = window.setInterval(() => {
      setElapsedMs(performance.now() - sessionStart)
    }, 1000)

    return () => window.clearInterval(id)
  }, [mode, sessionStart])

  const totalAnswered = correctCount + incorrectCount
  const accuracy = totalAnswered === 0 ? 0 : (correctCount / totalAnswered) * 100

  const recentTen = useMemo(() => results.slice(-10).reverse(), [results])

  const startSession = () => {
    const firstQuestion = pickQuestion(questions, [])
    setMode('session')
    setCurrentQuestion(firstQuestion)
    setSelectedKeys([])
    setShowFeedback(false)
    setRecentIds([])
    setResults([])
    setCorrectCount(0)
    setIncorrectCount(0)
    setSkippedCount(0)
    setCurrentStreak(0)
    setBestStreak(0)
    setAnsweredTimeMs(0)
    const now = performance.now()
    setSessionStart(now)
    setQuestionStart(now)
    setElapsedMs(0)
    setSessionDurationMs(0)
  }

  const finishSession = () => {
    if (sessionStart !== null) {
      setSessionDurationMs(performance.now() - sessionStart)
    }
    setMode('results')
  }

  const advanceQuestion = () => {
    if (!currentQuestion) {
      return
    }
    const updatedRecent = [currentQuestion.id, ...recentIds].slice(0, RECENT_BUFFER)
    setRecentIds(updatedRecent)
    const nextQuestion = pickQuestion(questions, updatedRecent)
    setCurrentQuestion(nextQuestion)
    setSelectedKeys([])
    setShowFeedback(false)
    setQuestionStart(performance.now())
  }

  const handleSelect = (key: string) => {
    if (!currentQuestion || showFeedback) {
      return
    }

    if (currentQuestion.multiple) {
      setSelectedKeys((prev) =>
        prev.includes(key) ? prev.filter((item) => item !== key) : [...prev, key],
      )
    } else {
      setSelectedKeys([key])
    }
  }

  const handleCheckAnswer = () => {
    if (!currentQuestion || selectedKeys.length === 0) {
      return
    }
    const isCorrect = matchesCorrectAnswers(currentQuestion, selectedKeys)
    const status: AnswerStatus = isCorrect ? 'correct' : 'incorrect'
    const timeSpent = questionStart ? performance.now() - questionStart : 0

    setResults((prev) => [
      ...prev,
      {
        questionId: currentQuestion.id,
        prompt: currentQuestion.prompt,
        result: status,
        timeMs: timeSpent,
      },
    ])

    if (isCorrect) {
      setCorrectCount((prev) => prev + 1)
      setCurrentStreak((prev) => {
        const next = prev + 1
        setBestStreak((best) => Math.max(best, next))
        return next
      })
    } else {
      setIncorrectCount((prev) => prev + 1)
      setCurrentStreak(0)
    }

    setAnsweredTimeMs((prev) => prev + timeSpent)
    setShowFeedback(true)
  }

  const handleSkip = () => {
    if (!currentQuestion) {
      return
    }
    const timeSpent = questionStart ? performance.now() - questionStart : 0
    setResults((prev) => [
      ...prev,
      {
        questionId: currentQuestion.id,
        prompt: currentQuestion.prompt,
        result: 'skipped',
        timeMs: timeSpent,
      },
    ])
    setSkippedCount((prev) => prev + 1)
    setCurrentStreak(0)
    advanceQuestion()
  }

  const statusBadge = useMemo(() => {
    if (!showFeedback || !currentQuestion) {
      return null
    }
    const isCorrect = matchesCorrectAnswers(currentQuestion, selectedKeys)
    return (
      <div
        className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold ${
          isCorrect
            ? 'bg-emerald-500/20 text-emerald-700 dark:text-emerald-200'
            : 'bg-rose-500/20 text-rose-700 dark:text-rose-200'
        }`}
      >
        {isCorrect ? 'Correct answer' : 'Incorrect answer'}
      </div>
    )
  }, [currentQuestion, selectedKeys, showFeedback])

  if (questions.length === 0) {
    return (
      <div className="min-h-screen bg-slate-50 px-4 py-12 text-slate-900 dark:bg-slate-950 dark:text-slate-100">
        <div className="mx-auto max-w-3xl rounded-3xl border border-rose-300 bg-white/90 p-6 shadow-sm dark:border-rose-500/40 dark:bg-slate-900/80">
          <h1 className="text-2xl font-semibold text-slate-900 dark:text-white">
            No questions available
          </h1>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
            Please add questions in{' '}
            <code className="text-rose-600 dark:text-rose-200">src/data/questions.ts</code> and
            reload the app.
          </p>
        </div>
      </div>
    )
  }

  return (
    <Layout
      mode={mode}
      questionCount={questions.length}
      sessionTopBar={
        mode === 'session' ? (
          <SessionHeader
            elapsed={formatDuration(elapsedMs)}
            correct={correctCount}
            incorrect={incorrectCount}
            skipped={skippedCount}
            streak={currentStreak}
            bestStreak={bestStreak}
            onFinish={finishSession}
            variant="compact"
          />
        ) : null
      }
    >
      {mode === 'home' && (
        <section className="rounded-3xl border border-slate-200 bg-white/90 p-8 text-center shadow-lg shadow-slate-200/40 transition-colors dark:border-slate-800 dark:bg-slate-900/70 dark:shadow-slate-900/40 motion-reduce:transition-none">
          <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">
            Start a new session
          </h2>
          <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">
            Tap start when you are ready to answer questions. Finish anytime to see your stats.
          </p>
          <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <PrimaryButton onClick={startSession}>Start session</PrimaryButton>
          </div>
        </section>
      )}

      {mode === 'session' && currentQuestion && (
        <div className="flex flex-col gap-6 pb-24 sm:pb-0">
          <div className="lg:hidden">
            <SessionHeader
              elapsed={formatDuration(elapsedMs)}
              correct={correctCount}
              incorrect={incorrectCount}
              skipped={skippedCount}
              streak={currentStreak}
              bestStreak={bestStreak}
              onFinish={finishSession}
            />
          </div>

          <QuestionCard
            question={currentQuestion}
            selectedKeys={selectedKeys}
            showFeedback={showFeedback}
            onSelect={handleSelect}
          />

          <div className="fixed inset-x-0 bottom-0 z-20 sm:static">
            <div className="mx-auto max-w-6xl px-4 pb-4 sm:px-0 sm:pb-0">
              <div className="flex flex-col gap-4 rounded-t-3xl border border-slate-200 bg-white/95 p-5 shadow-lg shadow-slate-200/50 transition-colors dark:border-slate-800 dark:bg-slate-900/90 dark:shadow-slate-900/40 motion-reduce:transition-none sm:rounded-3xl">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <div className="flex flex-wrap items-center gap-3">
                    {statusBadge}
                    {showFeedback && (
                      <p className="text-sm text-slate-600 dark:text-slate-300">
                        Review the highlighted choices and continue.
                      </p>
                    )}
                  </div>
                  <div className="flex flex-wrap items-center gap-3">
                    <SecondaryButton
                      onClick={handleSkip}
                      disabled={showFeedback}
                      className="border-amber-300 text-amber-700 hover:border-amber-400 dark:border-amber-400/40 dark:text-amber-100 dark:hover:border-amber-300"
                    >
                      Skip
                    </SecondaryButton>
                    {!showFeedback && (
                      <PrimaryButton
                        onClick={handleCheckAnswer}
                        disabled={selectedKeys.length === 0}
                      >
                        Check answer
                      </PrimaryButton>
                    )}
                    {showFeedback && (
                      <PrimaryButton onClick={advanceQuestion}>Next question</PrimaryButton>
                    )}
                  </div>
                </div>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  Skips do not count toward accuracy. Next question is available after checking.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {mode === 'results' && (
        <StatsView
          totalAnswered={totalAnswered}
          correct={correctCount}
          incorrect={incorrectCount}
          skipped={skippedCount}
          accuracy={accuracy}
          avgTime={totalAnswered === 0 ? '0.0s' : formatSeconds(answeredTimeMs / totalAnswered)}
          bestStreak={bestStreak}
          sessionDuration={formatDuration(sessionDurationMs)}
          recent={recentTen}
          onRestart={startSession}
        />
      )}
    </Layout>
  )
}

export default App
