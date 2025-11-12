import { motion } from "framer-motion";

export function HeroDecorations() {
  return (
    <>
      {/* Left Side - Browser Window Only */}
      <div className="absolute left-0 top-0 h-full w-1/4 pointer-events-none hidden 2xl:block overflow-hidden blur-[0.5px]">
        {/* Browser Window Mockup */}
        <motion.div
          className="absolute left-1/4 top-1/2 -translate-y-1/2 w-80 rounded-lg border border-primary/30 dark:border-primary/40 bg-card/80 dark:bg-card/70 backdrop-blur-sm shadow-2xl"
          initial={{ opacity: 0, x: -50, rotate: -5 }}
          animate={{ 
            opacity: 1, 
            x: 0,
            rotate: -5,
            y: [0, -15, 0]
          }}
          transition={{
            opacity: { duration: 1, delay: 0.3 },
            x: { duration: 1, delay: 0.3 },
            y: { duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }
          }}
        >
          {/* Browser Header */}
          <div className="flex items-center gap-2 border-b border-border/50 px-3 py-2">
            <div className="flex gap-1.5">
              <div className="h-2.5 w-2.5 rounded-full bg-red-500/70" />
              <div className="h-2.5 w-2.5 rounded-full bg-yellow-500/70" />
              <div className="h-2.5 w-2.5 rounded-full bg-green-500/70" />
            </div>
          </div>
          {/* Browser Content */}
          <div className="p-4 space-y-2">
            <div className="h-3 w-3/4 rounded bg-primary/20" />
            <div className="h-3 w-full rounded bg-primary/10" />
            <div className="h-3 w-5/6 rounded bg-primary/10" />
            <div className="mt-3 h-20 w-full rounded bg-gradient-to-br from-primary/20 to-accent/20" />
          </div>
        </motion.div>
      </div>

      {/* Right Side - Mobile Device Only */}
      <div className="absolute right-0 top-0 h-full w-1/4 pointer-events-none hidden 2xl:block overflow-hidden blur-[0.5px]">
        {/* Mobile Device Frame */}
        <motion.div
          className="absolute right-1/4 top-1/2 -translate-y-1/2 w-48 h-80 rounded-2xl border-4 border-foreground/30 dark:border-foreground/40 bg-card/80 dark:bg-card/70 backdrop-blur-sm shadow-2xl"
          initial={{ opacity: 0, x: 50, rotate: 5 }}
          animate={{ 
            opacity: 1, 
            x: 0,
            rotate: 5,
            y: [0, 15, 0]
          }}
          transition={{
            opacity: { duration: 1, delay: 0.3 },
            x: { duration: 1, delay: 0.3 },
            y: { duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }
          }}
        >
          {/* Notch */}
          <div className="absolute top-2 left-1/2 -translate-x-1/2 h-4 w-16 rounded-full bg-foreground/10" />
          {/* Screen Content */}
          <div className="p-3 pt-8 space-y-2">
            <div className="h-2 w-full rounded bg-primary/20" />
            <div className="h-2 w-3/4 rounded bg-primary/10" />
            <div className="mt-3 h-24 w-full rounded bg-gradient-to-br from-accent/20 to-primary/20" />
          </div>
        </motion.div>
      </div>
    </>
  );
}

/* 
  REMOVED ILLUSTRATIONS (saved for later use in other sections):
  
  - Code Snippet (lines 41-67): Can be used in Services section or About section
  - UI Card Component (lines 69-100): Can be used in Testimonials or Features section  
  - Tablet/Desktop Frame (lines 131-158): Can be used in Portfolio section
  - Cursor/Click Icon (lines 160-185): Can be used for CTA sections or interactive elements
*/
