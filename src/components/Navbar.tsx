import { useState, useEffect } from 'react';
import {motion} from 'framer-motion';
export default function Navbar() {
const navLinks = [
        { id: 'accueil', name: 'Accueil', href: '#accueil' },
        { id: 'prestations', name: 'Prestations', href: '#prestations' },
        { id: 'galerie', name: 'Galerie', href: '#galerie' },
        { id: 'salon', name: 'Le Salon', href: '/salon' },
        { id: 'contact', name: 'Contact', href: '#contact' }
    ];

const [activeLink, setActiveLink] = useState('accueil');
    const [darkMode, setDarkMode] = useState(() => {
        if (typeof window !== 'undefined') {
            return localStorage.getItem('theme') === 'dark' || 
                   (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches);
        }
        return false;
    });

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

    return (
        <nav className="fixed top-0 left-0 w-full h-20 px-6 md:px-12 flex items-center justify-between bg-white/90 dark:bg-stone-950/90 backdrop-blur-md border-b border-stone-100 dark:border-stone-900 transition-colors duration-300 z-50">
            
          
            <div className="flex flex-col cursor-pointer">
                <span className="text-2xl font-serif font-semibold tracking-wide text-stone-900 dark:text-stone-100 uppercase">
                    L'Atelier
                </span>
                <span className="text-[10px] tracking-[0.25em] text-amber-600 dark:text-amber-400 font-light uppercase -mt-1">
                    Haute Coiffure
                </span>
            </div>
            
        
            <div className="hidden md:flex items-center">
                <ul className="flex items-center gap-8 text-sm tracking-wider font-medium text-stone-600 dark:text-stone-400 uppercase">
                {navLinks.map((link) => {
                    const isActive = activeLink === link.id;
                    
                    return (
                        <li 
                            key={link.id} 
                            onClick={() => setActiveLink(link.id)}
                            className={`cursor-pointer transition-colors duration-300 relative py-1
                                ${isActive 
                                    ? 'text-stone-900 dark:text-amber-400 font-semibold' 
                                    : 'hover:text-amber-600 dark:hover:text-amber-400 text-stone-600 dark:text-stone-400'
                                }
                            `}
                        >
                            <a href={link.href}>
                                {link.name}
                            </a>

                            {/* Barre sous l'élément actif générée dynamiquement */}
                            {isActive && (
                                <span className="absolute bottom-0 left-0 w-full h-[1px] bg-amber-600 transition-all duration-300" />
                            )}
                        </li>
                    );
                })}
            </ul>
            </div>
            
            {/* Actions (Thème + Bouton) */}
            <div className="flex items-center gap-3">
                        <span className="text-[10px] tracking-widest font-medium uppercase text-stone-400 dark:text-stone-500 select-none">
                            {darkMode ? 'Mode Sombre' : 'Mode Clair'}
                        </span>
                      
                        <button 
                            onClick={() => setDarkMode(!darkMode)}
                            className="relative w-14 h-7 bg-stone-200 dark:bg-stone-800 rounded-full p-1 transition-colors duration-300 focus:outline-none"
                            aria-label="Interrupteur de thème"
                        >
                 
                            <motion.div 
                                className="w-5 h-5 rounded-full bg-white dark:bg-amber-400 shadow-md flex items-center justify-center text-[10px]"
                                layout
                                transition={{ type: "spring", stiffness: 500, damping: 30 }}
                                animate={{ x: darkMode ? 28 : 0 }}
                            >
                                {darkMode ? '🌙' : '☀️'}
                            </motion.div>
                        </button>
                    </div>
        </nav>
    );
}