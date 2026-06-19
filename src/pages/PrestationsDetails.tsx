import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Award, Shield, Star } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import prestationData from '../prestationData';

// Interface pour corriger les erreurs TypeScript
interface Service {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
  price: string;
  duration: string;
  rating: number;
  included?: string[];
}

export default function PrestationsDetails() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const services = prestationData.find(s => s.id === Number(id)) as Service | undefined;

  if (!services) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-stone-50 dark:bg-stone-950">
        <div className="text-center">
          <h2 className="text-4xl font-serif mb-4">Prestation introuvable</h2>
          <Link to="/prestations" className="text-amber-600 hover:underline">← Retour aux prestations</Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <Navbar />
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="min-h-screen bg-stone-50 dark:bg-stone-950 pt-24 pb-20"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
          
          <button onClick={() => navigate(-1)} className="flex items-center gap-2 mb-8 text-sm uppercase tracking-widest text-stone-500 hover:text-amber-600">
            <ArrowLeft className="w-4 h-4" /> Retour
          </button>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Image */}
            <div className="lg:col-span-7">
              <div className="relative overflow-hidden shadow-2xl border border-stone-200 dark:border-stone-800">
                <img src={services.image} alt={services.title} className="w-full h-full object-cover" />
              </div>
            </div>

            {/* Détails */}
            <div className="lg:col-span-5 space-y-8">
              <div>
                <span className="uppercase text-xs tracking-widest text-amber-600">{services.category}</span>
                <h1 className="text-4xl font-serif tracking-tight mt-2">{services.title}</h1>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1 text-amber-500">
                  {Array.from({ length: 5 })?.map((_, i) => <Star key={i} className="w-5 h-5 fill-current" />)}
                  <span className="ml-2 text-lg font-medium text-stone-700 dark:text-stone-300">{services.rating}</span>
                </div>
                <div className="text-right">
                  <p className="text-4xl font-serif font-bold text-amber-600">{services.price}</p>
                  <p className="text-sm text-stone-500">{services.duration}</p>
                </div>
              </div>

              <p className="text-lg leading-relaxed text-stone-700 dark:text-stone-300">
                {services.description}
              </p>

              <div>
                <h4 className="uppercase tracking-widest text-xs font-bold mb-4 flex items-center gap-2">
                  <Award className="w-4 h-4" /> Inclus dans la prestation
                </h4>
                <div className="grid grid-cols-1 gap-3">
                  {services.included?.map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <Shield className="w-5 h-5 text-emerald-600 mt-0.5" />
                      <span className="text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <Link
                to="/contact"
                className="block w-full py-5 text-center bg-stone-950 dark:bg-amber-600 text-white font-semibold tracking-widest uppercase hover:bg-amber-600 transition-all"
              >
                Réserver cette prestation
              </Link>
            </div>
          </div>
        </div>
      </motion.div>
      <Footer />
    </>
  );
}