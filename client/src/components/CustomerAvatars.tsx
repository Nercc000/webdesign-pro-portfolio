import { motion } from 'framer-motion';
import { User } from 'lucide-react';

const customers = [
  { name: 'Maria S.', color: 'from-pink-500 to-rose-500' },
  { name: 'Thomas M.', color: 'from-blue-500 to-cyan-500' },
  { name: 'Sophie W.', color: 'from-purple-500 to-pink-500' },
  { name: 'Markus K.', color: 'from-green-500 to-emerald-500' },
  { name: 'Julia H.', color: 'from-orange-500 to-amber-500' },
  { name: 'Giovanni R.', color: 'from-indigo-500 to-blue-500' },
];

export function CustomerAvatars() {
  return (
    <div className="absolute inset-0 flex items-center justify-center p-8">
      <div className="relative h-48 w-48">
        {customers.map((customer, index) => {
          const angle = (index * 360) / customers.length;
          const radius = 70;
          const x = Math.cos((angle * Math.PI) / 180) * radius;
          const y = Math.sin((angle * Math.PI) / 180) * radius;

          return (
            <motion.div
              key={index}
              className="absolute left-1/2 top-1/2"
              style={{
                x: x - 20,
                y: y - 20,
              }}
              initial={{ opacity: 0, scale: 0 }}
              animate={{
                opacity: 1,
                scale: [1, 1.1, 1],
              }}
              transition={{
                delay: index * 0.2,
                duration: 2,
                repeat: Infinity,
                repeatDelay: 1,
                scale: {
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }
              }}
            >
              <motion.div
                className={`relative h-12 w-12 rounded-full bg-gradient-to-br ${customer.color} shadow-lg flex items-center justify-center`}
                whileHover={{ scale: 1.3, zIndex: 10 }}
                transition={{ duration: 0.2 }}
              >
                {/* Glow Effect */}
                <div className={`absolute inset-0 rounded-full bg-gradient-to-br ${customer.color} blur-md opacity-50`} />
                
                {/* Avatar Icon */}
                <User className="relative z-10 h-6 w-6 text-white" />
                
                {/* Tooltip */}
                <motion.div
                  className="absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap rounded bg-card/90 backdrop-blur-sm px-2 py-1 text-xs font-medium text-foreground shadow-lg opacity-0 hover:opacity-100"
                  transition={{ duration: 0.2 }}
                >
                  {customer.name}
                </motion.div>
              </motion.div>
            </motion.div>
          );
        })}

        {/* Center Circle */}
        <motion.div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-16 w-16 rounded-full border-2 border-primary/30 bg-card/50 backdrop-blur-sm flex items-center justify-center"
          animate={{
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <span className="text-2xl font-bold text-primary">8+</span>
        </motion.div>
      </div>
    </div>
  );
}
