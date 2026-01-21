import type { ReactNode } from 'react'
import { useEffect, useMemo, useRef } from 'react'

type ModalProps = {
  isOpen: boolean
  title: string
  onClose: () => void
  children: ReactNode
}

const focusableSelector =
  'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])'

export function Modal({ isOpen, title, onClose, children }: ModalProps) {
  const dialogRef = useRef<HTMLDivElement | null>(null)
  const titleId = useMemo(
    () => `modal-title-${title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`,
    [title],
  )

  useEffect(() => {
    if (!isOpen) {
      return
    }

    const previousActive = document.activeElement as HTMLElement | null
    const focusables = dialogRef.current?.querySelectorAll<HTMLElement>(focusableSelector)
    const firstFocusable = focusables?.[0] ?? dialogRef.current

    document.body.style.overflow = 'hidden'
    firstFocusable?.focus()

    return () => {
      document.body.style.overflow = ''
      previousActive?.focus()
    }
  }, [isOpen])

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'Escape') {
      onClose()
      return
    }

    if (event.key !== 'Tab') {
      return
    }

    const focusables = dialogRef.current?.querySelectorAll<HTMLElement>(focusableSelector)
    if (!focusables || focusables.length === 0) {
      event.preventDefault()
      return
    }

    const first = focusables[0]
    const last = focusables[focusables.length - 1]

    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault()
      last.focus()
      return
    }

    if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault()
      first.focus()
    }
  }

  if (!isOpen) {
    return null
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4 py-6">
      <div className="fixed inset-0 bg-black/40 backdrop-blur-sm" aria-hidden="true" />
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        tabIndex={-1}
        onKeyDown={handleKeyDown}
        className="relative z-10 w-full max-w-lg rounded-3xl border border-slate-800 bg-slate-950 p-6 text-slate-100 shadow-2xl shadow-slate-950/60"
      >
        <h2 id={titleId} className="text-2xl font-semibold text-white">
          {title}
        </h2>
        <div className="mt-4 text-sm text-slate-300">{children}</div>
      </div>
    </div>
  )
}
