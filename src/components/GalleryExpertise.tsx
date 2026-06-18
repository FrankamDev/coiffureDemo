import { motion } from 'framer-motion';
import { CheckCircle2, Award, Heart, ShieldAlert } from 'lucide-react';

export default function GalleryExpertise() {
    // Variantes d'animation au scroll
    const textVariants = {
        hidden: { opacity: 0, x: -30 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } }
    };

    const imageVariants = {
        hidden: { opacity: 0, scale: 0.95 },
        visible: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
    };

    return (
        <section className="relative py-20 md:py-28 bg-stone-50 dark:bg-stone-950 transition-colors duration-500 overflow-hidden">
            
            {/* Éléments de design en arrière-plan */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] max-w-[800px] bg-amber-100/10 dark:bg-amber-950/5 rounded-full blur-[130px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
                    
                    {/* --- ZONE GAUCHE : LA MOSAÏQUE VISUELLE (5 colonnes) --- */}
                    <div className="lg:col-span-6 grid grid-cols-12 gap-4 auto-rows-[120px] sm:auto-rows-[150px]">
                        
                        {/* Image Principale - Le Geste Technique */}
                        <motion.div 
                            variants={imageVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}
                            className="col-span-8 row-span-2 relative overflow-hidden border border-stone-200/50 dark:border-stone-900 group"
                        >
                            <img 
                                src="../../public/men/1.jpg" 
                                alt="Précision du tressage" 
                                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 pointer-events-none"
                            />
                            <div className="absolute bottom-4 left-4 bg-white/90 dark:bg-stone-900/90 backdrop-blur-sm px-3 py-1 text-[10px] tracking-widest uppercase font-semibold text-stone-950 dark:text-amber-400">
                                Précision Pro
                            </div>
                        </motion.div>

                        {/* Image Seconde - Résultat Éclat */}
                        <motion.div 
                            variants={imageVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}
                            className="col-span-4 row-span-3 relative overflow-hidden border border-stone-200/50 dark:border-stone-900 group"
                        >
                            <img 
                                src="../../public/men/1.jpg" 
                                alt="Modèle Box Braids" 
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 pointer-events-none"
                            />
                        </motion.div>

                        {/* Badge de Statistique Volant / Intégré */}
                        <motion.div 
                            variants={imageVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}
                            className="col-span-4 row-span-1 bg-gradient-to-br from-stone-950 to-stone-900 dark:from-stone-900 dark:to-stone-850 p-4 flex flex-col justify-center text-left"
                        >
                            <span className="font-serif text-2xl sm:text-3xl font-bold text-amber-400">99%</span>
                            <span className="text-[10px] uppercase tracking-wider text-stone-400 leading-tight">De clientes fidélisées</span>
                        </motion.div>

                        {/* Image 3 - Gros plan texture */}
                        <motion.div 
                            variants={imageVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}
                            className="col-span-4 row-span-1 relative overflow-hidden border border-stone-200/50 dark:border-stone-900 group"
                        >
                            <img 
                                src="../../public/men/1.jpg" 
                                alt="Finitions soignées" 
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 pointer-events-none"
                            />
                        </motion.div>
                    </div>

                    {/* --- ZONE DROITE : L'EXPERTISE & ENGAGEMENTS (7 colonnes) --- */}
                    <motion.div 
                        className="lg:col-span-6 flex flex-col justify-center text-center lg:text-left items-center lg:items-start"
                        initial="hidden" whileInView="visible" viewport={{ once: true }}
                        variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
                    >
                        <motion.span variants={textVariants} className="text-xs font-semibold tracking-[0.25em] uppercase text-amber-600 dark:text-amber-400 block mb-3">
                            Notre Philosophie
                        </motion.span>
                        
                        <motion.h2 variants={textVariants} className="text-3xl sm:text-4xl font-serif font-light text-stone-950 dark:text-stone-50 tracking-tight leading-tight">
                            Le tressage sain, <br />
                            <span className="font-bold uppercase tracking-wide bg-gradient-to-r from-amber-700 to-stone-950 dark:from-amber-400 dark:to-stone-200 bg-clip-text text-transparent">
                                Sans aucun compromis
                            </span>
                        </motion.h2>

                        <motion.p variants={textVariants} className="mt-6 text-sm sm:text-base text-stone-600 dark:text-stone-400 font-light max-w-xl leading-relaxed">
                            Chez NexaTress, nous croyons que la beauté ne doit jamais faire souffrir. Notre méthode signature est spécialement développée pour éliminer les tensions excessives à la racine, préserver l'alopécie de traction et stimuler la pousse de vos cheveux.
                        </motion.p>

                        {/* Liste d'engagements Premium (Grid 2 colonnes sur tablette/PC) */}
                        <motion.div variants={textVariants} className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4 w-full text-left">
                            <div className="p-4 bg-white dark:bg-stone-900/30 border border-stone-100 dark:border-stone-900/60 flex gap-3.5 items-start">
                                <Award className="w-5 h-5 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
                                <div>
                                    <h4 className="text-xs font-bold uppercase tracking-wide text-stone-900 dark:text-stone-100">Matériaux Premium</h4>
                                    <p className="text-xs text-stone-500 dark:text-stone-400 font-light mt-1">Mèches ultra-légères, hypoallergéniques et sélectionnées pour leur douceur.</p>
                                </div>
                            </div>

                            <div className="p-4 bg-white dark:bg-stone-900/30 border border-stone-100 dark:border-stone-900/60 flex gap-3.5 items-start">
                                <Heart className="w-5 h-5 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
                                <div>
                                    <h4 className="text-xs font-bold uppercase tracking-wide text-stone-900 dark:text-stone-100">Respect du Cuir Chevelu</h4>
                                    <p className="text-xs text-stone-500 dark:text-stone-400 font-light mt-1">Calcul précis du poids de chaque tresse pour éviter la casse du cheveu.</p>
                                </div>
                            </div>

                            <div className="p-4 bg-white dark:bg-stone-900/30 border border-stone-100 dark:border-stone-900/60 flex gap-3.5 items-start">
                                <CheckCircle2 className="w-5 h-5 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
                                <div>
                                    <h4 className="text-xs font-bold uppercase tracking-wide text-stone-900 dark:text-stone-100">Conseils de Suivi</h4>
                                    <p className="text-xs text-stone-500 dark:text-stone-400 font-light mt-1">Routine d'entretien personnalisée offerte à la fin de chaque séance.</p>
                                </div>
                            </div>

                            <div className="p-4 bg-white dark:bg-stone-900/30 border border-stone-100 dark:border-stone-900/60 flex gap-3.5 items-start">
                                <ShieldAlert className="w-5 h-5 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
                                <div>
                                    <h4 className="text-xs font-bold uppercase tracking-wide text-stone-900 dark:text-stone-100">Garantie Tenue 4 Semaines</h4>
                                    <p className="text-xs text-stone-500 dark:text-stone-400 font-light mt-1">Une retouche gratuite si une ligne venait à se détendre prématurément.</p>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}