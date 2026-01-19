import { useTheme } from '../context/ThemeContext'

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()
  const nextLabel = theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'
  const badgeLabel = theme === 'dark' ? 'Dark mode' : 'Light mode'

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate-600 transition-colors hover:border-slate-300 hover:text-slate-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-400 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300 dark:hover:border-slate-500 dark:hover:text-white"
      aria-label={nextLabel}
    >
      <span className="h-2 w-2 rounded-full bg-sky-500 dark:bg-sky-300" aria-hidden="true" />
      {badgeLabel}
    </button>
  )
}
