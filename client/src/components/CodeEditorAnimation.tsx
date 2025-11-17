import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const codeLines = [
  '<div className="hero">',
  '  <h1>Ihre Website</h1>',
  '  <p>Professionell & Modern</p>',
  '</div>',
];

export function CodeEditorAnimation() {
  const [displayedLines, setDisplayedLines] = useState<string[]>([]);
  const [currentLine, setCurrentLine] = useState(0);
  const [currentChar, setCurrentChar] = useState(0);

  useEffect(() => {
    if (currentLine >= codeLines.length) {
      // Reset after a pause
      const resetTimer = setTimeout(() => {
        setDisplayedLines([]);
        setCurrentLine(0);
        setCurrentChar(0);
      }, 3000);
      return () => clearTimeout(resetTimer);
    }

    const line = codeLines[currentLine];
    
    if (currentChar < line.length) {
      const timer = setTimeout(() => {
        setDisplayedLines(prev => {
          const newLines = [...prev];
          if (newLines[currentLine] === undefined) {
            newLines[currentLine] = '';
          }
          newLines[currentLine] = line.substring(0, currentChar + 1);
          return newLines;
        });
        setCurrentChar(prev => prev + 1);
      }, 50);
      return () => clearTimeout(timer);
    } else {
      // Move to next line
      const timer = setTimeout(() => {
        setCurrentLine(prev => prev + 1);
        setCurrentChar(0);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [currentLine, currentChar]);

  return (
    <div className="absolute inset-0 flex items-center justify-center p-4">
      <motion.div 
        className="relative w-full max-w-2xl rounded-lg border border-border/50 bg-card/50 backdrop-blur-sm p-8 shadow-xl"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* Editor Header */}
        <div className="mb-4 flex items-center gap-2">
          <div className="h-3 w-3 rounded-full bg-red-500" />
          <div className="h-3 w-3 rounded-full bg-yellow-500" />
          <div className="h-3 w-3 rounded-full bg-green-500" />
          <span className="ml-2 text-xs text-muted-foreground">index.tsx</span>
        </div>

        {/* Code Content */}
        <div className="font-mono text-sm">
          {displayedLines.map((line, index) => (
            <div key={index} className="flex items-start gap-3">
              <span className="text-muted-foreground/50 select-none">{index + 1}</span>
              <span className="text-primary/80">
                {line}
                {index === currentLine && currentChar < codeLines[currentLine].length && (
                  <motion.span
                    className="inline-block w-2 h-4 bg-primary ml-1"
                    animate={{ opacity: [1, 0] }}
                    transition={{ duration: 0.5, repeat: Infinity }}
                  />
                )}
              </span>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
