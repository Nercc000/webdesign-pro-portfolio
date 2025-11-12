import { motion } from "framer-motion";
import { Search } from "lucide-react";
import { cn } from "@/lib/utils";

interface RankingItem {
  rank: string;
  label: string;
}

interface RankingListProps {
  items: RankingItem[];
  title?: string;
  delay?: number;
  className?: string;
}

export function RankingList({ items, title = "Die besten im Geschäft", delay = 0, className }: RankingListProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay }}
      className={cn(
        "group relative rounded-2xl bg-card text-card-foreground border border-border p-6",
        "transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10",
        className
      )}
    >
      {/* Header */}
      <div className="mb-4 flex items-center justify-between">
        <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
          {title}
        </h4>
        <Search className="h-4 w-4 text-muted-foreground opacity-50 group-hover:opacity-100 transition-opacity" />
      </div>

      {/* Animated List */}
      <div className="flex flex-col gap-2">
        {items.map((item, index) => (
          <motion.div
            key={item.rank}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: delay + index * 0.1 }}
            whileHover={{ x: 5, scale: 1.02 }}
            className={cn(
              "flex items-center gap-3 rounded-lg border border-border bg-muted/50 px-4 py-3",
              "text-sm font-medium transition-all duration-300",
              "hover:border-primary/50 hover:bg-accent hover:shadow-md cursor-pointer"
            )}
          >
            <motion.span 
              className="text-primary font-bold text-base"
              whileHover={{ scale: 1.2 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              {item.rank}
            </motion.span>
            <span className="text-foreground">{item.label}</span>
          </motion.div>
        ))}
      </div>

      {/* Subtle glow effect on hover */}
      <div className="absolute inset-0 rounded-2xl bg-primary/5 blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500 pointer-events-none" />
    </motion.div>
  );
}
