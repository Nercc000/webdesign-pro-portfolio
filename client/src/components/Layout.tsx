import { Button } from "@/components/ui/button";
import { Moon, Sun, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { useTheme } from "@/contexts/ThemeContext";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Layout({ children, className }: { children: React.ReactNode; className?: string }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hasLoaded, setHasLoaded] = useState(false);
  const [location] = useLocation();
  const { theme, toggleTheme } = useTheme();
  
  // Framer Motion scroll hook
  const { scrollY } = useScroll();
  
  // Transform scroll position to max-width (from max-w-6xl to max-w-4xl)
  const maxWidth = useTransform(
    scrollY,
    [0, 100],
    ["1280px", "896px"] // 6xl = 1280px, 4xl = 896px
  );

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/services", label: "Leistungen" },
    { path: "/portfolio", label: "Portfolio" },
    { path: "/about", label: "Über mich" },
    { path: "/contact", label: "Kontakt" },
  ];

  const isActive = (path: string) => location === path;

  // Fade in animation - only on home page
  useEffect(() => {
    if (location === '/') {
      const timer = setTimeout(() => setHasLoaded(true), 100);
      return () => clearTimeout(timer);
    } else {
      setHasLoaded(true);
    }
  }, [location]);

  return (
    <div className={`min-h-screen flex flex-col ${className || 'bg-background'}`}>
      {/* Floating Header */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
          hasLoaded ? "translate-y-4 opacity-100" : "-translate-y-full opacity-0"
        }`}
      >
        <div className="container">
          <motion.div 
            className="mx-auto"
            style={{ maxWidth }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
          >
            {/* Liquid Glass / Glassmorphism Container */}
            <div className="relative rounded-2xl border border-white/20 bg-gradient-to-br from-background/70 via-background/60 to-background/70 shadow-2xl shadow-black/20 backdrop-blur-2xl dark:border-white/10 dark:shadow-black/40 dark:from-background/60 dark:via-background/50 dark:to-background/60 overflow-hidden">
              <div className="flex items-center justify-between px-6 py-4">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2 font-bold text-lg hover:opacity-80 transition-opacity">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-accent">
                    <span className="text-lg font-black text-primary-foreground">W</span>
                  </div>
                  <span className="hidden sm:inline">WebDesign Pro</span>
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center gap-1 relative">
                  {navItems.map((item) => (
                    <Link
                      key={item.path}
                      href={item.path}
                      className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 rounded-lg hover:scale-110 active:scale-100 ${
                        isActive(item.path)
                          ? "text-primary"
                          : "text-muted-foreground hover:text-primary"
                      }`}
                    >
                      {item.label}
                      
                      {/* Animated Indicator Dot with Framer Motion layoutId */}
                      {isActive(item.path) && (
                        <motion.span
                          layoutId="activeIndicator"
                          className="absolute bottom-1 left-1/2 -translate-x-1/2 h-1.5 w-1.5 rounded-full bg-primary"
                          transition={{
                            type: "spring",
                            stiffness: 380,
                            damping: 30,
                          }}
                        />
                      )}
                    </Link>
                  ))}
                </div>

                {/* Right Side: Theme Toggle + Mobile Menu */}
                <div className="flex items-center gap-2">
                  {/* Dark Mode Toggle */}
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={toggleTheme}
                    className="rounded-lg"
                    aria-label="Toggle theme"
                  >
                    {theme === "dark" ? (
                      <Sun className="h-5 w-5" />
                    ) : (
                      <Moon className="h-5 w-5" />
                    )}
                  </Button>

                  {/* Mobile Menu Button */}
                  <button
                    className="md:hidden rounded-lg p-2 hover:bg-accent transition-colors"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    aria-label="Toggle menu"
                  >
                    {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                  </button>
                </div>
              </div>

              {/* Mobile Navigation */}
              {mobileMenuOpen && (
                <div className="border-t border-border/40 px-6 py-4 md:hidden">
                  <div className="flex flex-col gap-2">
                    {navItems.map((item) => (
                      <Link
                        key={item.path}
                        href={item.path}
                        onClick={() => setMobileMenuOpen(false)}
                        className={`block rounded-lg px-4 py-2 text-sm font-medium transition-all duration-300 hover:translate-x-1 ${
                          isActive(item.path)
                            ? "text-primary"
                            : "text-muted-foreground hover:text-primary"
                        }`}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-1">{children}</main>

      {/* Footer */}
      <footer className="py-12 bg-muted/30 border-t border-border mt-auto">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-accent">
                  <span className="text-lg font-black text-primary-foreground">W</span>
                </div>
                <span className="font-bold text-lg text-foreground">WebDesign Pro</span>
              </div>
              <p className="text-muted-foreground">
                Professionelle Websites für lokale Unternehmen
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-4">Navigation</h3>
              <div className="space-y-2">
                {navItems.map((item) => (
                  <Link
                    key={item.path}
                    href={item.path}
                    className="block text-muted-foreground hover:text-primary transition-colors"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-4">Kontakt</h3>
              <div className="space-y-2 text-muted-foreground">
                <p>E-Mail: kontakt@webdesign-pro.de</p>
                <p>Telefon: +49 123 456789</p>
                <p>Standort: Deutschland</p>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-border text-center text-muted-foreground">
            <p>&copy; 2024 WebDesign Pro. Alle Rechte vorbehalten.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
