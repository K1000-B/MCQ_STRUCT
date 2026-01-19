export type Answer = {
  key: string
  text: string
  correct: boolean
}

export type Question = {
  id: number
  prompt: string
  answers: Answer[]
  multiple: boolean
}

export type SessionResult = {
  questionId: number
  prompt: string
  result: 'correct' | 'incorrect' | 'skipped'
  timeMs: number
}
