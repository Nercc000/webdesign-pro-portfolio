import { motion } from "framer-motion";
import { Code2, Palette, Zap } from "lucide-react";

export function Visual3DCard() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: 0.3, type: "spring" }}
      whileHover={{ scale: 1.02, rotateY: 5 }}
      className="relative col-span-4 md:col-span-1 row-span-2 overflow-hidden rounded-2xl bg-gradient-to-br from-primary/20 via-accent/20 to-primary/20 border border-border/50"
      style={{ transformStyle: "preserve-3d" }}
    >
      <div className="absolute inset-0 bg-grid-white/5 [mask-image:radial-gradient(white,transparent_85%)]" />
      
      <div className="relative z-10 flex h-full flex-col items-center justify-center p-6 space-y-8">
        {/* Floating Icons */}
        <motion.div
          animate={{
            y: [0, -20, 0],
            rotate: [0, 10, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="relative"
        >
          <div className="rounded-3xl bg-card/80 backdrop-blur-sm p-6 shadow-2xl border border-border">
            <Code2 className="h-16 w-16 text-primary" />
          </div>
          
          {/* Orbiting smaller icons */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            className="absolute -top-2 -right-2"
          >
            <div className="rounded-full bg-accent/80 backdrop-blur-sm p-3 shadow-lg">
              <Palette className="h-6 w-6 text-accent-foreground" />
            </div>
          </motion.div>

          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            className="absolute -bottom-2 -left-2"
          >
            <div className="rounded-full bg-primary/80 backdrop-blur-sm p-3 shadow-lg">
              <Zap className="h-6 w-6 text-primary-foreground" />
            </div>
          </motion.div>
        </motion.div>

        {/* Floating particles */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -30, 0],
              x: [0, Math.random() * 20 - 10, 0],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 3 + i,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.5,
            }}
            className="absolute h-2 w-2 rounded-full bg-primary/50"
            style={{
              left: `${20 + i * 15}%`,
              top: `${30 + i * 10}%`,
            }}
          />
        ))}

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center text-sm font-medium text-muted-foreground"
        >
          Moderne Technologien
        </motion.p>
      </div>
    </motion.div>
  );
}
