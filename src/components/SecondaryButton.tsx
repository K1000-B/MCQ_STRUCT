import type { ButtonHTMLAttributes } from 'react'

type SecondaryButtonProps = ButtonHTMLAttributes<HTMLButtonElement>

export function SecondaryButton({ className = '', ...props }: SecondaryButtonProps) {
  return (
    <button
      {...props}
      className={`rounded-full border border-slate-700 bg-slate-900 px-5 py-2.5 text-sm font-semibold text-slate-100 shadow-sm transition hover:border-slate-500 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-300 disabled:cursor-not-allowed disabled:opacity-60 ${className}`}
    />
  )
}
