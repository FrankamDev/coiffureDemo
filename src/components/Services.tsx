import { motion } from 'framer-motion';
import { ArrowUpRight, Clock, ShieldCheck } from 'lucide-react';
import { useState } from 'react';
import ServiceDetail from './ServiceDetail';
import { Link, useNavigate } from 'react-router-dom';
import servicesData from '../servicesData';

export default function Services() {
    // const services = [
    //     {
    //         id: '1',
    //         title: "Tresses Protectrices & Box Braids",
    //         description: "Des divisions géométriques parfaites et une tension maîtrisée pour préserver la santé de votre cuir chevelu.",
    //         price: "À partir de 25 000 FCFA",
    //         duration: "2h30 - 4h",
    //         image: "/women/1.jpg", // Note: En production/Vite, les assets publics se sourcent directement à la racine "/"
    //         featured: true 
    //     },
    //     {
    //         id: '2',
    //         title: "Cornrows & Nattes Collées",
    //         description: "Des lignes épurées et des designs sur-mesure, du style minimaliste aux motifs les plus complexes.",
    //         price: "À partir de 15 000 FCFA",
    //         duration: "1h - 2h",
    //         image: "/men/11.jpg",
    //         featured: false
    //     },
    //     {
    //         id: '3',
    //         title: "Fausses Locks & Twists",
    //         description: "Un volume aérien et une texture naturelle premium pour un style bohème et sophistiqué.",
    //         price: "À partir de 35 000 FCFA",
    //         duration: "3h - 5h",
    //         image: "/men/11.jpg",
    //         featured: false
    //     },
    //     {
    //         id: '4',
    //         title: "Soin Profond & Traitement",
    //         description: "Une cure d'hydratation intense et un massage du cuir chevelu pour stimuler activement la pousse.",
    //         price: "À partir de 10 000 FCFA",
    //         duration: "1h - 1h30",
    //         image: "/men/11.jpg",
    //         featured: false
    //     }
    // ];
    const navigate = useNavigate();

    
    
    const goToService = (id) => navigate(`/services/${id}`);
    const cardVariants = {
        hidden: { opacity: 0, y: 40 },
        visible: { 
            opacity: 1, 
            y: 0,
            transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
        }
    };

    return (
        <section className="relative py-20 md:py-28 bg-white dark:bg-stone-950 transition-colors duration-500 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 relative z-10">
                
                {/* --- EN-TÊTE DE LA SECTION --- */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 md:mb-20 text-center md:text-left">
                    <div>
                        <span className="text-xs font-semibold tracking-[0.25em] uppercase text-amber-600 dark:text-amber-400 block mb-3">
                            Le Menu NexaTress
                        </span>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-light text-stone-950 dark:text-stone-50 tracking-tight">
                            Nos Prestations <br className="hidden sm:inline" />
                            <span className="font-bold uppercase tracking-wide bg-gradient-to-r from-amber-700 to-stone-950 dark:from-amber-400 dark:to-stone-200 bg-clip-text text-transparent">
                                D'Exception
                            </span>
                        </h2>
                    </div>
                    <p className="text-sm md:text-base text-stone-600 dark:text-stone-400 font-light max-w-sm md:text-right">
                        Chaque formule comprend un diagnostic du cheveu, un shampoing soin adapté et une finition hydratante haute brillance.
                    </p>
                </div>

                {/* --- GRILLE ASYMÉTRIQUE DES SERVICES (Bento Grid) --- */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                    {servicesData.map((service) => (
                        <motion.div
                            key={service.id}
                            onClick={() => navigate(`/service/${service.id}`)}
                            variants={cardVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-100px" }}
                            whileHover={{ y: -6 }}
                            className={`group relative flex flex-col justify-between overflow-hidden border border-stone-100 dark:border-stone-900 bg-stone-50 dark:bg-stone-900/40 p-6 md:p-8 transition-all duration-300 cursor-pointer ${
                                service.featured ? 'lg:col-span-2' : 'lg:col-span-1'
                            }`}
                        >
                            {/* Numéro en arrière-plan */}
                            <span className="absolute top-4 right-6 text-5xl md:text-6xl font-serif font-bold text-stone-200/40 dark:text-stone-800/20 select-none transition-colors duration-300">
                                {service.id}
                            </span>

                            {/* Contenu textuel */}
                            <div className="relative z-10">
                                <div className="flex items-center gap-4 text-xs font-medium text-stone-500 dark:text-stone-400 mb-4">
                                    <span className="flex items-center gap-1">
                                        <Clock className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" />
                                        {service.duration}
                                    </span>
                                    <span className="flex items-center gap-1">
                                        <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                                        Soin inclus
                                    </span>
                                </div>

                                <h3 className="text-xl sm:text-2xl font-serif font-semibold text-stone-950 dark:text-stone-50 group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors duration-300">
                                    {service.title}
                                </h3>

                                <p className="mt-3 text-sm text-stone-600 dark:text-stone-400 font-light leading-relaxed max-w-xl">
                                    {service.description}
                                </p>
                            </div>

                            {/* Zone Image & Prix adaptative */}
                            <div className={`mt-8 flex flex-col sm:flex-row gap-4 items-stretch sm:items-center justify-between ${
                                service.featured ? 'lg:mt-12' : 'mt-8'
                            }`}>
                                <div className="flex items-center gap-4">
                                    {/* Mini Vignette Photo Ronde */}
                                    <div className="w-14 h-14 rounded-full overflow-hidden border border-stone-200 dark:border-stone-800 shrink-0">
                                        <img 
                                            src={service.image} 
                                            alt={service.title} 
                                            className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-500"
                                        />
                                    </div>
                                    <div>
                                        <p className="text-[10px] tracking-widest uppercase font-light text-stone-500 dark:text-stone-400">Tarif</p>
                                        <p className="text-lg font-bold text-stone-950 dark:text-amber-400 font-serif">{service.price}</p>
                                    </div>
                                </div>

                                {/* Bouton d'action fléché */}
                                    

                                <button  onClick={() => goToService(service.id)} className="inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-stone-950 dark:bg-stone-800 text-white group-hover:bg-amber-600 dark:group-hover:bg-amber-600 text-xs font-semibold uppercase tracking-wider rounded-none transition-all duration-300">
                                    Choisir 
                                    <ArrowUpRight className="w-3.5 h-3.5 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                                </button>
                                  
                                    
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}


