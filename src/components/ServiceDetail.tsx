import { motion } from 'framer-motion';
import { ArrowLeft, Clock, Sparkles, ShieldCheck, Heart, Scissors } from 'lucide-react';
import { useParams, Link, Navigate, useNavigate  } from 'react-router-dom';
import servicesData from '../servicesData';
import Navbar from './Navbar';

export default function ServiceDetail() {


    const transitionEase = [0.16, 1, 0.3, 1];
 const { id } = useParams();

const Navigate =  useNavigate()
const service = servicesData?.find(item => String(item.id) === String(id));
 
 // Sécurité si l'utilisateur tape n'importe quoi dans l'URL
 if (!service) {
     return <div className="p-8 text-center">Prestation introuvable.</div>;
    }
    return (
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.6, ease: transitionEase }}
            className="min-h-screen pt-28 pb-16 bg-white dark:bg-stone-950 text-stone-900 dark:text-stone-100 transition-colors duration-500"
        >
            <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-12">
                <Navbar/>
                {/* Bouton Retour Ultra Épuré */}
                <button 
                    onClick={() => Navigate('/')}
                    className="flex items-center gap-2 text-xs uppercase tracking-widest text-stone-500 hover:text-amber-600 dark:hover:text-amber-400 transition-colors mb-12 group font-medium"
                >
                    <ArrowLeft className="w-4 h-4 transform group-hover:-translate-x-1 transition-transform" />
                    Retour aux prestations
                </button>

                {/* Grille Principale Style Éditorial */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                    
                    {/* Colonne Gauche : Image Artistique Rehaussée */}
                    <div className="lg:col-span-5 relative aspect-[3/4] overflow-hidden border border-stone-100 dark:border-stone-900 shadow-2xl">
                        <img 
                            src={service.image} 
                            alt={service.title} 
                            className="w-full h-full object-cover object-center transform scale-105 hover:scale-100 transition-transform duration-1000"
                        />
                        <div className="absolute top-4 right-4 bg-stone-950/80 backdrop-blur-md text-amber-400 px-3 py-1.5 text-[10px] font-bold uppercase tracking-widest">
                            Signature NexaTress
                        </div>
                    </div>

                    {/* Colonne Droite : Contenu Structuré */}
                    <div className="lg:col-span-7 space-y-8 text-left">
                        <div>
                            <span className="text-xs font-semibold tracking-[0.25em] uppercase text-amber-600 dark:text-amber-400 block mb-2">
                                Haute Coiffure Protectrice
                            </span>
                            <h1 className="text-3xl sm:text-4xl font-serif font-bold tracking-tight text-stone-950 dark:text-stone-50">
                                {service.title}
                            </h1>
                            
                            {/* Barrettes d'infos clés (Prix, Durée) */}
                            <div className="flex flex-wrap gap-4 mt-6 py-4 border-y border-stone-100 dark:border-stone-900">
                                <div className="flex items-center gap-2 text-sm text-stone-600 dark:text-stone-400">
                                    <Clock className="w-4 h-4 text-amber-600" />
                                    <span>Durée estimée : <strong className="font-semibold text-stone-900 dark:text-stone-200">{service.duration}</strong></span>
                                </div>
                                <div className="h-4 w-[1px] bg-stone-200 dark:bg-stone-800 hidden sm:block" />
                                <div className="text-sm text-stone-600 dark:text-stone-400">
                                    Tarif : <span className="font-serif font-bold text-amber-700 dark:text-amber-400 text-lg">{service.price}</span>
                                </div>
                            </div>
                        </div>

                        {/* Description longue */}
                        <div className="space-y-4">
                            <h3 className="text-xs font-bold uppercase tracking-widest text-stone-400">Le Rituel & Description</h3>
                            <p className="text-sm sm:text-base font-light text-stone-600 dark:text-stone-400 leading-relaxed">
                                {service.description || "Une technique de tressage millimétrée respectant la physiologie de votre cuir chevelu. Idéal pour stimuler la pousse tout en arborant un design géométrique parfait et propre."}
                            </p>
                        </div>

                        {/* Inclusions du Service */}
                        <div className="bg-stone-50 dark:bg-stone-900/40 p-6 border border-stone-100 dark:border-stone-900/60 space-y-4">
                            <h4 className="text-xs font-bold uppercase tracking-widest text-stone-900 dark:text-amber-400 flex items-center gap-2">
                                <Sparkles className="w-3.5 h-3.5" /> Ce qui est inclus dans la prestation :
                            </h4>
                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-stone-600 dark:text-stone-400 font-light">
                                <li className="flex items-center gap-2"><ShieldCheck className="w-3.5 h-3.5 text-emerald-600" /> Diagnostic cuir chevelu offert</li>
                                <li className="flex items-center gap-2"><Scissors className="w-3.5 h-3.5 text-emerald-600" /> Shampoing hydratant & Soin profond</li>
                                <li className="flex items-center gap-2"><Heart className="w-3.5 h-3.5 text-emerald-600" /> Mèches premium hypoallergéniques</li>
                                <li className="flex items-center gap-2"><Sparkles className="w-3.5 h-3.5 text-emerald-600" /> Application d'huiles de finition</li>
                            </ul>
                        </div>

                        {/* Bouton d'action directe connecté à la logique WhatsApp */}
                        <div className="pt-4">
                            <Link 
                                to="/contact" 
                                //  onClick={() => navigate(-1)}
                                className="inline-block bg-stone-950 dark:bg-amber-600 hover:bg-amber-700 text-white text-xs font-semibold tracking-widest uppercase px-8 py-4 transition-all duration-300 shadow-xl"
                            >
                                Réserver cette prestation
                            </Link>
                        </div>
                    </div>
                </div>

            </div>
        </motion.div>
    );
}

