import type { SessionResult } from '../types'
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
  recent: SessionResult[]
  onRestart: () => void
}

const statusStyles: Record<SessionResult['result'], string> = {
  correct: 'bg-emerald-500/15 text-emerald-700 border-emerald-500/40 dark:text-emerald-200',
  incorrect: 'bg-rose-500/15 text-rose-700 border-rose-500/40 dark:text-rose-200',
  skipped: 'bg-amber-500/15 text-amber-700 border-amber-500/40 dark:text-amber-200',
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
  onRestart,
}: StatsViewProps) {
  return (
    <section className="w-full rounded-3xl border border-slate-200 bg-white/90 p-6 shadow-lg shadow-slate-200/40 transition-colors dark:border-slate-800 dark:bg-slate-900/70 dark:shadow-slate-900/40 motion-reduce:transition-none">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-500 dark:text-slate-400">
            Session summary
          </p>
          <h2 className="mt-2 text-2xl font-semibold text-slate-900 dark:text-white">
            Your results
          </h2>
        </div>
        <PrimaryButton onClick={onRestart}>Start new session</PrimaryButton>
      </div>

      <div className="mt-6 grid gap-6 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4 dark:border-slate-800 dark:bg-slate-950/70">
            <p className="text-xs uppercase tracking-wide text-slate-500 dark:text-slate-400">
              Score
            </p>
            <p className="mt-2 text-2xl font-semibold text-emerald-600 dark:text-emerald-200">
              {correct} / {totalAnswered}
            </p>
            <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
              Accuracy {accuracy.toFixed(1)}%
            </p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4 dark:border-slate-800 dark:bg-slate-950/70">
            <p className="text-xs uppercase tracking-wide text-slate-500 dark:text-slate-400">
              Breakdown
            </p>
            <p className="mt-2 text-sm text-slate-700 dark:text-slate-200">
              Correct: {correct}
            </p>
            <p className="text-sm text-slate-700 dark:text-slate-200">Incorrect: {incorrect}</p>
            <p className="text-sm text-slate-700 dark:text-slate-200">Skipped: {skipped}</p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4 dark:border-slate-800 dark:bg-slate-950/70">
            <p className="text-xs uppercase tracking-wide text-slate-500 dark:text-slate-400">
              Pace
            </p>
            <p className="mt-2 text-sm text-slate-700 dark:text-slate-200">
              Avg time per answer: {avgTime}
            </p>
            <p className="text-sm text-slate-700 dark:text-slate-200">
              Session time: {sessionDuration}
            </p>
            <p className="text-sm text-slate-700 dark:text-slate-200">
              Best streak: {bestStreak}
            </p>
          </div>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4 dark:border-slate-800 dark:bg-slate-950/70">
          <p className="text-sm font-semibold text-slate-900 dark:text-slate-200">
            Last 10 questions
          </p>
          <div className="mt-3 grid gap-2">
            {recent.length === 0 ? (
              <div className="rounded-2xl border border-dashed border-slate-300 p-4 text-sm text-slate-500 dark:border-slate-700 dark:text-slate-400">
                No answered questions yet.
              </div>
            ) : (
              recent.map((item) => (
                <div
                  key={`${item.questionId}-${item.result}-${item.timeMs}`}
                  className="flex items-center justify-between gap-3 rounded-2xl border border-slate-200 bg-white p-3 text-sm text-slate-600 transition-colors dark:border-slate-800 dark:bg-slate-900/60 dark:text-slate-300 motion-reduce:transition-none"
                >
                  <div className="min-w-0">
                    <p className="text-sm font-semibold text-slate-900 dark:text-slate-100">
                      #{item.questionId}
                    </p>
                    <p className="truncate text-xs text-slate-500 dark:text-slate-400">
                      {item.prompt}
                    </p>
                  </div>
                  <span
                    className={`shrink-0 rounded-full border px-3 py-1 text-[0.7rem] font-semibold ${statusStyles[item.result]}`}
                  >
                    {item.result.charAt(0).toUpperCase() + item.result.slice(1)}
                  </span>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
