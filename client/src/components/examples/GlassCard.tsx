import GlassCard from '../GlassCard'

export default function GlassCardExample() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500 p-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <GlassCard intensity="light" className="p-6">
          <h3 className="text-lg font-semibold text-white mb-2">Light Glass</h3>
          <p className="text-white/80">This is a light intensity glass card.</p>
        </GlassCard>
        
        <GlassCard intensity="medium" className="p-6">
          <h3 className="text-lg font-semibold text-white mb-2">Medium Glass</h3>
          <p className="text-white/80">This is a medium intensity glass card.</p>
        </GlassCard>
        
        <GlassCard intensity="heavy" className="p-6">
          <h3 className="text-lg font-semibold text-white mb-2">Heavy Glass</h3>
          <p className="text-white/80">This is a heavy intensity glass card.</p>
        </GlassCard>
      </div>
    </div>
  )
}