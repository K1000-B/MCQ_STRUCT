import type { Question } from '../types'
import { AnswerOption } from './AnswerOption'

type QuestionCardProps = {
  question: Question
  selectedKeys: string[]
  showFeedback: boolean
  onSelect: (key: string) => void
}

export function QuestionCard({
  question,
  selectedKeys,
  showFeedback,
  onSelect,
}: QuestionCardProps) {
  const groupName = `question-${question.id}`

  return (
    <section className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6 shadow-lg shadow-slate-900/40 backdrop-blur">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
          Question {question.id}
        </p>
        <span className="rounded-full border border-slate-700 bg-slate-950 px-3 py-1 text-xs text-slate-300">
          {question.multiple ? 'Multiple choice' : 'Single choice'}
        </span>
      </div>
      <h2 className="mt-4 text-lg font-semibold text-white sm:text-xl">
        {question.prompt}
      </h2>
      <div className="mt-6 grid gap-3">
        {question.answers.map((answer) => (
          <AnswerOption
            key={answer.key}
            answer={answer}
            multiple={question.multiple}
            selected={selectedKeys.includes(answer.key)}
            showFeedback={showFeedback}
            name={groupName}
            onSelect={onSelect}
          />
        ))}
      </div>
      {showFeedback && (
        <div className="mt-6 rounded-2xl border border-slate-800 bg-slate-950/70 p-4 text-sm text-slate-300">
          <p className="font-semibold text-slate-100">Answer review</p>
          <p className="mt-1">Compare your selection with the highlighted options above.</p>
        </div>
      )}
    </section>
  )
}
