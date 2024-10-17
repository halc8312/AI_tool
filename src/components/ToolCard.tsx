import React from 'react'
import { Link } from 'react-router-dom'
import { Star } from 'lucide-react'
import { Tool, Difficulty } from '../types'

const difficultyColor: Record<Difficulty, string> = {
  '低': 'bg-green-500',
  '低～中': 'bg-green-400',
  '中': 'bg-yellow-500',
  '中～高': 'bg-orange-500',
  '高': 'bg-red-500',
  '非常に高': 'bg-red-600'
}

interface ToolCardProps {
  tool: Tool
  isFavorite: boolean
  toggleFavorite: (id: string) => void
}

const ToolCard: React.FC<ToolCardProps> = React.memo(({ tool, isFavorite, toggleFavorite }) => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg">
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <Link to={`/tool/${tool.id}`} className="text-xl font-semibold text-indigo-700 hover:text-indigo-500 transition-colors duration-300">
            {tool.name}
          </Link>
          <button
            onClick={() => toggleFavorite(tool.id)}
            className="text-yellow-500 focus:outline-none transition-colors duration-300 hover:text-yellow-600"
            aria-label={isFavorite ? 'お気に入りから削除' : 'お気に入りに追加'}
          >
            <Star fill={isFavorite ? 'currentColor' : 'none'} size={24} />
          </button>
        </div>
        <p className="text-gray-600 mb-4">{tool.description}</p>
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium text-gray-500">カテゴリー: {tool.category}</span>
          <span
            className={`text-xs font-semibold inline-block py-1 px-2 rounded-full text-white ${difficultyColor[tool.difficulty]}`}
          >
            {tool.difficulty}
          </span>
        </div>
      </div>
    </div>
  )
})

export default ToolCard