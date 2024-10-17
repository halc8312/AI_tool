export const DIFFICULTIES = ['低', '低～中', '中', '中～高', '高', '非常に高'] as const

export type Difficulty = typeof DIFFICULTIES[number]

export interface Tool {
  id: string
  name: string
  description: string
  difficulty: Difficulty
  category: string
}