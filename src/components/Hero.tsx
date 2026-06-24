import { motion, type Variants } from 'framer-motion';
import { Calendar, Sparkles, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Hero() {
    // Animation d'entrée progressive
    const fadeInUp: Variants = {
        hidden: { opacity: 0, y: 30 },
        visible: { 
            opacity: 1, 
            y: 0,
            transition: { 
                duration: 0.8, 
                ease: [0.16, 1, 0.3, 1] as const 
            }
        }
    };

    // Animation de flottaison pour le téléphone
    const floatAnimation = {
        y: [0, -10, 0],
        transition: {
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut" as const
        }
    };

    return (
        <section className="relative min-h-screen pt-24 pb-12 flex items-center justify-center bg-stone-50 dark:bg-stone-950 overflow-hidden transition-colors duration-500">
           
            <div className="absolute top-20 left-[-10%] w-[50vw] h-[50vw] max-w-[600px] bg-amber-200/20 dark:bg-amber-950/10 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-[-10%] right-[-10%] w-[60vw] h-[60vw] max-w-[700px] bg-rose-200/20 dark:bg-stone-900/30 rounded-full blur-[150px] pointer-events-none" />
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808007_1px,transparent_1px),linear-gradient(to_bottom,#80808007_1px,transparent_1px)] bg-[size:24px_24px] md:bg-[size:32px_32px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">
                
                <motion.div 
                    className="lg:col-span-7 flex flex-col text-center lg:text-left items-center lg:items-start order-2 lg:order-1"
                    initial="hidden"
                    animate="visible"
                    variants={{ 
                        visible: { 
                            transition: { staggerChildren: 0.12 } 
                        } 
                    }}
                >
                    {/* Badge */}
                    <motion.div 
                        variants={fadeInUp}
                        className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-50 dark:bg-stone-900 border border-amber-200/30 dark:border-amber-500/10 text-[10px] md:text-xs font-medium tracking-widest text-amber-800 dark:text-amber-400 uppercase mb-4 md:mb-6"
                    >
                        <Sparkles className="w-3 homecercle h-3 text-amber-600 dark:text-amber-400" />
                        L'art du tressage haut de gamme
                    </motion.div>

                    <motion.h1 
                        variants={fadeInUp}
                        className="text-[32px] sm:text-4xl md:text-5xl lg:text-6xl font-serif font-light tracking-tight text-stone-950 dark:text-stone-50 leading-[1.15] sm:leading-[1.1]"
                    >
                        Tout le monde a choisi <br className="hidden sm:inline" />
                        <span className="font-bold uppercase tracking-wide bg-gradient-to-r from-stone-900 via-amber-700 to-stone-950 dark:from-amber-100 dark:via-amber-400 dark:to-stone-200 bg-clip-text text-transparent block sm:inline mt-1 sm:mt-0">
                            NexaTress
                        </span>
                    </motion.h1>

                    <motion.p 
                        variants={fadeInUp}
                        className="mt-4 md:mt-6 text-sm md:text-base lg:text-lg text-stone-600 dark:text-stone-400 font-light max-w-md sm:max-w-xl leading-relaxed"
                    >
                        Bien plus qu'une coiffure, une signature. Nos expertes subliment votre chevelure avec des tresses d'exception, alliant précision géométrique et éclat durable.
                    </motion.p>

                    <motion.div 
                        variants={fadeInUp}
                        className="mt-6 md:mt-8 flex flex-col sm:flex-row items-center gap-3 sm:gap-4 w-full sm:w-auto"
                    >
                        <Link to="/rdv" className="w-full sm:w-auto px-8 py-3.5 text-[11px] font-semibold tracking-widest uppercase text-white bg-stone-950 dark:bg-amber-600 hover:bg-amber-600 dark:hover:bg-amber-500 rounded-none transition-all duration-300 shadow-xl shadow-stone-950/10 dark:shadow-amber-600/10 flex items-center justify-center gap-3">
                            <Calendar className="w-4 h-4" />
                            Réserver un rdv
                        </Link>
                        <Link to="prestations" className="w-full sm:w-auto px-8 py-3.5 text-[11px] font-semibold tracking-widest uppercase text-stone-900 dark:text-stone-200 border border-stone-200 dark:border-stone-800 hover:border-stone-950 dark:hover:border-amber-500 rounded-none transition-all duration-300">
                            Nos créations
                        </Link>
                    </motion.div>

                    <motion.div 
                        variants={fadeInUp}
                        className="mt-8 md:mt-12 pt-6 md:pt-8 border-t border-stone-200 dark:border-stone-900 flex flex-row items-center gap-4 text-left"
                    >
                        <div className="flex -space-x-2.5">
                            {[1, 2, 3].map((i) => (
                                <div key={i} className="w-8 h-8 md:w-9 md:h-9 rounded-full border-2 border-stone-50 dark:border-stone-950 bg-stone-200 dark:bg-stone-800 flex items-center justify-center text-xs">✨</div>
                            ))}
                        </div>
                        <div>
                            <div className="flex items-center gap-0.5">
                                {[1, 2, 3, 4, 5].map((i) => (
                                    <Star key={i} className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
                                ))}
                                <span className="text-xs md:text-sm font-semibold ml-1 text-stone-900 dark:text-stone-100">4.9/5</span>
                            </div>
                            <p className="text-[11px] md:text-xs text-stone-500 dark:text-stone-400">Plus de 500 clientes sublimées</p>
                        </div>
                    </motion.div>
                </motion.div>

                {/* ZONE TÉLÉPHONE */}
                <div className="lg:col-span-5 flex flex-col items-center justify-center relative order-1 lg:order-2 w-full max-w-[240px] sm:max-w-[280px] md:max-w-[300px] lg:max-w-none mx-auto py-6 lg:py-0">
                    
                    <motion.div 
                        animate={floatAnimation}
                        whileHover={{ scale: 1.02, rotateY: 5 }}
                        className="relative w-full aspect-[9/18.5] max-w-[250px] sm:max-w-[280px] rounded-[38px] sm:rounded-[45px] p-2 sm:p-2.5 bg-stone-900 shadow-[0_20px_50px_-10px_rgba(0,0,0,0.25)] border-[3px] sm:border-4 border-stone-800 overflow-hidden"
                    >
                        <div className="absolute top-3 left-1/2 transform -translate-x-1/2 w-20 sm:w-24 h-3.5 bg-stone-900 rounded-full z-30" />

                        <div className="relative w-full h-full rounded-[30px] sm:rounded-[36px] overflow-hidden bg-stone-800">
                            <img 
                                src="/women/1.jpg" 
                                alt="Tresses d'exception NexaTress" 
                                className="w-full h-full object-cover object-center pointer-events-none"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-stone-950/40 via-transparent to-transparent" />
                        </div>
                    </motion.div>

                    {/* Card Zéro Douleur */}
                    <motion.div 
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.6 }}
                        className="absolute -right-2 sm:-right-4 top-1/4 p-3 bg-white/90 dark:bg-stone-900/90 backdrop-blur-md border border-stone-100 dark:border-stone-800 shadow-lg rounded-none hidden sm:flex items-center gap-2.5 max-w-[170px]"
                    >
                        <span className="text-xs">✨</span>
                        <div className="text-left">
                            <h4 className="text-[11px] font-bold text-stone-900 dark:text-stone-100">Zéro Douleur</h4>
                            <p className="text-[9px] text-stone-500 dark:text-stone-400">Technique protectrice</p>
                        </div>
                    </motion.div>

                    {/* Card Réservation */}
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8 }}
                        className="absolute -left-2 sm:-left-6 bottom-10 p-2.5 bg-stone-950 dark:bg-amber-600 text-white shadow-lg rounded-none hidden sm:flex flex-col text-center min-w-[120px]"
                    >

                        <span className="text-[9px] tracking-widest uppercase font-light opacity-80">Prochain RDV</span>
                        <span className="text-xs font-bold font-serif">Demain 14:00</span>
                    </motion.div>
                </div>

            </div>
        </section>
    );
}