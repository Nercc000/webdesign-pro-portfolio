import { motion } from "framer-motion";
import { NumberTicker } from "@/components/ui/number-ticker";
import { cn } from "@/lib/utils";

interface StatCardProps {
  value: number;
  suffix?: string;
  label: string;
  delay?: number;
  className?: string;
}

export function StatCard({ value, suffix = "", label, delay = 0, className }: StatCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay, type: "spring", stiffness: 100 }}
      whileHover={{ scale: 1.05, y: -5 }}
      className={cn(
        "group relative rounded-2xl bg-card text-card-foreground border border-border p-6",
        "transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10",
        "flex flex-col items-center justify-center text-center",
        className
      )}
    >
      {/* Animated gradient background on hover */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <div className="relative z-10">
        <div className="text-5xl md:text-6xl font-bold text-primary mb-2 flex items-center justify-center">
          <NumberTicker value={value} />
          {suffix && <span className="ml-1">{suffix}</span>}
        </div>
        <div className="text-sm font-medium text-muted-foreground">{label}</div>
      </div>

      {/* Subtle glow effect */}
      <div className="absolute inset-0 rounded-2xl bg-primary/5 blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500" />
    </motion.div>
  );
}
