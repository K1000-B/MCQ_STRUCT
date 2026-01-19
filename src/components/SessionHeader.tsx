import { SecondaryButton } from './SecondaryButton'

type SessionHeaderProps = {
  elapsed: string
  correct: number
  incorrect: number
  skipped: number
  streak: number
  bestStreak: number
  onFinish: () => void
}

export function SessionHeader({
  elapsed,
  correct,
  incorrect,
  skipped,
  streak,
  bestStreak,
  onFinish,
}: SessionHeaderProps) {
  return (
    <header className="flex flex-col gap-4 rounded-3xl border border-slate-200 bg-white/80 p-5 shadow-md shadow-slate-200/60 transition-colors dark:border-slate-800 dark:bg-slate-900/60 dark:shadow-slate-950/40 sm:flex-row sm:items-center sm:justify-between">
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-500 dark:text-slate-400">
          Session live
        </p>
        <p className="mt-2 text-2xl font-semibold text-slate-900 dark:text-white">{elapsed}</p>
      </div>
      <div className="grid grid-cols-2 gap-3 text-sm text-slate-600 dark:text-slate-300 sm:flex sm:items-center sm:gap-6">
        <div>
          <p className="text-xs uppercase tracking-wide text-slate-500 dark:text-slate-400">Correct</p>
          <p className="text-lg font-semibold text-emerald-600 dark:text-emerald-300">
            {correct}
          </p>
        </div>
        <div>
          <p className="text-xs uppercase tracking-wide text-slate-500 dark:text-slate-400">
            Incorrect
          </p>
          <p className="text-lg font-semibold text-rose-600 dark:text-rose-300">
            {incorrect}
          </p>
        </div>
        <div>
          <p className="text-xs uppercase tracking-wide text-slate-500 dark:text-slate-400">
            Skipped
          </p>
          <p className="text-lg font-semibold text-amber-600 dark:text-amber-200">
            {skipped}
          </p>
        </div>
        <div>
          <p className="text-xs uppercase tracking-wide text-slate-500 dark:text-slate-400">
            Streak
          </p>
          <p className="text-lg font-semibold text-sky-600 dark:text-sky-200">{streak}</p>
        </div>
        <div>
          <p className="text-xs uppercase tracking-wide text-slate-500 dark:text-slate-400">
            Best
          </p>
          <p className="text-lg font-semibold text-sky-600 dark:text-sky-200">
            {bestStreak}
          </p>
        </div>
      </div>
      <SecondaryButton onClick={onFinish}>Finish session</SecondaryButton>
    </header>
  )
}
