import { motion, AnimatePresence, useScroll } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";

export default function ScrollIndicator() {
  const [isVisible, setIsVisible] = useState(true);
  const { scrollY } = useScroll();
  
  // Hide indicator when user scrolls down
  useEffect(() => {
    const unsubscribe = scrollY.on("change", (latest) => {
      if (latest > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
    });

    return () => unsubscribe();
  }, [scrollY]);

  // Smooth scroll to next section
  const handleClick = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth"
    });
  };

  return (
    <AnimatePresence mode="wait">
      {isVisible && (
        <motion.div
          className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 cursor-pointer hidden md:flex"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5, ease: [0.43, 0.13, 0.23, 0.96] }}
          onClick={handleClick}
        >
          <div className="flex flex-col items-center gap-2">
            {/* Text */}
            <motion.span
              className="text-xs font-semibold text-primary uppercase tracking-wider"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              Scroll
            </motion.span>

            {/* Single Large Animated Arrow */}
            <motion.div
              className="flex flex-col items-center"
              animate={{
                y: [0, 8, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <ChevronDown className="h-10 w-10 text-primary" strokeWidth={3} />
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
