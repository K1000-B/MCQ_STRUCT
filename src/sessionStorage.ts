import type { SessionState } from './types'

export const SESSION_STORAGE_KEY = 'mcq_session_v1'

const isNumberArray = (value: unknown): value is number[] =>
  Array.isArray(value) && value.every((item) => typeof item === 'number')

const isSessionState = (value: unknown): value is SessionState => {
  if (!value || typeof value !== 'object') {
    return false
  }

  const record = value as Record<string, unknown>
  return (
    isNumberArray(record.askedIds) &&
    (typeof record.currentQuestionId === 'number' || record.currentQuestionId === null) &&
    typeof record.ended === 'boolean' &&
    Array.isArray(record.events) &&
    Array.isArray(record.mistakes) &&
    (typeof record.sessionStart === 'number' || record.sessionStart === null) &&
    (typeof record.sessionEnd === 'number' || record.sessionEnd === null) &&
    (typeof record.questionStart === 'number' || record.questionStart === null)
  )
}

export const loadSession = (): SessionState | null => {
  const raw = localStorage.getItem(SESSION_STORAGE_KEY)
  if (!raw) {
    return null
  }
  try {
    const parsed = JSON.parse(raw) as unknown
    return isSessionState(parsed) ? parsed : null
  } catch {
    return null
  }
}

export const saveSession = (state: SessionState) => {
  localStorage.setItem(SESSION_STORAGE_KEY, JSON.stringify(state))
}

export const clearSession = () => {
  localStorage.removeItem(SESSION_STORAGE_KEY)
}
