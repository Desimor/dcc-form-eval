export type ResultKey = 'discovery' | 'dependence' | 'development' | 'direction'

export interface ResultCategory {
  key: ResultKey
  title: string
  description: string
}

// Descriptions are placeholders pending copy for each category.
export const resultCategories: ResultCategory[] = [
  { key: 'discovery', title: 'Discovery', description: 'Description coming soon.' },
  { key: 'dependence', title: 'Dependence', description: 'Description coming soon.' },
  { key: 'development', title: 'Development', description: 'Description coming soon.' },
  { key: 'direction', title: 'Direction', description: 'Description coming soon.' },
]
