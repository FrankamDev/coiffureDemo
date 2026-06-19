import { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') === 'dark' || 
             (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches);
    }
    return false;
  });

  const location = useLocation();
  const { scrollY } = useScroll();

  const navLinks = [
    { id: 'accueil', name: 'Accueil', href: '/' },
    { id: 'prestations', name: 'Prestations', href: '/prestations' },
    { id: 'galerie', name: 'Galerie', href: '/gallery' },
    { id: 'salon', name: 'Le Salon', href: '/salon' },
    { id: 'galleryDisplay', name: 'Gallery', href: '/galleries' },
    { id: 'contact', name: 'Contact', href: '/contact' }
  ];

  // Animation de masquage au scroll
  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  // Dark Mode
  useEffect(() => {
    const root = window.document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  const isActive = (href: string) => location.pathname === href;

  return (
    <motion.nav
      variants={{
        visible: { y: 0, opacity: 1 },
        hidden: { y: -100, opacity: 0 }
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/95 dark:bg-stone-950/95 backdrop-blur-xl border-b border-stone-100 dark:border-stone-800"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 h-20 flex items-center justify-between">
        
        {/* LOGO avec animation */}
        <Link to="/" className="flex flex-col -space-y-1 group">
          <motion.span 
            className="text-3xl font-serif font-light tracking-tighter text-stone-900 dark:text-stone-100"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            L'Atelier
          </motion.span>
          <span className="text-[10px] tracking-[0.25em] text-amber-600 dark:text-amber-400 font-medium uppercase pl-0.5">
            Haute Coiffure
          </span>
        </Link>

        {/* MENU DESKTOP */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.id}
              to={link.href}
              className="relative text-sm uppercase tracking-widest font-medium py-1 group"
            >
              <span className={`transition-colors duration-300 ${
                isActive(link.href) 
                  ? 'text-amber-600 dark:text-amber-400' 
                  : 'text-stone-600 dark:text-stone-400 group-hover:text-stone-900 dark:group-hover:text-stone-100'
              }`}>
                {link.name}
              </span>
              
              {isActive(link.href) && (
                <motion.span
                  layoutId="activeUnderline"
                  className="absolute -bottom-1 left-0 h-0.5 w-full bg-amber-600 dark:bg-amber-400 rounded"
                  transition={{ type: "spring", stiffness: 300, damping: 25 }}
                />
              )}
            </Link>
          ))}
        </div>

        {/* ACTIONS DESKTOP */}
        <div className="hidden md:flex items-center gap-6">
          {/* Interrupteur Dark Mode stylé */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="relative w-14 h-7 bg-stone-200 dark:bg-stone-800 rounded-full p-1 cursor-pointer focus:outline-none shadow-inner"
            aria-label="Changer de thème"
          >
            <motion.div
              className="w-5 h-5 rounded-full bg-white dark:bg-amber-400 shadow-md flex items-center justify-center text-xs"
              layout
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
              animate={{ x: darkMode ? 28 : 0 }}
            >
              {darkMode ? <Moon size={13} /> : <Sun size={13} />}
            </motion.div>
          </button>

          <Link
            to="/contact"
            className="px-7 py-2.5 text-xs font-semibold tracking-widest uppercase bg-stone-950 text-white dark:bg-amber-600 hover:bg-amber-600 dark:hover:bg-amber-500 transition-all duration-300"
          >
            Réserver
          </Link>
        </div>

        {/* BURGER */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden w-11 h-11 flex items-center justify-center text-stone-700 dark:text-stone-300"
        >
          <motion.div
            animate={{ rotate: isOpen ? 90 : 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </motion.div>
        </button>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "100vh" }}
            exit={{ opacity: 0, height: 0 }}
            className="fixed inset-0 bg-white dark:bg-stone-950 z-50 md:hidden overflow-y-auto"
          >
            <div className="pt-24 px-8 flex flex-col h-full">
              <div className="flex-1 flex flex-col gap-8 text-center">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.06 }}
                  >
                    <Link
                      to={link.href}
                      onClick={() => setIsOpen(false)}
                      className={`block text-4xl font-light tracking-tighter py-4 ${
                        isActive(link.href) ? 'text-amber-600 dark:text-amber-400' : 'text-stone-800 dark:text-stone-100'
                      }`}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}
              </div>

              <div className="pb-16">
                <button
                  onClick={() => setDarkMode(!darkMode)}
                  className="mx-auto flex items-center gap-3 text-lg mb-8"
                >
                  {darkMode ? <Moon size={26} /> : <Sun size={26} />}
                  <span className="uppercase tracking-widest text-sm">
                    {darkMode ? 'Mode Sombre' : 'Mode Clair'}
                  </span>
                </button>

                <Link
                  to="/contact"
                  onClick={() => setIsOpen(false)}
                  className="block w-full py-5 text-center text-lg font-semibold tracking-widest uppercase bg-amber-600 text-white hover:bg-amber-700 transition-all"
                >
                  Réserver ma séance
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}