import { motion } from "framer-motion";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { BorderBeam } from "@/components/ui/border-beam";

interface FeatureCardProps {
  title: string;
  description: string;
  icon?: ReactNode;
  delay?: number;
  className?: string;
  showBeam?: boolean;
  children?: ReactNode;
}

export function FeatureCard({ 
  title, 
  description, 
  icon, 
  delay = 0, 
  className,
  showBeam = false,
  children 
}: FeatureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay }}
      className={cn(
        "group relative rounded-2xl bg-card text-card-foreground border border-border overflow-hidden",
        "transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10",
        className
      )}
    >
      {/* Border Beam Effect */}
      {showBeam && <BorderBeam size={250} duration={12} delay={9} />}
      
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* Content */}
      <div className="relative z-10 p-8 flex flex-col h-full">
        {icon && (
          <motion.div
            className="mb-4"
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            {icon}
          </motion.div>
        )}
        
        <h3 className="mb-3 text-2xl font-bold text-foreground">
          {title}
        </h3>
        
        <p className="text-base text-muted-foreground leading-relaxed flex-grow">
          {description}
        </p>

        {children}
      </div>

      {/* Glow effect */}
      <div className="absolute inset-0 bg-primary/5 blur-2xl opacity-0 group-hover:opacity-50 transition-opacity duration-500 pointer-events-none" />
    </motion.div>
  );
}
