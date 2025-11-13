import { motion } from 'framer-motion';
import { Globe, ShoppingCart, Smartphone, Code } from 'lucide-react';

const projects = [
  { name: 'E-Commerce', icon: ShoppingCart },
  { name: 'Portfolio', icon: Globe },
  { name: 'Mobile App', icon: Smartphone },
  { name: 'Web App', icon: Code },
];

export function ProjectsMarquee() {
  return (
    <div className="absolute inset-0 flex items-center justify-center overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]">
      <motion.div
        className="flex gap-4"
        animate={{
          x: [0, -1000],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {[...projects, ...projects, ...projects].map((project, index) => (
          <motion.div
            key={index}
            className="relative flex h-24 w-32 flex-shrink-0 items-center justify-center rounded-lg border border-border/50 bg-card/50 backdrop-blur-sm shadow-lg"
            whileHover={{ scale: 1.05, y: -5 }}
            transition={{ duration: 0.2 }}
          >
            <div className="absolute inset-0 rounded-lg bg-primary/5" />
            <div className="relative flex flex-col items-center gap-2">
              <project.icon className="h-8 w-8 text-primary" />
              <span className="text-xs font-medium text-foreground/80">{project.name}</span>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
