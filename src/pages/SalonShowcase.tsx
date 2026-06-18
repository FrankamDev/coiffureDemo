import { motion } from 'framer-motion';
import { MapPin, Compass, Scissors, Sparkles } from 'lucide-react';

export default function SalonShowcase() {
    // Courbe de Bézier haut de gamme pour les transitions
    const transitionEase = [0.16, 1, 0.3, 1];

    const textVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: transitionEase } }
    };

    return (
        <section className="relative py-20 md:py-32 bg-white dark:bg-stone-950 transition-colors duration-500 overflow-hidden">
            
            {/* Arrière-plan architectural subtil */}
            <div className="absolute top-0 right-0 w-[30vw] h-full bg-stone-50 dark:bg-stone-900/10 pointer-events-none hidden lg:block" />
            
            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-12 items-center">
                    
                    {/* --- ZONE GAUCHE : LE JEU DE SUPERPOSITION ARCHITECTURAL (6 Colonnes) --- */}
                    <div className="lg:col-span-6 relative w-full max-w-[450px] sm:max-w-[550px] mx-auto aspect-[4/5] sm:aspect-square lg:aspect-[4/5]">
                        
                        {/* Image 1 : L'Ambiance Générale (Arrière-plan gauche) */}
                        <motion.div 
                            initial={{ opacity: 0, x: -40, scale: 0.95 }}
                            whileInView={{ opacity: 1, x: 0, scale: 1 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 1, ease: transitionEase }}
                            className="absolute left-0 top-0 w-[70%] h-[75%] border border-stone-200/60 dark:border-stone-900 overflow-hidden shadow-md"
                        >
                            <img 
                                src="https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=600&auto=format&fit=crop" 
                                alt="Intérieur du salon NexaTress" 
                                className="w-full h-full object-cover object-center scale-105 hover:scale-100 transition-transform duration-700"
                            />
                        </motion.div>

                        {/* Image 2 : Le Détail Premium / Le Bac à shampoing ou Miroir (Avant-plan droit) */}
                        <motion.div 
                            initial={{ opacity: 0, y: 50, x: 30 }}
                            whileInView={{ opacity: 1, y: 0, x: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 1, delay: 0.2, ease: transitionEase }}
                            className="absolute right-0 bottom-0 w-[60%] h-[65%] border-4 border-white dark:border-stone-950 overflow-hidden shadow-2xl z-20"
                        >
                            <img 
                                src="https://images.unsplash.com/photo-1633681926035-ec1ac984418a?q=80&w=600&auto=format&fit=crop" 
                                alt="Espace coiffure et miroirs" 
                                className="w-full h-full object-cover object-center scale-105 hover:scale-100 transition-transform duration-700"
                            />
                        </motion.div>

                        {/* Badge Flottant "L'Adresse" - Intégré chirurgicalement entre les deux images */}
                        <motion.div 
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="absolute left-[5%] bottom-[8%] z-30 p-4 bg-stone-950 dark:bg-amber-600 text-white flex items-center gap-3.5 shadow-xl rounded-none"
                        >
                            <div className="w-9 h-9 bg-white/10 flex items-center justify-center shrink-0">
                                <MapPin className="w-4 h-4 text-amber-400 dark:text-white" />
                            </div>
                            <div className="text-left">
                                <p className="text-[9px] tracking-widest uppercase font-light text-stone-400 dark:text-amber-100">Quartier Opéra</p>
                                <p className="text-xs font-serif font-bold tracking-wide">Paris Ier Arrondissement</p>
                            </div>
                        </motion.div>
                    </div>

                    {/* --- ZONE DROITE : HISTOIRE & VISITE GUIDÉE (6 Colonnes) --- */}
                    <motion.div 
                        className="lg:col-span-6 flex flex-col items-center lg:items-start text-center lg:text-left lg:pl-6"
                        initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }}
                        variants={{ visible: { transition: { staggerChildren: 0.12 } } }}
                    >
                        <motion.span variants={textVariants} className="text-xs font-semibold tracking-[0.25em] uppercase text-amber-600 dark:text-amber-400 block mb-3">
                            Le Lieu Sacré
                        </motion.span>
                        
                        <motion.h2 variants={textVariants} className="text-3xl sm:text-4xl font-serif font-light text-stone-950 dark:text-stone-50 tracking-tight leading-tight">
                            Un Écrin de Privilège <br />
                            <span className="font-bold uppercase tracking-wide bg-gradient-to-r from-stone-900 via-amber-700 to-stone-950 dark:from-amber-100 dark:via-amber-400 dark:to-stone-200 bg-clip-text text-transparent">
                                Pensé pour vous
                            </span>
                        </motion.h2>

                        <motion.p variants={textVariants} className="mt-6 text-sm sm:text-base text-stone-600 dark:text-stone-400 font-light max-w-xl leading-relaxed">
                            Oubliez le tumulte de la ville. Notre espace a été entièrement dessiné pour offrir une expérience sensorielle unique : lumières douces indirectes, fauteuils massants ergonomiques lors du soin, et une carte de thés rares sélectionnés pour parfaire votre moment de détente.
                        </motion.p>

                        {/* Les 3 piliers de l'Atelier */}
                        <motion.div variants={textVariants} className="mt-8 space-y-5 w-full max-w-xl text-left">
                            
                            <div className="flex gap-4 items-start group">
                                <div className="w-10 h-10 border border-stone-200 dark:border-stone-800 bg-stone-50 dark:bg-stone-900/50 flex items-center justify-center shrink-0 group-hover:border-amber-600 dark:group-hover:border-amber-400 transition-colors">
                                    <Compass className="w-4 h-4 text-stone-800 dark:text-stone-200" />
                                </div>
                                <div className="pt-0.5">
                                    <h4 className="text-xs font-bold uppercase tracking-wide text-stone-900 dark:text-stone-100">Intimité Préservée</h4>
                                    <p className="text-xs text-stone-500 dark:text-stone-400 font-light mt-1">Seulement trois clientes accueillies simultanément pour vous garantir un calme et une attention absolue.</p>
                                </div>
                            </div>

                            <div className="flex gap-4 items-start group">
                                <div className="w-10 h-10 border border-stone-200 dark:border-stone-800 bg-stone-50 dark:bg-stone-900/50 flex items-center justify-center shrink-0 group-hover:border-amber-600 dark:group-hover:border-amber-400 transition-colors">
                                    <Scissors className="w-4 h-4 text-stone-800 dark:text-stone-200" />
                                </div>
                                <div className="pt-0.5">
                                    <h4 className="text-xs font-bold uppercase tracking-wide text-stone-900 dark:text-stone-100">Postes de Tressage Ergonomiques</h4>
                                    <p className="text-xs text-stone-500 dark:text-stone-400 font-light mt-1">Assises haut de gamme conçues pour éliminer la fatigue posturale lors des prestations de longue durée.</p>
                                </div>
                            </div>

                            <div className="flex gap-4 items-start group">
                                <div className="w-10 h-10 border border-stone-200 dark:border-stone-800 bg-stone-50 dark:bg-stone-900/50 flex items-center justify-center shrink-0 group-hover:border-amber-600 dark:group-hover:border-amber-400 transition-colors">
                                    <Sparkles className="w-4 h-4 text-stone-800 dark:text-stone-200" />
                                </div>
                                <div className="pt-0.5">
                                    <h4 className="text-xs font-bold uppercase tracking-wide text-stone-900 dark:text-stone-100">Hygiène Norme Clinique</h4>
                                    <p className="text-xs text-stone-500 dark:text-stone-400 font-light mt-1">Chaque peigne, outil et miroir subit une stérilisation complète par UV-C entre chaque rendez-vous.</p>
                                </div>
                            </div>

                        </motion.div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}