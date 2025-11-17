import { motion } from "framer-motion";
import { TrendingUp, Zap, Target } from "lucide-react";

const metrics = [
  {
    label: "Ladezeit",
    value: "< 1s",
    change: "+45%",
    icon: Zap,
    color: "text-green-500",
  },
  {
    label: "Performance Score",
    value: "98/100",
    change: "+23%",
    icon: Target,
    color: "text-blue-500",
  },
  {
    label: "Conversion Rate",
    value: "+127%",
    change: "vs. Vorher",
    icon: TrendingUp,
    color: "text-purple-500",
  },
];

export function PerformanceMetrics() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.6 }}
      className="col-span-4 overflow-hidden rounded-2xl bg-card border border-border"
    >
      <div className="p-8">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.7 }}
          className="mb-6"
        >
          <h4 className="text-2xl font-bold text-foreground mb-2">
            Performance Metriken
          </h4>
          <p className="text-muted-foreground">
            Echte Ergebnisse, die überzeugen
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {metrics.map((metric, index) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 + index * 0.1, type: "spring" }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="group relative overflow-hidden rounded-xl bg-muted/30 p-6 border border-border/50"
            >
              {/* Gradient background on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10 space-y-4">
                <div className="flex items-center justify-between">
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                    className={`p-3 rounded-lg bg-background ${metric.color}`}
                  >
                    <metric.icon className="h-6 w-6" />
                  </motion.div>
                  <span className="text-xs font-medium text-green-500 bg-green-500/10 px-2 py-1 rounded-full">
                    {metric.change}
                  </span>
                </div>

                <div>
                  <div className="text-3xl font-bold text-foreground mb-1">
                    {metric.value}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {metric.label}
                  </div>
                </div>

                {/* Animated progress bar */}
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.9 + index * 0.1, duration: 0.8 }}
                  className="h-1.5 bg-gradient-to-r from-primary via-accent to-primary rounded-full origin-left"
                />
              </div>

              {/* Sparkle effect */}
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute top-2 right-2 h-2 w-2 rounded-full bg-primary"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
