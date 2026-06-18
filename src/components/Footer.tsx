import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
     Phone, Mail, MapPin, 
    Clock, ArrowRight, Shield, CreditCard, Sparkles 
} from 'lucide-react';
import { BsInstagram, BsWhatsapp, BsYoutube } from 'react-icons/bs';
import { FaFacebook } from 'react-icons/fa';

export default function Footer() {
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
        <footer className="bg-stone-50 dark:bg-stone-950 text-stone-800 dark:text-stone-200 border-t border-stone-200 dark:border-stone-900 pt-16 pb-8 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
                
                {/* --- 1. ZONE DE NEWSLETTER & BRANDING --- */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pb-12 border-b border-stone-200 dark:border-stone-900 items-center">
                    <div className="lg:col-span-5 flex flex-col items-center lg:items-start text-center lg:text-left">
                        <span className="text-2xl font-serif font-semibold tracking-wide uppercase text-stone-950 dark:text-white">L'Atelier</span>
                        <span className="text-[10px] tracking-[0.25em] text-amber-600 dark:text-amber-400 font-light uppercase -mt-1 mb-3">NexaTress</span>
                        <p className="text-xs text-stone-500 dark:text-stone-400 max-w-sm leading-relaxed">
                            Sublimez votre style avec nos tresses protectrices haute couture. Précision géométrique et respect total de votre fibre capillaire.
                        </p>
                    </div>
                    
                    {/* Newsletter Premium */}
                    <div className="lg:col-span-7 w-full max-w-md lg:max-w-none ml-auto">
                        <h4 className="text-xs font-bold uppercase tracking-widest text-stone-950 dark:text-amber-400 mb-3 text-center lg:text-left">
                            Rejoindre le Cercle Privé
                        </h4>
                        <form className="flex border border-stone-300 dark:border-stone-800 focus-within:border-amber-600 dark:focus-within:border-amber-400 transition-colors">
                            <input 
                                type="email" 
                                placeholder="Votre adresse e-mail" 
                                className="w-full bg-transparent px-4 py-3 text-xs font-light tracking-wide outline-none placeholder:text-stone-400"
                                required
                            />
                            <button type="submit" className="px-5 bg-stone-950 dark:bg-stone-900 text-white hover:bg-amber-600 dark:hover:bg-amber-500 transition-colors flex items-center">
                                <ArrowRight className="w-4 h-4" />
                            </button>
                        </form>
                    </div>
                </div>

                {/* --- 2. GRILLE DE NAVIGATION PRINCIPALE --- */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 py-12 border-b border-stone-200 dark:border-stone-900 text-xs font-light">
                    
                    {/* Navigation Liens */}
                    <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
                        <h5 className="font-bold uppercase tracking-widest text-stone-900 dark:text-white mb-4">Explorer</h5>
                        <ul className="space-y-2.5 text-stone-500 dark:text-stone-400">
                            <li><a href="#" className="hover:text-amber-600 dark:hover:text-amber-400 transition-colors">Accueil</a></li>
                            <li><a href="#" className="hover:text-amber-600 dark:hover:text-amber-400 transition-colors">Nos Prestations</a></li>
                            <li><a href="#" className="hover:text-amber-600 dark:hover:text-amber-400 transition-colors">Galerie Réalisations</a></li>
                            <li><a href="#" className="hover:text-amber-600 dark:hover:text-amber-400 transition-colors">Prendre Rendez-vous</a></li>
                        </ul>
                    </div>

                    {/* Horaires d'ouverture */}
                    <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
                        <h5 className="font-bold uppercase tracking-widest text-stone-900 dark:text-white mb-4 flex items-center gap-2">
                            <Clock className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" /> Horaires
                        </h5>
                        <ul className="space-y-2 text-stone-500 dark:text-stone-400">
                            <li>Mardi - Vendredi : 09h00 - 19h00</li>
                            <li>Samedi : 08h30 - 18h00</li>
                            <li className="text-stone-400 dark:text-stone-600">Dimanche - Lundi : Fermé</li>
                        </ul>
                    </div>

                    {/* Contact & Support */}
                    <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
                        <h5 className="font-bold uppercase tracking-widest text-stone-900 dark:text-white mb-4 flex items-center gap-2">
                            <Phone className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" /> Contact
                        </h5>
                        <ul className="space-y-2.5 text-stone-500 dark:text-stone-400">
                            <li className="flex items-center gap-2 justify-center sm:justify-start">
                                <Phone className="w-3 h-3" /> +33 1 42 60 00 00
                            </li>
                            <li className="flex items-center gap-2 justify-center sm:justify-start">
                                <Mail className="w-3 h-3" /> contact@nexatress.com
                            </li>
                        </ul>
                    </div>

                    {/* Localisation Salon */}
                    <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
                        <h5 className="font-bold uppercase tracking-widest text-stone-900 dark:text-white mb-4 flex items-center gap-2">
                            <MapPin className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" /> Le Salon
                        </h5>
                        <p className="text-stone-500 dark:text-stone-400 leading-relaxed mb-4">
                            14 Rue de la Paix, <br /> 75002 Paris
                        </p>
                        {/* Réseaux Sociaux */}
                        <div className="flex items-center gap-3">
                            <a href="#" className="w-7 h-7 rounded-full bg-stone-100 dark:bg-stone-900 border border-stone-200 dark:border-stone-800 flex items-center justify-center text-stone-500 hover:text-amber-600 dark:hover:text-amber-400 transition-colors" aria-label="Instagram"><BsInstagram className="w-3.5 h-3.5" /></a>
                            <a href="#" className="w-7 h-7 rounded-full bg-stone-100 dark:bg-stone-900 border border-stone-200 dark:border-stone-800 flex items-center justify-center text-stone-500 hover:text-amber-600 dark:hover:text-amber-400 transition-colors" aria-label="Facebook"><FaFacebook className="w-3.5 h-3.5" /></a>
                            <a href="#" className="w-7 h-7 rounded-full bg-stone-100 dark:bg-stone-900 border border-stone-200 dark:border-stone-800 flex items-center justify-center text-stone-500 hover:text-amber-600 dark:hover:text-amber-400 transition-colors" aria-label="Youtube"><BsYoutube className="w-3.5 h-3.5" /></a>
                        </div>
                    </div>
                </div>

                {/* --- 3. REASSURANCE & INFORMATIONS SECONDAIRES --- */}
                <div className="flex flex-wrap items-center justify-between gap-6 py-6 border-b border-stone-200 dark:border-stone-900 text-[10px] uppercase tracking-wider font-medium text-stone-400">
                    <div className="flex items-center gap-2"><Shield className="w-3.5 h-3.5 text-emerald-600" /> Réservation Sécurisée</div>
                    <div className="flex items-center gap-2"><Sparkles className="w-3.5 h-3.5 text-amber-500" /> Diagnostic Offert</div>
                    <div className="flex items-center gap-2"><CreditCard className="w-3.5 h-3.5 text-blue-500" /> CB, Apple Pay & Espèces</div>
                </div>

                {/* --- 4. BAS DE PAGE : COPYRIGHT & INTERRUPTEUR DE THÈME --- */}
                <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-6">
                    <p className="text-[11px] text-stone-400 dark:text-stone-500 tracking-wide font-light text-center sm:text-left">
                        © 2026 NexaTress. Tous droits réservés. Mentions légales — RGPD.
                    </p>

                    {/* L'INTERRUPTEUR DE THÈME (STYLE TOGGLE SWITCH PHYSIQUE) */}
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
                </div>

            </div>
        </footer>
    );
}