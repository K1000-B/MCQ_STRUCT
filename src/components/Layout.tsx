import type { ReactNode } from 'react'
import { ThemeToggle } from './ThemeToggle'

type LayoutProps = {
  mode: 'home' | 'session' | 'results'
  questionCount: number
  sessionTopBar?: ReactNode
  children: ReactNode
}

export function Layout({ mode, questionCount, sessionTopBar, children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 transition-colors duration-200 dark:bg-slate-950 dark:text-slate-100 motion-reduce:transition-none">
      <div className="mx-auto flex min-h-screen w-full max-w-6xl flex-col gap-6 px-4 py-6 sm:gap-8 sm:py-8">
        <header className="w-full rounded-3xl border border-slate-200 bg-white/90 p-6 shadow-sm shadow-slate-200/40 dark:border-slate-800 dark:bg-slate-900/70 dark:shadow-slate-900/40">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">
                PulsePrep
              </p>
              <h1 className="mt-2 text-2xl font-semibold text-slate-900 dark:text-white sm:text-3xl">
                Random MCQ training, session-focused
              </h1>
              <p className="mt-2 max-w-2xl text-sm text-slate-600 dark:text-slate-300">
                Run focused practice sessions with instant feedback and live stats. Each session
                resets when you finish—there is no saved history.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <div className="inline-flex items-center gap-2 rounded-2xl border border-slate-200 bg-slate-100 px-3 py-2 text-xs font-semibold text-slate-600 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-300">
                <span className="h-2 w-2 rounded-full bg-emerald-500" />
                Ready · {questionCount} questions
              </div>
              <ThemeToggle />
            </div>
          </div>
        </header>

        {mode === 'session' && sessionTopBar && (
          <div className="hidden lg:sticky lg:top-6 lg:z-20 lg:block">{sessionTopBar}</div>
        )}

        <main className="flex w-full flex-1 flex-col gap-6 sm:gap-8">{children}</main>
      </div>
    </div>
  )
}
