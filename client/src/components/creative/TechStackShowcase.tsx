import { motion } from "framer-motion";
import { SiReact, SiTypescript, SiTailwindcss, SiNextdotjs, SiNodedotjs, SiPostgresql } from "react-icons/si";

const techStack = [
  { icon: SiReact, name: "React", color: "#61DAFB" },
  { icon: SiTypescript, name: "TypeScript", color: "#3178C6" },
  { icon: SiTailwindcss, name: "Tailwind", color: "#06B6D4" },
  { icon: SiNextdotjs, name: "Next.js", color: "#000000" },
  { icon: SiNodedotjs, name: "Node.js", color: "#339933" },
  { icon: SiPostgresql, name: "PostgreSQL", color: "#4169E1" },
];

export function TechStackShowcase() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.4 }}
      className="col-span-4 overflow-hidden rounded-2xl bg-card border border-border"
    >
      <div className="grid md:grid-cols-2 h-full">
        {/* Code Snippet Side */}
        <div className="relative bg-gradient-to-br from-slate-900 to-slate-800 p-8">
          <div className="absolute inset-0 bg-grid-white/5" />
          <div className="relative z-10">
            <div className="flex items-center gap-2 mb-4">
              <div className="flex gap-1.5">
                <div className="h-3 w-3 rounded-full bg-red-500" />
                <div className="h-3 w-3 rounded-full bg-yellow-500" />
                <div className="h-3 w-3 rounded-full bg-green-500" />
              </div>
              <span className="text-xs text-slate-400 ml-2">modern-stack.tsx</span>
            </div>
            
            <motion.pre
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="text-sm font-mono"
            >
              <code className="text-slate-300">
                <span className="text-purple-400">const</span>{" "}
                <span className="text-blue-300">techStack</span> ={" "}
                <span className="text-yellow-300">{"{"}</span>
                {"\n  "}
                <span className="text-green-300">frontend</span>:{" "}
                <span className="text-orange-300">[</span>
                {"\n    "}
                <span className="text-amber-200">'React'</span>,
                {"\n    "}
                <span className="text-amber-200">'TypeScript'</span>,
                {"\n    "}
                <span className="text-amber-200">'Tailwind'</span>
                {"\n  "}
                <span className="text-orange-300">]</span>,
                {"\n  "}
                <span className="text-green-300">backend</span>:{" "}
                <span className="text-orange-300">[</span>
                {"\n    "}
                <span className="text-amber-200">'Node.js'</span>,
                {"\n    "}
                <span className="text-amber-200">'PostgreSQL'</span>
                {"\n  "}
                <span className="text-orange-300">]</span>
                {"\n"}
                <span className="text-yellow-300">{"}"}</span>
              </code>
            </motion.pre>
          </div>
        </div>

        {/* Tech Icons Side */}
        <div className="flex flex-col justify-center p-8 space-y-6">
          <motion.h4
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="text-2xl font-bold text-foreground"
          >
            Modernster Tech Stack
          </motion.h4>
          
          <div className="grid grid-cols-3 gap-4">
            {techStack.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 + index * 0.1, type: "spring" }}
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="group relative flex flex-col items-center justify-center p-4 rounded-xl bg-muted/50 hover:bg-muted transition-colors"
              >
                <tech.icon
                  className="h-10 w-10 mb-2 transition-transform group-hover:scale-110"
                  style={{ color: tech.color }}
                />
                <span className="text-xs font-medium text-muted-foreground group-hover:text-foreground transition-colors">
                  {tech.name}
                </span>
                
                {/* Glow effect on hover */}
                <div
                  className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity"
                  style={{ backgroundColor: tech.color }}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
