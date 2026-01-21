export type Answer = {
  key: string
  text: string
  correct: boolean
}

export type AnswerSnapshot = {
  key: string
  text: string
}

export type Question = {
  id: number
  prompt: string
  answers: Answer[]
  multiple: boolean
}

export type SessionEvent = {
  questionId: number
  prompt: string
  result: 'correct' | 'incorrect' | 'skipped'
  timeMs: number
}

export type MistakeEntry = {
  questionId: number
  prompt: string
  selected: AnswerSnapshot[]
  correct: AnswerSnapshot[]
}

export type SessionState = {
  askedIds: number[]
  currentQuestionId: number | null
  ended: boolean
  events: SessionEvent[]
  mistakes: MistakeEntry[]
  sessionStart: number | null
  sessionEnd: number | null
  questionStart: number | null
}
