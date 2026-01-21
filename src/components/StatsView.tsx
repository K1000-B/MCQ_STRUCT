import type { MistakeEntry, SessionEvent } from '../types'
import { PrimaryButton } from './PrimaryButton'

type StatsViewProps = {
  totalAnswered: number
  correct: number
  incorrect: number
  skipped: number
  accuracy: number
  avgTime: string
  bestStreak: number
  sessionDuration: string
  recent: SessionEvent[]
  mistakes: MistakeEntry[]
  onRestart: () => void
}

const statusStyles: Record<SessionEvent['result'], string> = {
  correct: 'bg-emerald-500/15 text-emerald-200 border-emerald-500/40',
  incorrect: 'bg-rose-500/15 text-rose-200 border-rose-500/40',
  skipped: 'bg-amber-500/15 text-amber-200 border-amber-500/40',
}

export function StatsView({
  totalAnswered,
  correct,
  incorrect,
  skipped,
  accuracy,
  avgTime,
  bestStreak,
  sessionDuration,
  recent,
  mistakes,
  onRestart,
}: StatsViewProps) {
  return (
    <section className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6 shadow-lg shadow-slate-900/40">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-400">
            Session summary
          </p>
          <h2 className="mt-2 text-2xl font-semibold text-white">Your results</h2>
        </div>
        <PrimaryButton onClick={onRestart}>Start new session</PrimaryButton>
      </div>

      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <div className="rounded-2xl border border-slate-800 bg-slate-950/70 p-4">
          <p className="text-xs uppercase tracking-wide text-slate-400">Score</p>
          <p className="mt-2 text-2xl font-semibold text-emerald-200">
            {correct} / {totalAnswered}
          </p>
          <p className="mt-1 text-sm text-slate-400">Accuracy {accuracy.toFixed(1)}%</p>
        </div>
        <div className="rounded-2xl border border-slate-800 bg-slate-950/70 p-4">
          <p className="text-xs uppercase tracking-wide text-slate-400">Breakdown</p>
          <p className="mt-2 text-sm text-slate-200">Correct: {correct}</p>
          <p className="text-sm text-slate-200">Incorrect: {incorrect}</p>
          <p className="text-sm text-slate-200">Skipped: {skipped}</p>
        </div>
        <div className="rounded-2xl border border-slate-800 bg-slate-950/70 p-4">
          <p className="text-xs uppercase tracking-wide text-slate-400">Pace</p>
          <p className="mt-2 text-sm text-slate-200">Avg time per answer: {avgTime}</p>
          <p className="text-sm text-slate-200">Session time: {sessionDuration}</p>
          <p className="text-sm text-slate-200">Best streak: {bestStreak}</p>
        </div>
      </div>

      <div className="mt-8">
        <p className="text-sm font-semibold text-slate-200">Mistakes recap</p>
        <div className="mt-3 grid gap-3">
          {mistakes.length === 0 ? (
            <div className="rounded-2xl border border-dashed border-slate-700 p-4 text-sm text-slate-400">
              Great job! No incorrect answers in this session.
            </div>
          ) : (
            mistakes.map((mistake) => (
              <div
                key={`mistake-${mistake.questionId}`}
                className="rounded-2xl border border-slate-800 bg-slate-950/70 p-4"
              >
                <p className="text-sm font-semibold text-slate-100">#{mistake.questionId}</p>
                <p className="mt-1 text-sm text-slate-300">{mistake.prompt}</p>
                <div className="mt-4 grid gap-4 sm:grid-cols-2">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                      Your answer
                    </p>
                    <ul className="mt-2 space-y-1 text-sm text-rose-200">
                      {mistake.selected.map((answer) => (
                        <li key={`${mistake.questionId}-selected-${answer.key}`}>
                          {answer.key}. {answer.text}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                      Correct answer
                    </p>
                    <ul className="mt-2 space-y-1 text-sm text-emerald-200">
                      {mistake.correct.map((answer) => (
                        <li key={`${mistake.questionId}-correct-${answer.key}`}>
                          {answer.key}. {answer.text}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>

      <div className="mt-8">
        <p className="text-sm font-semibold text-slate-200">Last 10 questions</p>
        <div className="mt-3 grid gap-3">
          {recent.length === 0 ? (
            <div className="rounded-2xl border border-dashed border-slate-700 p-4 text-sm text-slate-400">
              No answered questions yet.
            </div>
          ) : (
            recent.map((item) => (
              <div
                key={`${item.questionId}-${item.result}-${item.timeMs}`}
                className="flex flex-col gap-2 rounded-2xl border border-slate-800 bg-slate-950/70 p-4 sm:flex-row sm:items-center sm:justify-between"
              >
                <div>
                  <p className="text-sm font-semibold text-slate-100">#{item.questionId}</p>
                  <p className="text-sm text-slate-400">{item.prompt}</p>
                </div>
                <span
                  className={`w-fit rounded-full border px-3 py-1 text-xs font-semibold ${statusStyles[item.result]}`}
                >
                  {item.result.charAt(0).toUpperCase() + item.result.slice(1)}
                </span>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  )
}
