import { motion } from "framer-motion";

interface PortfolioProjectProps {
  number: string;
  category: string;
  title: string;
  description: string;
  image: string;
  techStack: Array<{
    name: string;
    icon: React.ReactNode;
  }>;
  metric: {
    value: string;
    label: string;
  };
  delay?: number;
}

export function PortfolioProject({
  number,
  category,
  title,
  description,
  image,
  techStack,
  metric,
  delay = 0,
}: PortfolioProjectProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, delay }}
      className="relative grid md:grid-cols-[1fr_300px] gap-8 items-center"
    >
      {/* Image with 3D Perspective - Left (70%) */}
      <div className="relative perspective-1000">
        <motion.div
          className="relative"
          whileHover={{
            rotateY: -5,
            rotateX: 2,
            transition: { duration: 0.6, ease: "easeOut" },
          }}
          style={{
            transformStyle: "preserve-3d",
            transform: "rotateY(-3deg) rotateX(1deg)",
          }}
        >
          <img
            src={image}
            alt={title}
            className="w-full h-auto max-h-[250px] md:max-h-none object-cover rounded-3xl shadow-2xl"
            style={{
              boxShadow:
                "0 30px 60px -15px rgba(59, 130, 246, 0.4), 0 10px 30px -10px rgba(0, 0, 0, 0.3)",
            }}
          />
        </motion.div>
      </div>

      {/* Minimal Sidebar - Right (30%) */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ delay: delay + 0.2 }}
        className="space-y-3 md:space-y-6"
      >
        {/* Vertical Number */}
        <div className="text-5xl md:text-8xl font-black text-primary/10 leading-none">
          {number}
        </div>

        {/* Category */}
        <div className="inline-block rounded-full bg-primary/10 px-2 md:px-3 py-0.5 md:py-1 text-[10px] md:text-xs font-medium text-primary">
          {category}
        </div>

        {/* Title */}
        <h3 className="text-lg md:text-2xl font-bold leading-tight">{title}</h3>

        {/* Description */}
        <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
          {description}
        </p>

        {/* Tech stack - With Icons */}
        <div className="space-y-1.5 md:space-y-2">
          {techStack.map((tech, index) => (
            <div
              key={index}
              className="flex items-center gap-1.5 md:gap-2 rounded-full bg-muted px-2.5 md:px-4 py-1 md:py-2"
            >
              <div className="w-3 h-3 md:w-4 md:h-4 flex-shrink-0">{tech.icon}</div>
              <span className="text-[10px] md:text-xs font-medium">{tech.name}</span>
            </div>
          ))}
        </div>

        {/* Metric */}
        <div className="pt-2 md:pt-4 border-t border-border">
          <div className="text-2xl md:text-3xl font-bold text-primary">{metric.value}</div>
          <div className="text-[10px] md:text-xs text-muted-foreground">{metric.label}</div>
        </div>
      </motion.div>
    </motion.div>
  );
}
