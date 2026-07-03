import { motion } from 'framer-motion'

const nodes: [number, number][] = [
  [50, 50], [35, 30], [65, 30], [25, 45], [75, 45], [40, 65], [60, 65],
  [20, 55], [80, 55], [50, 20], [50, 80], [30, 50], [70, 50],
]

const edges: [number, number][] = [
  [0, 1], [0, 2], [0, 3], [0, 4], [0, 5], [0, 6], [1, 3], [2, 4],
  [3, 5], [4, 6], [5, 6], [1, 9], [2, 9], [5, 10], [6, 10], [3, 7],
  [4, 8], [7, 11], [8, 12], [11, 0], [12, 0],
]

export function NeuralNetwork() {
  return (
    <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
      {/* Central radial glow */}
      <div className="absolute h-[min(90vw,520px)] w-[min(90vw,520px)] rounded-full bg-[radial-gradient(circle,rgba(34,211,238,0.18)_0%,rgba(6,182,212,0.06)_40%,transparent_70%)]" />

      <motion.svg
        viewBox="0 0 100 100"
        className="h-[min(85vw,480px)] w-[min(85vw,480px)] opacity-70"
        initial={{ opacity: 0, scale: 0.92 }}
        animate={{ opacity: 0.7, scale: 1 }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
      >
        <defs>
          <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="0.6" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <linearGradient id="circuitGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.9" />
            <stop offset="50%" stopColor="#06b6d4" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#6366f1" stopOpacity="0.5" />
          </linearGradient>
        </defs>

        {/* Outer ring */}
        <circle
          cx="50"
          cy="50"
          r="42"
          fill="none"
          stroke="url(#circuitGrad)"
          strokeWidth="0.15"
          opacity="0.4"
        />
        <circle
          cx="50"
          cy="50"
          r="32"
          fill="none"
          stroke="url(#circuitGrad)"
          strokeWidth="0.12"
          opacity="0.3"
          strokeDasharray="2 3"
        />

        {/* Circuit edges */}
        {edges.map(([a, b], i) => (
          <motion.line
            key={`e-${i}`}
            x1={nodes[a][0]}
            y1={nodes[a][1]}
            x2={nodes[b][0]}
            y2={nodes[b][1]}
            stroke="url(#circuitGrad)"
            strokeWidth="0.2"
            filter="url(#glow)"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.65 }}
            transition={{ duration: 1.5, delay: i * 0.04 }}
          />
        ))}

        {/* Nodes */}
        {nodes.map(([cx, cy], i) => (
          <motion.circle
            key={`n-${i}`}
            cx={cx}
            cy={cy}
            r={i === 0 ? 1.8 : 1.1}
            fill={i === 0 ? '#22d3ee' : '#06b6d4'}
            filter="url(#glow)"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: i === 0 ? 1 : 0.8 }}
            transition={{ duration: 0.4, delay: 0.3 + i * 0.05 }}
          />
        ))}

        {/* Brain-like organic paths */}
        <motion.path
          d="M50,18 Q62,25 58,38 Q55,50 50,50 Q45,50 42,38 Q38,25 50,18"
          fill="none"
          stroke="#22d3ee"
          strokeWidth="0.15"
          opacity="0.35"
          animate={{ opacity: [0.25, 0.45, 0.25] }}
          transition={{ duration: 4, repeat: Infinity }}
        />
        <motion.path
          d="M50,82 Q38,75 42,62 Q45,50 50,50 Q55,50 58,62 Q62,75 50,82"
          fill="none"
          stroke="#6366f1"
          strokeWidth="0.15"
          opacity="0.3"
          animate={{ opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 5, repeat: Infinity, delay: 1 }}
        />
      </motion.svg>
    </div>
  )
}
