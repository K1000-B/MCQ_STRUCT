import { useRef, useState } from 'react'
import { CONTACT_EMAIL, DONATION_URL } from '../config'
import { SecondaryButton } from './SecondaryButton'

const emailTemplate = `Prompt:
Answer type: single / multiple
Answers:
A) ...
B) ...
...
Correct answer(s):
Optional explanation:`

const mailtoHref = `mailto:${CONTACT_EMAIL}?subject=MCQ%20Question%20Submission`

export function ContributePage() {
  const [copyStatus, setCopyStatus] = useState<'idle' | 'copied' | 'error'>('idle')
  const timeoutRef = useRef<number | null>(null)

  const handleCopyEmail = () => {
    if (!navigator.clipboard) {
      setCopyStatus('error')
      return
    }

    navigator.clipboard
      .writeText(CONTACT_EMAIL)
      .then(() => {
        setCopyStatus('copied')
        if (timeoutRef.current) {
          window.clearTimeout(timeoutRef.current)
        }
        timeoutRef.current = window.setTimeout(() => {
          setCopyStatus('idle')
        }, 2000)
      })
      .catch(() => {
        setCopyStatus('error')
      })
  }

  return (
    <section className="flex flex-col gap-6">
      <div className="grid gap-6">
        <article className="flex h-full flex-col gap-4 rounded-3xl border border-slate-800 bg-slate-900/70 p-7 shadow-lg shadow-slate-950/40">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">
              Donations
            </p>
            <h2 className="mt-3 text-2xl font-semibold text-white">Support the project</h2>
            <p className="mt-3 text-sm text-slate-300">
              If this app helps you, you can donate €2 to buy me a coffee and support future
              improvements.
            </p>
          </div>
          <div className="mt-auto flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              className="inline-flex items-center justify-center rounded-full bg-sky-400 px-6 py-3 text-sm font-semibold text-slate-950 shadow-sm transition hover:bg-sky-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-200"
              href={DONATION_URL}
              rel="noreferrer"
              target="_blank"
            >
              Donate €2
            </a>
            <span className="text-xs text-slate-400">Donations are optional.</span>
          </div>
        </article>

        <article className="flex h-full flex-col gap-4 rounded-3xl border border-slate-800 bg-slate-900/70 p-7 shadow-lg shadow-slate-950/40">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">
              Questions
            </p>
            <h2 className="mt-3 text-2xl font-semibold text-white">Submit new questions</h2>
            <p className="mt-3 text-sm text-slate-300">
              To add new questions to the question pool, email your proposed question(s) using the
              format below.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-950/70 p-4">
            <p className="text-xs uppercase tracking-[0.3em] text-slate-500">Email</p>
            <div className="mt-2 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-sm font-semibold text-slate-100 sm:text-base">{CONTACT_EMAIL}</p>
              <div className="flex flex-wrap items-center gap-2">
                <a
                  className="inline-flex items-center justify-center rounded-full border border-slate-600 bg-slate-900 px-5 py-2.5 text-sm font-semibold text-slate-100 shadow-sm transition hover:border-slate-500 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-300"
                  href={mailtoHref}
                >
                  Email us
                </a>
                <SecondaryButton onClick={handleCopyEmail} type="button">
                  {copyStatus === 'copied'
                    ? 'Copied'
                    : copyStatus === 'error'
                      ? 'Copy failed'
                      : 'Copy email'}
                </SecondaryButton>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-950/70 p-4">
            <p className="text-xs uppercase tracking-[0.3em] text-slate-500">
              Submission template
            </p>
            <pre className="mt-3 whitespace-pre-wrap rounded-2xl border border-slate-800 bg-slate-900/60 p-4 text-xs text-slate-200">
              {emailTemplate}
            </pre>
          </div>
        </article>
      </div>
    </section>
  )
}
