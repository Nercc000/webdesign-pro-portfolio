import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";
import { NumberTicker } from "@/components/ui/number-ticker";

interface GlassStatCardProps {
  value: number;
  suffix?: string;
  label: string;
  icon: LucideIcon;
  delay?: number;
}

export function GlassStatCard({
  value,
  suffix = "+",
  label,
  icon: Icon,
  delay = 0,
}: GlassStatCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay, type: "spring", stiffness: 100 }}
      whileHover={{
        scale: 1.05,
        rotate: 2,
        boxShadow: "0 0 30px rgba(59, 130, 246, 0.3)",
      }}
      className="group relative col-span-2 md:col-span-1 overflow-hidden rounded-2xl bg-card/50 backdrop-blur-xl border border-border/50 p-6"
    >
      {/* Animated gradient border */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary via-accent to-primary opacity-0 group-hover:opacity-20 transition-opacity duration-500 bg-[length:200%_100%] animate-gradient" />
      
      {/* Glow effect on hover */}
      <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500" />

      <div className="relative z-10 flex flex-col items-center justify-center space-y-3">
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: delay + 0.2, type: "spring" }}
          className="rounded-full bg-primary/10 p-3 group-hover:bg-primary/20 transition-colors"
        >
          <Icon className="h-6 w-6 text-primary" />
        </motion.div>

        <div className="text-center">
          <div className="flex items-baseline justify-center">
            <span className="text-5xl font-bold bg-gradient-to-br from-primary via-accent to-primary bg-clip-text text-transparent">
              <NumberTicker value={value} />
            </span>
            <span className="text-3xl font-bold text-primary ml-1">
              {suffix}
            </span>
          </div>
          <p className="mt-2 text-sm font-medium text-muted-foreground">
            {label}
          </p>
        </div>
      </div>

      {/* Sparkle effect */}
      <motion.div
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        className="absolute top-2 right-2 h-2 w-2 rounded-full bg-primary animate-pulse"
      />
    </motion.div>
  );
}
