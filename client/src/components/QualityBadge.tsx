import { motion } from 'framer-motion';
import { Award, Star } from 'lucide-react';

export function QualityBadge() {
  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <motion.div
        className="relative"
        animate={{
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        {/* Glow Effect */}
        <motion.div
          className="absolute inset-0 rounded-full bg-primary/30 blur-2xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        {/* Badge */}
        <div className="relative flex h-32 w-32 items-center justify-center rounded-full border-4 border-primary/30 bg-card/50 backdrop-blur-sm shadow-2xl">
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/20 to-accent/20" />
          
          {/* Stars */}
          <div className="absolute inset-0">
            {[0, 72, 144, 216, 288].map((rotation, index) => (
              <motion.div
                key={index}
                className="absolute top-1/2 left-1/2"
                style={{
                  transform: `rotate(${rotation}deg) translateY(-50px)`,
                }}
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 2,
                  delay: index * 0.2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <Star className="h-4 w-4 fill-primary text-primary" />
              </motion.div>
            ))}
          </div>

          {/* Center Icon */}
          <Award className="relative z-10 h-12 w-12 text-primary" />
        </div>
      </motion.div>
    </div>
  );
}
