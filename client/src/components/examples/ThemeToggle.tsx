import ThemeToggle from '../ThemeToggle'

export default function ThemeToggleExample() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 via-purple-600 to-pink-500 p-8 flex items-center justify-center">
      <div className="flex items-center gap-4">
        <span className="text-white font-medium">Toggle Theme:</span>
        <ThemeToggle />
      </div>
    </div>
  )
}