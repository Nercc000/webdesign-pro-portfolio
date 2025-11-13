import { motion } from 'framer-motion';
import { Award, CheckCircle2 } from 'lucide-react';

const qualityMetrics = [
  { label: '100%', sublabel: 'Zufriedenheit' },
  { label: 'A+', sublabel: 'Performance' },
  { label: '0', sublabel: 'Bugs' },
];

export function QualityBadge() {
  return (
    <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
      {/* Background Glow */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10"
        animate={{
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Quality Metrics Grid */}
      <div className="relative grid grid-cols-3 gap-4 p-6">
        {qualityMetrics.map((metric, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center gap-1"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: index * 0.2,
              duration: 0.5,
            }}
          >
            <motion.div
              className="flex h-16 w-16 items-center justify-center rounded-xl border border-primary/30 bg-card/50 backdrop-blur-sm shadow-lg"
              whileHover={{ scale: 1.1, rotate: 5 }}
              animate={{
                y: [0, -5, 0],
              }}
              transition={{
                y: {
                  duration: 2,
                  delay: index * 0.3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }
              }}
            >
              <span className="text-xl font-bold text-primary">{metric.label}</span>
            </motion.div>
            <span className="text-xs font-medium text-foreground/60">{metric.sublabel}</span>
          </motion.div>
        ))}
      </div>

      {/* Floating Check Icons */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(3)].map((_, index) => (
          <motion.div
            key={index}
            className="absolute"
            style={{
              left: `${20 + index * 30}%`,
              top: `${15 + index * 25}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 3,
              delay: index * 0.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <CheckCircle2 className="h-6 w-6 text-primary/30" />
          </motion.div>
        ))}
      </div>

      {/* Center Award Badge */}
      <motion.div
        className="absolute bottom-4 right-4"
        animate={{
          rotate: [0, 10, -10, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <div className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-primary/50 bg-primary/10 backdrop-blur-sm">
          <Award className="h-6 w-6 text-primary" />
        </div>
      </motion.div>
    </div>
  );
}
