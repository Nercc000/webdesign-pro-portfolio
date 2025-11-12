import { motion } from "framer-motion";
import { Code, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

interface CodeShowcaseProps {
  title: string;
  description: string;
  delay?: number;
  className?: string;
}

export function CodeShowcase({ 
  title, 
  description, 
  delay = 0, 
  className 
}: CodeShowcaseProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay, type: "spring" }}
      className={cn(
        "group relative rounded-2xl bg-card border border-border overflow-hidden",
        "transition-all duration-300 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/20",
        className
      )}
    >
      {/* Animated Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-background" />
      
      {/* Floating Particles Effect */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-primary/30 rounded-full"
            initial={{ 
              x: Math.random() * 100 + "%", 
              y: "100%",
              opacity: 0 
            }}
            animate={{ 
              y: "-20%",
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: i * 0.5,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-end p-8">
        {/* Code Icon Display */}
        <motion.div 
          className="mb-4 h-48 bg-gradient-to-br from-primary/30 to-primary/10 rounded-xl flex items-center justify-center backdrop-blur-sm border border-primary/20"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <div className="relative">
            <Code className="h-24 w-24 text-primary/70" />
            
            {/* Orbiting Sparkles */}
            <motion.div
              className="absolute -top-2 -right-2"
              animate={{ 
                rotate: 360,
                scale: [1, 1.2, 1]
              }}
              transition={{ 
                rotate: { duration: 4, repeat: Infinity, ease: "linear" },
                scale: { duration: 2, repeat: Infinity, ease: "easeInOut" }
              }}
            >
              <Sparkles className="h-6 w-6 text-primary" />
            </motion.div>
          </div>
        </motion.div>

        {/* Text Content */}
        <motion.h4 
          className="text-2xl font-bold text-foreground mb-2"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: delay + 0.2 }}
        >
          {title}
        </motion.h4>
        
        <motion.p 
          className="text-muted-foreground"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: delay + 0.3 }}
        >
          {description}
        </motion.p>
      </div>

      {/* Glow Effect */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
    </motion.div>
  );
}
