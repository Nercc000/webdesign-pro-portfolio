import { motion } from 'framer-motion';

const colors = [
  { name: 'Primary', value: '#3B82F6', gradient: 'from-blue-500 to-blue-600' },
  { name: 'Accent', value: '#60A5FA', gradient: 'from-blue-400 to-blue-500' },
  { name: 'Success', value: '#10B981', gradient: 'from-emerald-500 to-emerald-600' },
  { name: 'Warning', value: '#F59E0B', gradient: 'from-amber-500 to-amber-600' },
];

export function ColorPalette() {
  return (
    <div className="absolute inset-0 flex items-center justify-center p-8">
      <div className="grid grid-cols-2 gap-4">
        {colors.map((color, index) => (
          <motion.div
            key={index}
            className="group relative"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              delay: index * 0.1,
              duration: 0.5,
              repeat: Infinity,
              repeatDelay: 3
            }}
          >
            {/* Color Circle */}
            <motion.div
              className={`relative h-16 w-16 rounded-full bg-gradient-to-br ${color.gradient} shadow-lg cursor-pointer`}
              whileHover={{ scale: 1.2, rotate: 10 }}
              transition={{ duration: 0.3 }}
            >
              {/* Glow on Hover */}
              <motion.div
                className={`absolute inset-0 rounded-full bg-gradient-to-br ${color.gradient} blur-xl opacity-0 group-hover:opacity-50`}
                transition={{ duration: 0.3 }}
              />
              
              {/* Label */}
              <motion.div
                className="absolute -bottom-6 left-1/2 -translate-x-1/2 whitespace-nowrap text-xs font-medium text-muted-foreground opacity-0 group-hover:opacity-100"
                transition={{ duration: 0.2 }}
              >
                {color.name}
              </motion.div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
