import type { Answer } from '../types'

type AnswerOptionProps = {
  answer: Answer
  multiple: boolean
  selected: boolean
  showFeedback: boolean
  name: string
  onSelect: (key: string) => void
}

const baseClasses =
  'group flex w-full cursor-pointer items-start gap-3 rounded-2xl border px-4 py-3 text-left text-sm transition focus-within:ring-2 focus-within:ring-sky-400 focus-within:ring-offset-2 focus-within:ring-offset-slate-950'

export function AnswerOption({
  answer,
  multiple,
  selected,
  showFeedback,
  name,
  onSelect,
}: AnswerOptionProps) {
  const isCorrect = answer.correct
  const statusStyles = showFeedback
    ? isCorrect
      ? 'border-emerald-400/70 bg-emerald-500/10'
      : selected
        ? 'border-rose-400/70 bg-rose-500/10'
        : 'border-slate-800 bg-slate-900/40'
    : selected
      ? 'border-sky-400/70 bg-sky-500/10'
      : 'border-slate-800 bg-slate-900/40'

  return (
    <label className={`${baseClasses} ${statusStyles}`}>
      <span className="mt-1">
        <input
          type={multiple ? 'checkbox' : 'radio'}
          name={name}
          checked={selected}
          onChange={() => onSelect(answer.key)}
          disabled={showFeedback}
          className="h-4 w-4 rounded border-slate-600 text-sky-400 focus:ring-sky-400"
        />
      </span>
      <span className="flex-1 text-slate-100">
        <span className="block font-medium">{answer.text}</span>
      </span>
      {showFeedback && isCorrect && (
        <span className="rounded-full bg-emerald-500/20 px-3 py-1 text-xs font-semibold text-emerald-300">
          Correct
        </span>
      )}
      {showFeedback && !isCorrect && selected && (
        <span className="rounded-full bg-rose-500/20 px-3 py-1 text-xs font-semibold text-rose-300">
          Incorrect
        </span>
      )}
    </label>
  )
}
