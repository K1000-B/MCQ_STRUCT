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
    <section className="w-full rounded-3xl border border-slate-200 bg-white/90 p-6 shadow-lg shadow-slate-200/40 backdrop-blur transition-colors dark:border-slate-800 dark:bg-slate-900/70 dark:shadow-slate-900/40 motion-reduce:transition-none">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">
          Question {question.id}
        </p>
        <span className="rounded-full border border-slate-200 bg-slate-100 px-3 py-1 text-xs text-slate-600 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-300">
          {question.multiple ? 'Multiple choice' : 'Single choice'}
        </span>
      </div>
      <h2 className="mt-4 text-lg font-semibold text-slate-900 dark:text-white sm:text-xl">
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
        <div className="mt-6 rounded-2xl border border-slate-200 bg-slate-100 p-4 text-sm text-slate-600 dark:border-slate-800 dark:bg-slate-950/70 dark:text-slate-300">
          <p className="font-semibold text-slate-900 dark:text-slate-100">Answer review</p>
          <p className="mt-1">Compare your selection with the highlighted options above.</p>
        </div>
      )}
    </section>
  )
}
