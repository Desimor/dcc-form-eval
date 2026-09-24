export const QUESTION_COUNT = 40

// Placeholder copy; replace with the real survey questions when available.
export const questions: string[] = Array.from(
  { length: QUESTION_COUNT },
  (_, i) => `Question ${i + 1}`,
)

export interface LikertOption {
  value: number
  label: string
}

export const likertOptions: LikertOption[] = [
  { value: 0, label: 'Strongly Disagree' },
  { value: 1, label: 'Disagree' },
  { value: 2, label: 'Somewhat Disagree' },
  { value: 3, label: 'Somewhat Agree' },
  { value: 4, label: 'Agree' },
  { value: 5, label: 'Strongly Agree' },
]
