import { useEffect, useMemo, useState } from 'react'
import { ContributePage } from './components/ContributePage'
import { QuestionCard } from './components/QuestionCard'
import { PrimaryButton } from './components/PrimaryButton'
import { SecondaryButton } from './components/SecondaryButton'
import { SessionHeader } from './components/SessionHeader'
import { StatsView } from './components/StatsView'
import { APP_NAME } from './config'
import { questions } from './data/questions'
import { clearSession, loadSession, saveSession } from './sessionStorage'
import type {
  AnswerSnapshot,
  MistakeEntry,
  Question,
  SessionEvent,
  SessionState,
} from './types'

const formatDuration = (ms: number) => {
  const totalSeconds = Math.max(0, Math.floor(ms / 1000))
  const minutes = Math.floor(totalSeconds / 60)
  const seconds = totalSeconds % 60
  return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`
}

const formatSeconds = (ms: number) => `${(ms / 1000).toFixed(1)}s`

type Mode = 'home' | 'session' | 'results'

const matchesCorrectAnswers = (question: Question, selections: string[]) => {
  const correctKeys = question.answers.filter((answer) => answer.correct).map((answer) => answer.key)
  if (correctKeys.length !== selections.length) {
    return false
  }
  return correctKeys.every((key) => selections.includes(key))
}

const addUniqueId = (ids: number[], id: number) => (ids.includes(id) ? ids : [...ids, id])

const getRandomQuestion = (askedIds: number[]) => {
  const askedSet = new Set(askedIds)
  const available = questions.filter((question) => !askedSet.has(question.id))
  if (available.length === 0) {
    return null
  }
  return available[Math.floor(Math.random() * available.length)]
}

const toAnswerSnapshots = (question: Question, keys: string[]): AnswerSnapshot[] =>
  keys
    .map((key) => {
      const answer = question.answers.find((item) => item.key === key)
      return answer ? { key: answer.key, text: answer.text } : null
    })
    .filter((answer): answer is AnswerSnapshot => answer !== null)

const getSessionStats = (events: SessionEvent[]) => {
  let correct = 0
  let incorrect = 0
  let skipped = 0
  let answeredTimeMs = 0
  let currentStreak = 0
  let bestStreak = 0

  events.forEach((event) => {
    if (event.result === 'correct') {
      correct += 1
      currentStreak += 1
      bestStreak = Math.max(bestStreak, currentStreak)
      answeredTimeMs += event.timeMs
      return
    }

    if (event.result === 'incorrect') {
      incorrect += 1
      currentStreak = 0
      answeredTimeMs += event.timeMs
      return
    }

    skipped += 1
    currentStreak = 0
  })

  return { correct, incorrect, skipped, answeredTimeMs, currentStreak, bestStreak }
}

const buildEmptySession = (question: Question | null, now: number): SessionState => ({
  askedIds: question ? [question.id] : [],
  currentQuestionId: question ? question.id : null,
  ended: question === null,
  events: [],
  mistakes: [],
  sessionStart: now,
  sessionEnd: question === null ? now : null,
  questionStart: question ? now : null,
})

function App() {
  const [mode, setMode] = useState<Mode>(() => {
    const stored = loadSession()
    if (!stored) {
      return 'home'
    }
    return stored.ended ? 'results' : 'session'
  })
  const [path, setPath] = useState(() => window.location.pathname)
  const [sessionState, setSessionState] = useState<SessionState | null>(() => loadSession())
  const [selectedKeys, setSelectedKeys] = useState<string[]>([])
  const [showFeedback, setShowFeedback] = useState(false)
  const [elapsedMs, setElapsedMs] = useState(0)

  useEffect(() => {
    if (!sessionState) {
      clearSession()
      return
    }
    saveSession(sessionState)
  }, [sessionState])

  useEffect(() => {
    if (!sessionState) {
      setMode('home')
      return
    }
    setMode(sessionState.ended ? 'results' : 'session')
  }, [sessionState])

  useEffect(() => {
    if (!sessionState || sessionState.ended) {
      return
    }
    if (sessionState.currentQuestionId !== null) {
      return
    }

    const nextQuestion = getRandomQuestion(sessionState.askedIds)
    if (!nextQuestion) {
      setSessionState({
        ...sessionState,
        ended: true,
        sessionEnd: sessionState.sessionEnd ?? Date.now(),
      })
      return
    }

    const now = Date.now()
    setSessionState({
      ...sessionState,
      askedIds: addUniqueId(sessionState.askedIds, nextQuestion.id),
      currentQuestionId: nextQuestion.id,
      questionStart: now,
    })
  }, [sessionState])

  useEffect(() => {
    if (mode !== 'session' || !sessionState?.sessionStart) {
      return
    }

    setElapsedMs(Date.now() - sessionState.sessionStart)
    const id = window.setInterval(() => {
      setElapsedMs(Date.now() - sessionState.sessionStart)
    }, 1000)

    return () => window.clearInterval(id)
  }, [mode, sessionState?.sessionStart])

  useEffect(() => {
    const handlePopState = () => {
      setPath(window.location.pathname)
    }

    window.addEventListener('popstate', handlePopState)

    return () => window.removeEventListener('popstate', handlePopState)
  }, [])

  const currentQuestion = useMemo(() => {
    if (!sessionState?.currentQuestionId) {
      return null
    }
    return questions.find((question) => question.id === sessionState.currentQuestionId) ?? null
  }, [sessionState?.currentQuestionId])

  const sessionEvents = sessionState?.events ?? []
  const sessionMistakes = sessionState?.mistakes ?? []

  const { correct, incorrect, skipped, answeredTimeMs, currentStreak, bestStreak } = useMemo(
    () => getSessionStats(sessionEvents),
    [sessionEvents],
  )

  const totalAnswered = correct + incorrect
  const accuracy = totalAnswered === 0 ? 0 : (correct / totalAnswered) * 100

  const recentTen = useMemo(() => sessionEvents.slice(-10).reverse(), [sessionEvents])
  const isContributePage = path === '/contribute'

  const sessionDurationMs = useMemo(() => {
    if (!sessionState?.sessionStart) {
      return 0
    }
    if (!sessionState.sessionEnd) {
      return 0
    }
    return sessionState.sessionEnd - sessionState.sessionStart
  }, [sessionState?.sessionEnd, sessionState?.sessionStart])

  const navigate = (nextPath: string) => {
    if (nextPath === path) {
      return
    }
    window.history.pushState({}, '', nextPath)
    setPath(nextPath)
  }

  const startSession = () => {
    clearSession()
    const now = Date.now()
    const firstQuestion = getRandomQuestion([])
    const initialState = buildEmptySession(firstQuestion, now)
    setSessionState(initialState)
    setSelectedKeys([])
    setShowFeedback(false)
    setElapsedMs(0)
  }

  const finishSession = () => {
    setSessionState((prev) => {
      if (!prev) {
        return prev
      }
      return {
        ...prev,
        ended: true,
        currentQuestionId: null,
        questionStart: null,
        sessionEnd: prev.sessionEnd ?? Date.now(),
      }
    })
  }

  const moveToNextQuestion = (prev: SessionState) => {
    const now = Date.now()
    const askedIds =
      prev.currentQuestionId === null
        ? prev.askedIds
        : addUniqueId(prev.askedIds, prev.currentQuestionId)
    const nextQuestion = getRandomQuestion(askedIds)

    if (!nextQuestion) {
      return {
        ...prev,
        askedIds,
        ended: true,
        currentQuestionId: null,
        questionStart: null,
        sessionEnd: prev.sessionEnd ?? now,
      }
    }

    return {
      ...prev,
      askedIds: addUniqueId(askedIds, nextQuestion.id),
      currentQuestionId: nextQuestion.id,
      questionStart: now,
    }
  }

  const advanceQuestion = () => {
    setSessionState((prev) => (prev ? moveToNextQuestion(prev) : prev))
    setSelectedKeys([])
    setShowFeedback(false)
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
    if (!currentQuestion || selectedKeys.length === 0 || !sessionState) {
      return
    }
    const isCorrect = matchesCorrectAnswers(currentQuestion, selectedKeys)
    const timeSpent = sessionState.questionStart ? Date.now() - sessionState.questionStart : 0
    const status: SessionEvent['result'] = isCorrect ? 'correct' : 'incorrect'
    const correctKeys = currentQuestion.answers
      .filter((answer) => answer.correct)
      .map((answer) => answer.key)

    const mistake: MistakeEntry | null = isCorrect
      ? null
      : {
          questionId: currentQuestion.id,
          prompt: currentQuestion.prompt,
          selected: toAnswerSnapshots(currentQuestion, selectedKeys),
          correct: toAnswerSnapshots(currentQuestion, correctKeys),
        }

    setSessionState((prev) => {
      if (!prev) {
        return prev
      }
      return {
        ...prev,
        events: [
          ...prev.events,
          {
            questionId: currentQuestion.id,
            prompt: currentQuestion.prompt,
            result: status,
            timeMs: timeSpent,
          },
        ],
        mistakes: mistake ? [...prev.mistakes, mistake] : prev.mistakes,
      }
    })

    setShowFeedback(true)
  }

  const handleSkip = () => {
    if (!currentQuestion || !sessionState) {
      return
    }
    const timeSpent = sessionState.questionStart ? Date.now() - sessionState.questionStart : 0
    setSessionState((prev) => {
      if (!prev) {
        return prev
      }
      const nextState = moveToNextQuestion({
        ...prev,
        events: [
          ...prev.events,
          {
            questionId: currentQuestion.id,
            prompt: currentQuestion.prompt,
            result: 'skipped',
            timeMs: timeSpent,
          },
        ],
      })
      return nextState
    })
    setSelectedKeys([])
    setShowFeedback(false)
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
            ? 'bg-emerald-500/20 text-emerald-200'
            : 'bg-rose-500/20 text-rose-200'
        }`}
      >
        {isCorrect ? 'Correct answer' : 'Incorrect answer'}
      </div>
    )
  }, [currentQuestion, selectedKeys, showFeedback])

  if (questions.length === 0) {
    return (
      <div className="min-h-screen bg-slate-950 px-4 py-12 text-slate-100">
        <div className="mx-auto max-w-3xl rounded-3xl border border-rose-500/40 bg-slate-900/80 p-6">
          <h1 className="text-2xl font-semibold text-white">No questions available</h1>
          <p className="mt-2 text-sm text-slate-300">
            Please add questions in <code className="text-rose-200">src/data/questions.ts</code> and
            reload the app.
          </p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-slate-950 px-4 py-10 text-slate-100">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-8">
        <header className="flex flex-col gap-6 rounded-3xl border border-slate-800 bg-gradient-to-br from-slate-900/80 via-slate-900/60 to-slate-950/90 p-8 shadow-lg shadow-slate-950/40">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">
                {APP_NAME}
              </p>
              <h1 className="mt-2 text-3xl font-semibold text-white sm:text-4xl">
                {isContributePage ? `Contribute to ${APP_NAME}` : 'Finite MCQ training sessions'}
              </h1>
              <p className="mt-3 max-w-2xl text-sm text-slate-300">
                {isContributePage
                  ? 'Support the project, share new questions, and help keep the training set fresh.'
                  : 'Run focused practice sessions with instant feedback, a live timer, and clean session stats. Each session goes through every question once, then ends automatically.'}
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <nav className="flex flex-wrap items-center gap-2 text-sm" aria-label="Primary">
                <a
                  className={`rounded-full px-4 py-2 font-semibold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-300 ${
                    !isContributePage
                      ? 'bg-slate-100/10 text-white'
                      : 'text-slate-300 hover:text-white'
                  }`}
                  href="/"
                  aria-current={!isContributePage ? 'page' : undefined}
                  onClick={(event) => {
                    event.preventDefault()
                    navigate('/')
                  }}
                >
                  Home
                </a>
                <a
                  className={`rounded-full px-4 py-2 font-semibold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-300 ${
                    isContributePage
                      ? 'bg-slate-100/10 text-white'
                      : 'text-slate-300 hover:text-white'
                  }`}
                  href="/contribute"
                  aria-current={isContributePage ? 'page' : undefined}
                  onClick={(event) => {
                    event.preventDefault()
                    navigate('/contribute')
                  }}
                >
                  Contribute
                </a>
              </nav>
              <div className="hidden items-center gap-3 rounded-2xl border border-slate-800 bg-slate-950/70 px-4 py-3 text-xs text-slate-300 sm:flex">
                <span className="h-2 w-2 rounded-full bg-emerald-400" />
                Ready · {questions.length} questions
              </div>
            </div>
          </div>
        </header>

        {isContributePage ? (
          <ContributePage />
        ) : (
          <>
            {mode === 'home' && (
              <section className="rounded-3xl border border-slate-800 bg-slate-900/70 p-8 text-center shadow-lg shadow-slate-900/40">
                <h2 className="text-2xl font-semibold text-white">Start a new session</h2>
                <p className="mt-3 text-sm text-slate-300">
                  Tap start when you are ready to answer questions. Finish anytime to see your
                  stats. Every session asks each question once and then wraps up automatically.
                </p>
                <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
                  <PrimaryButton onClick={startSession}>Start session</PrimaryButton>
                </div>
              </section>
            )}

            {mode === 'session' && currentQuestion && (
              <div className="flex flex-col gap-6">
                <SessionHeader
                  elapsed={formatDuration(elapsedMs)}
                  correct={correct}
                  incorrect={incorrect}
                  skipped={skipped}
                  streak={currentStreak}
                  bestStreak={bestStreak}
                  onFinish={finishSession}
                />

                <QuestionCard
                  question={currentQuestion}
                  selectedKeys={selectedKeys}
                  showFeedback={showFeedback}
                  onSelect={handleSelect}
                />

                <div className="flex flex-col gap-4 rounded-3xl border border-slate-800 bg-slate-900/60 p-5">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <div className="flex items-center gap-3">
                      {statusBadge}
                      {showFeedback && (
                        <p className="text-sm text-slate-300">
                          Review the highlighted choices and continue.
                        </p>
                      )}
                    </div>
                    <div className="flex flex-wrap items-center gap-3">
                      <SecondaryButton
                        onClick={handleSkip}
                        disabled={showFeedback}
                        className="border-amber-400/40 text-amber-100 hover:border-amber-300"
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
                  <p className="text-xs text-slate-400">
                    Skips do not count toward accuracy. Next question is available after checking.
                  </p>
                </div>
              </div>
            )}

            {mode === 'results' && (
              <StatsView
                totalAnswered={totalAnswered}
                correct={correct}
                incorrect={incorrect}
                skipped={skipped}
                accuracy={accuracy}
                avgTime={totalAnswered === 0 ? '0.0s' : formatSeconds(answeredTimeMs / totalAnswered)}
                bestStreak={bestStreak}
                sessionDuration={formatDuration(sessionDurationMs)}
                recent={recentTen}
                mistakes={sessionMistakes}
                onRestart={startSession}
              />
            )}
          </>
        )}

        <footer className="rounded-3xl border border-slate-800 bg-slate-900/60 px-6 py-5 text-xs text-slate-400">
          <div className="flex flex-col items-center justify-between gap-3 sm:flex-row">
            <span>{APP_NAME} · Practice smart, contribute smarter.</span>
            <nav className="flex items-center gap-3" aria-label="Footer">
              <a
                className="rounded-full px-3 py-1.5 text-xs font-semibold text-slate-300 transition hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-300"
                href="/"
                onClick={(event) => {
                  event.preventDefault()
                  navigate('/')
                }}
              >
                Home
              </a>
              <a
                className="rounded-full px-3 py-1.5 text-xs font-semibold text-slate-300 transition hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-300"
                href="/contribute"
                onClick={(event) => {
                  event.preventDefault()
                  navigate('/contribute')
                }}
              >
                Contribute
              </a>
            </nav>
          </div>
        </footer>
      </div>
    </div>
  )
}

export default App
