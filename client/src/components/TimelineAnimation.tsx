import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

const milestones = [
  { day: 'Tag 1-3', label: 'Konzept & Design', progress: 25 },
  { day: 'Tag 4-7', label: 'Entwicklung', progress: 50 },
  { day: 'Tag 8-12', label: 'Content & Tests', progress: 75 },
  { day: 'Tag 13-14', label: 'Launch', progress: 100 },
];

export function TimelineAnimation() {
  return (
    <div className="absolute inset-0 flex items-center justify-center p-8">
      <div className="relative w-full max-w-lg">
        {/* Progress Bar */}
        <div className="relative h-2 w-full rounded-full bg-border/30 overflow-hidden">
          <motion.div
            className="absolute inset-y-0 left-0 bg-gradient-to-r from-primary to-accent rounded-full"
            initial={{ width: '0%' }}
            animate={{ width: '100%' }}
            transition={{
              duration: 3,
              repeat: Infinity,
              repeatDelay: 1,
              ease: "easeInOut"
            }}
          />
        </div>

        {/* Milestones */}
        <div className="mt-8 space-y-4">
          {milestones.map((milestone, index) => (
            <motion.div
              key={index}
              className="flex items-center gap-4"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                delay: index * 0.7,
                duration: 0.5,
                repeat: Infinity,
                repeatDelay: 3
              }}
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{
                  delay: index * 0.7 + 0.3,
                  duration: 0.3,
                  repeat: Infinity,
                  repeatDelay: 3
                }}
              >
                <CheckCircle2 className="h-5 w-5 text-primary" />
              </motion.div>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-foreground/90">{milestone.label}</span>
                  <span className="text-xs text-muted-foreground">{milestone.day}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
