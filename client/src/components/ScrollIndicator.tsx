import { motion, useScroll, useTransform } from "framer-motion";
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

  if (!isVisible) return null;

  return (
    <motion.div
      className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 cursor-pointer"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ delay: 1, duration: 0.5 }}
      onClick={handleClick}
    >
      <div className="flex flex-col items-center gap-2">
        {/* Text */}
        <motion.span
          className="text-sm font-medium text-muted-foreground"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.5 }}
        >
          Scroll
        </motion.span>

        {/* Animated Arrow */}
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
          <ChevronDown className="h-6 w-6 text-primary" />
        </motion.div>

        {/* Decorative Line */}
        <motion.div
          className="w-px h-12 bg-gradient-to-b from-primary to-transparent"
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ delay: 1.3, duration: 0.5 }}
          style={{ transformOrigin: "top" }}
        />
      </div>
    </motion.div>
  );
}
