import { useTheme } from './ThemeProvider'

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()
  const isDark = theme === 'dark'

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-pressed={isDark}
      className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-2 text-xs font-semibold text-slate-700 shadow-sm transition-colors hover:border-slate-300 hover:text-slate-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-400 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-200 dark:hover:border-slate-700 dark:hover:text-white motion-reduce:transition-none"
    >
      <span className="flex h-6 w-6 items-center justify-center rounded-full bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-200">
        {isDark ? (
          <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden="true">
            <path
              fill="currentColor"
              d="M12 3.5a.75.75 0 0 1 .75.75V6a.75.75 0 0 1-1.5 0V4.25A.75.75 0 0 1 12 3.5Zm0 14a.75.75 0 0 1 .75.75V20a.75.75 0 0 1-1.5 0v-1.75a.75.75 0 0 1 .75-.75ZM4.25 11.25H6a.75.75 0 0 1 0 1.5H4.25a.75.75 0 0 1 0-1.5Zm13.75 0H19.75a.75.75 0 0 1 0 1.5H18a.75.75 0 0 1 0-1.5Zm-9.56-5.19a.75.75 0 0 1 1.06 0l.88.88a.75.75 0 1 1-1.06 1.06l-.88-.88a.75.75 0 0 1 0-1.06Zm7.44 7.44a.75.75 0 0 1 1.06 0l.88.88a.75.75 0 1 1-1.06 1.06l-.88-.88a.75.75 0 0 1 0-1.06Zm1.94-7.44a.75.75 0 0 1 0 1.06l-.88.88a.75.75 0 0 1-1.06-1.06l.88-.88a.75.75 0 0 1 1.06 0ZM7.62 15.56a.75.75 0 0 1 0 1.06l-.88.88a.75.75 0 1 1-1.06-1.06l.88-.88a.75.75 0 0 1 1.06 0Z"
            />
            <circle cx="12" cy="12" r="4" fill="currentColor" />
          </svg>
        ) : (
          <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden="true">
            <path
              fill="currentColor"
              d="M15.5 3.5a.75.75 0 0 1 .7.48A8 8 0 0 1 7.9 15.7a.75.75 0 0 1-.18 1.46 8.5 8.5 0 1 0 7.78-13.64z"
            />
          </svg>
        )}
      </span>
      <span>{isDark ? 'Dark' : 'Light'} mode</span>
    </button>
  )
}
