import Header from '../Header'

export default function HeaderExample() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-600 via-purple-700 to-pink-600">
      <Header />
      <div className="pt-32 p-8">
        <div className="text-center text-white">
          <h1 className="text-4xl font-bold mb-4">Header Component</h1>
          <p className="text-white/80">This is a demo of the glassmorphism header with navigation.</p>
        </div>
      </div>
    </div>
  )
}