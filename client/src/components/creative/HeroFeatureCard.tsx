import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { AuroraBackground } from "@/components/ui/aurora-background";

export function HeroFeatureCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.02, y: -5 }}
      className="relative col-span-4 md:col-span-2 row-span-2 overflow-hidden rounded-3xl"
    >
      <AuroraBackground className="h-full">
        <div className="relative z-10 flex h-full flex-col justify-between p-8">
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, type: "spring" }}
            className="inline-flex"
          >
            <div className="rounded-2xl bg-primary/20 p-4 backdrop-blur-sm">
              <Sparkles className="h-8 w-8 text-primary" />
            </div>
          </motion.div>

          <div className="space-y-4">
            <motion.h3
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-4xl font-bold text-foreground"
            >
              Warum WebDesignPro?
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="text-lg text-muted-foreground"
            >
              Wir kombinieren modernste Technologien mit kreativem Design, um
              Websites zu schaffen, die nicht nur gut aussehen, sondern auch
              Ergebnisse liefern.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="flex gap-2"
            >
              <div className="h-1 w-12 rounded-full bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%_100%] animate-gradient" />
              <div className="h-1 w-8 rounded-full bg-primary/50" />
              <div className="h-1 w-4 rounded-full bg-primary/30" />
            </motion.div>
          </div>
        </div>
      </AuroraBackground>
    </motion.div>
  );
}
