import { motion } from "framer-motion";

// Service 01: Code Snippet Illustration for Webdesign & Entwicklung
export function CodeSnippetIllustration() {
  return (
    <motion.div
      className="absolute -right-8 top-1/2 -translate-y-1/2 w-44 rounded-lg border border-accent/20 bg-card/50 backdrop-blur-sm p-3 font-mono text-xs shadow-xl pointer-events-none hidden lg:block opacity-90 dark:opacity-50"
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ 
        opacity: 0.9, 
        x: 0,
        y: [0, 10, 0]
      }}
      viewport={{ once: true }}
      transition={{
        opacity: { duration: 1 },
        x: { duration: 1 },
        y: { duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }
      }}
    >
      <div className="space-y-1">
        <div className="flex gap-2">
          <span className="text-purple-400">&lt;div</span>
          <span className="text-blue-400">className</span>
          <span className="text-muted-foreground">=</span>
        </div>
        <div className="pl-4 text-green-400">"hero"</div>
        <div className="text-purple-400">&gt;</div>
        <div className="pl-4 text-muted-foreground">...</div>
        <div className="text-purple-400">&lt;/div&gt;</div>
      </div>
    </motion.div>
  );
}

// Service 03: Analytics Chart Illustration for SEO-Optimierung
export function AnalyticsChartIllustration() {
  return (
    <motion.div
      className="absolute -right-8 top-1/2 -translate-y-1/2 w-48 rounded-lg border border-primary/20 bg-card/50 backdrop-blur-sm p-4 shadow-xl pointer-events-none hidden lg:block opacity-90 dark:opacity-50"
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ 
        opacity: 0.9, 
        x: 0,
        y: [0, 12, 0]
      }}
      viewport={{ once: true }}
      transition={{
        opacity: { duration: 1 },
        x: { duration: 1 },
        y: { duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 2 }
      }}
    >
      {/* Simple Bar Chart */}
      <div className="flex items-end justify-between gap-2 h-20">
        <div className="w-full h-1/3 bg-primary/30 rounded-t" />
        <div className="w-full h-1/2 bg-primary/40 rounded-t" />
        <div className="w-full h-2/3 bg-primary/50 rounded-t" />
        <div className="w-full h-full bg-gradient-to-t from-primary to-accent rounded-t" />
      </div>
      {/* Trend Line */}
      <div className="mt-2 flex items-center gap-1 text-xs text-primary">
        <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
        <span className="font-mono">+150%</span>
      </div>
    </motion.div>
  );
}
