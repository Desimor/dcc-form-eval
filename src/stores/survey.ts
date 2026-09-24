import { ref, computed, watch } from 'vue'
import { defineStore } from 'pinia'
import { QUESTION_COUNT } from '@/data/questions'
import type { ResultKey } from '@/data/results'

const STORAGE_KEY = 'survey-answers'

function loadAnswers(): Array<number | null> {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    const parsed = raw ? JSON.parse(raw) : null
    if (Array.isArray(parsed) && parsed.length === QUESTION_COUNT) {
      return parsed
    }
  } catch {
    // ignore malformed/unavailable storage and fall back to a blank survey
  }
  return Array(QUESTION_COUNT).fill(null)
}

export const useSurveyStore = defineStore('survey', () => {
  const answers = ref<Array<number | null>>(loadAnswers())

  watch(
    answers,
    (value) => localStorage.setItem(STORAGE_KEY, JSON.stringify(value)),
    { deep: true },
  )

  function setAnswer(index: number, value: number) {
    answers.value[index] = value
  }

  function reset() {
    answers.value = Array(QUESTION_COUNT).fill(null)
  }

  const answeredCount = computed(() => answers.value.filter((a) => a !== null).length)
  const isComplete = computed(() => answeredCount.value === QUESTION_COUNT)

  // Question index (0-based) rotates through the 4 categories: i % 4.
  function categoryForIndex(index: number): ResultKey {
    switch (index % 4) {
      case 0:
        return 'discovery'
      case 1:
        return 'dependence'
      case 2:
        return 'development'
      default:
        return 'direction'
    }
  }

  const scores = computed<Record<ResultKey, number>>(() => {
    const totals: Record<ResultKey, number> = {
      discovery: 0,
      dependence: 0,
      development: 0,
      direction: 0,
    }
    answers.value.forEach((value, index) => {
      totals[categoryForIndex(index)] += value ?? 0
    })
    return totals
  })

  return { answers, setAnswer, reset, answeredCount, isComplete, scores }
})
