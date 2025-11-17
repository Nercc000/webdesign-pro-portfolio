import { motion } from "framer-motion";
import { MessageSquare, Palette, Code, Rocket } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Beratung",
    description: "Wir verstehen Ihre Ziele",
    icon: MessageSquare,
  },
  {
    number: "02",
    title: "Design",
    description: "Kreative Konzepte",
    icon: Palette,
  },
  {
    number: "03",
    title: "Entwicklung",
    description: "Sauberer Code",
    icon: Code,
  },
  {
    number: "04",
    title: "Launch",
    description: "Erfolgreicher Start",
    icon: Rocket,
  },
];

export function ProcessTimeline() {
  return (
    <div className="col-span-4 grid grid-cols-1 md:grid-cols-4 gap-4">
      {steps.map((step, index) => (
        <motion.div
          key={step.number}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 + index * 0.1 }}
          whileHover={{ y: -5, scale: 1.02 }}
          className="group relative overflow-hidden rounded-2xl bg-card border border-border p-6"
        >
          {/* Connecting line (hidden on mobile, shown on desktop) */}
          {index < steps.length - 1 && (
            <div className="hidden md:block absolute top-1/2 -right-2 w-4 h-0.5 bg-gradient-to-r from-primary to-transparent z-0" />
          )}

          {/* Glow effect on hover */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/5 to-accent/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

          <div className="relative z-10 space-y-4">
            {/* Number Badge */}
            <div className="flex items-center justify-between">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 + index * 0.1, type: "spring" }}
                className="flex items-center justify-center h-12 w-12 rounded-full bg-primary/10 text-primary font-bold text-lg group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
              >
                {step.number}
              </motion.div>
              
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                whileInView={{ scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7 + index * 0.1, type: "spring" }}
                className="p-2 rounded-lg bg-muted/50 group-hover:bg-primary/20 transition-colors"
              >
                <step.icon className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </motion.div>
            </div>

            {/* Content */}
            <div>
              <h4 className="text-xl font-bold text-foreground mb-1 group-hover:text-primary transition-colors">
                {step.title}
              </h4>
              <p className="text-sm text-muted-foreground">
                {step.description}
              </p>
            </div>

            {/* Progress indicator */}
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 + index * 0.1, duration: 0.5 }}
              className="h-1 w-full bg-gradient-to-r from-primary to-accent rounded-full origin-left"
            />
          </div>
        </motion.div>
      ))}
    </div>
  );
}
