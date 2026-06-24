import  { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
   Clock, Scissors, CheckCircle2, 
  ArrowRight, Loader2,  User, ShieldCheck 
} from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

type BookingStatus = 'idle' | 'fetching_slots' | 'success';

interface ServiceItem {
  id: string;
  name: string;
  duration: number; // en minutes
  price: number; // en FCFA
  category: 'coiffure' | 'barbe' | 'soins';
}

interface TimeSlot {
  time: string;
  available: boolean;
}

export function BookingSection() {
  const [status, setStatus] = useState<BookingStatus>('idle');
  const [selectedCategory, setSelectedCategory] = useState<'coiffure' | 'barbe' | 'soins'>('coiffure');
  const [selectedService, setSelectedService] = useState<string>('c1');
  const [selectedDate, setSelectedDate] = useState<string>('');
  const [selectedTime, setSelectedTime] = useState<string>('');
  const [slotsLoading, setSlotsLoading] = useState<boolean>(false);
  const [availableSlots, setAvailableSlots] = useState<TimeSlot[]>([]);
  
  const [clientInfo, setClientInfo] = useState({ name: '', phone: '' });

  // 1. Catalogue de services de ton salon (Mock Data Base de données)
  const services: ServiceItem[] = [
    { id: 'c1', name: 'Coupe Signature & Shampoing Ritual', duration: 45, price: 5000, category: 'coiffure' },
    { id: 'c2', name: 'Coloration Haute Couture / Décoloration', duration: 90, price: 15000, category: 'coiffure' },
    { id: 'c3', name: 'Lissage Protéine / Traitement Kératine', duration: 120, price: 25000, category: 'coiffure' },
    { id: 'b1', name: 'Taille de Barbe & Traçage à l\'Ancienne (Vaporisateur)', duration: 30, price: 3000, category: 'barbe' },
    { id: 'b2', name: 'Rituel Barbe Premium (Huiles chaudes & Massage)', duration: 45, price: 5000, category: 'barbe' },
    { id: 's1', name: 'Soin du Visage Purifiant & Masque Noir', duration: 40, price: 8000, category: 'soins' },
    { id: 's2', name: 'Gommage Capillaire Intégral & Massage Crânien', duration: 30, price: 6000, category: 'soins' },
  ];

  // 2. Simulation de chargement des créneaux horaires dynamiques quand la date change
  useEffect(() => {
    if (!selectedDate) return;
    
    setSlotsLoading(true);
    const fetchAvailableSlots = setTimeout(() => {
      // Génération de créneaux fictifs dynamiques
      const mockSlots: TimeSlot[] = [
        { time: '09:00', available: true },
        { time: '10:30', available: true },
        { time: '13:00', available: false },
        { time: '14:30', available: true },
        { time: '16:00', available: true },
        { time: '17:30', available: false },
        { time: '19:00', available: true },
      ];
      setAvailableSlots(mockSlots);
      setSlotsLoading(false);
    }, 1000); // Latence réseau artificielle de 1s

    return () => clearTimeout(fetchAvailableSlots);
  }, [selectedDate, selectedService]);

  const activeService = services.find(s => s.id === selectedService) || services[0];
  const filteredServices = services.filter(s => s.category === selectedCategory);

  // Basculer de catégorie réinitialise le service sélectionné par défaut
  const handleCategoryChange = (cat: 'coiffure' | 'barbe' | 'soins') => {
    setSelectedCategory(cat);
    const firstService = services.find(s => s.category === cat);
    if (firstService) setSelectedService(firstService.id);
    setSelectedTime('');
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setClientInfo(prev => ({ ...prev, [name]: value }));
  };

  // 3. Soumission et formatage WhatsApp
  const handleBookingSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedDate || !selectedTime) {
      alert("Veuillez sélectionner une date et un créneau horaire.");
      return;
    }

    setStatus('fetching_slots');
    await new Promise(resolve => setTimeout(resolve, 1800)); // Latence de traitement finale
    setStatus('success');

    const whatsappNumber = "237690461830";
    
    // Formatage luxueux pour ton salon de coiffure
    const textMessage = 
`✨ *NOUVELLE DEMANDE DE RÉSERVATION* ✨
-----------------------------------------
👤 *Client :* ${clientInfo.name}
📞 *Téléphone :* ${clientInfo.phone}

💇‍♂️ *Prestation :* ${activeService.name}
⏳ *Durée Estimée :* ${activeService.duration} minutes
💵 *Tarif :* ${activeService.price.toLocaleString()} FCFA

📅 *Date :* ${selectedDate}
🕒 *Heure choisie :* ${selectedTime}
-----------------------------------------
⚡ _Veuillez confirmer la disponibilité de ce créneau par retour de message._`;

    const encodedMessage = encodeURIComponent(textMessage);
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

    setTimeout(() => {
      window.open(whatsappUrl, '_blank');
    }, 1200);
  };

  return (
  <>
    <section id="booking-section" className="relative min-h-screen py-24 bg-stone-50 dark:bg-slate-950 overflow-hidden flex items-center transition-colors duration-500">
      <Navbar />
      {/* STRUCTURE DE BACKGROUND FINE */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808003_1px,transparent_1px),linear-gradient(to_bottom,#80808003_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
      <div className="absolute top-1/3 right-[-10%] w-[50vw] h-[50vw] bg-lime-400/5 dark:bg-lime-500/5 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 relative z-10 w-full">
        
        {/* EN-TÊTE MAGAZINE DE LUXE */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-16 items-end">
          <div className="lg:col-span-7 text-center lg:text-left">
            <span className="inline-flex items-center gap-2 px-3 py-1 bg-white dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800 text-[10px] font-mono font-bold tracking-widest text-slate-900 dark:text-lime-400 uppercase mb-4">
              <Scissors className="w-3 h-3 text-lime-500" /> Maison de Beauté Exclusive
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-sans font-light tracking-tight text-slate-950 dark:text-white leading-none">
              Planifier Votre <br />
              <span className="font-black uppercase tracking-wide bg-gradient-to-r from-blue-950 via-slate-800 to-lime-500 dark:from-white dark:via-blue-400 dark:to-lime-400 bg-clip-text text-transparent">
                Instant Privé
              </span>
            </h2>
          </div>
          <div className="lg:col-span-5 text-center lg:text-right">
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-light max-w-sm mx-auto lg:ml-auto leading-relaxed">
              Sélectionnez vos soins signatures. Notre système synchronise vos préférences pour réserver l'expert styliste idéal.
            </p>
          </div>
        </div>

        {/* INTERACTIVE BOARD */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch max-w-6xl mx-auto">
          
          {/* NAVIGATION GAUCHE : SÉLECTEUR DE CATÉGORIES */}
          <div className="lg:col-span-4 flex flex-row lg:flex-col gap-2 overflow-x-auto scrollbar-none pb-2 lg:pb-0">
            {(['coiffure', 'barbe', 'soins'] as const).map((cat) => {
              const isSelected = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => handleCategoryChange(cat)}
                  className={`flex items-center gap-4 p-4 lg:p-6 text-left border transition-all duration-300 rounded-none shrink-0 lg:shrink w-auto lg:w-full focus:outline-none relative overflow-hidden ${
                    isSelected
                      ? 'bg-slate-950 text-white border-slate-950 dark:bg-slate-900 dark:border-slate-800'
                      : 'bg-white dark:bg-slate-950 text-slate-500 dark:text-slate-400 border-slate-200/60 dark:border-slate-900 hover:border-slate-300'
                  }`}
                >
                  <div className={`w-8 h-8 flex items-center justify-center ${isSelected ? 'text-lime-400' : 'text-slate-400'}`}>
                    <Scissors className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm font-black uppercase tracking-wider block">
                      {cat === 'coiffure' ? 'Haute Coiffure' : cat === 'barbe' ? 'Barbière Élite' : 'Soins Visage & Capillaire'}
                    </h4>
                    <span className="text-[10px] hidden lg:block font-light text-slate-400 dark:text-slate-500 mt-0.5">
                      {cat === 'coiffure' ? 'Coupes & Colorations' : cat === 'barbe' ? 'Rasage & Traçage' : 'Esthétique masculine'}
                    </span>
                  </div>
                  {isSelected && (
                    <motion.div layoutId="barIndicator" className="absolute right-0 top-0 bottom-0 w-[4px] bg-lime-400 hidden lg:block" />
                  )}
                </button>
              );
            })}
          </div>

          {/* PANNEAU PRINCIPAL DE CONFIGURATION DU RENDEZ-VOUS */}
          <div className="lg:col-span-8 bg-white dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800/80 p-6 sm:p-8 relative overflow-hidden">
            
            <AnimatePresence mode="wait">
              {status === 'success' ? (
                // SUCCESS CONTAINER
                <motion.div
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute inset-0 bg-white dark:bg-slate-900 z-20 flex flex-col items-center justify-center p-6 text-center"
                >
                  <CheckCircle2 className="w-16 h-16 text-lime-500 mb-4 animate-pulse" />
                  <h3 className="text-xl font-black uppercase tracking-tight text-slate-950 dark:text-white mb-2">
                    Création du ticket de Soin
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 font-light max-w-sm mb-6 leading-relaxed">
                    Redirection vers l'assistant WhatsApp du salon pour finaliser le blocage horaire avec notre équipe.
                  </p>
                  <button
                    onClick={() => setStatus('idle')}
                    className="px-5 py-2.5 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 text-[10px] font-bold uppercase tracking-widest hover:bg-stone-50"
                  >
                    Choisir un autre créneau
                  </button>
                </motion.div>
              ) : (
                // BLOC FORMULAIRE FORM
                <form onSubmit={handleBookingSubmit} className="space-y-6 text-left h-full flex flex-col justify-between">
                  <div className="space-y-5">
                    
                    {/* INPUTS CLIENT */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Votre Nom Complet</label>
                        <div className="relative">
                          <input 
                            type="text" required name="name" value={clientInfo.name} onChange={handleInputChange} placeholder="ex: Frank Kamgang" 
                            className="w-full bg-stone-50 dark:bg-slate-950/60 border border-slate-200/60 dark:border-slate-800/80 px-4 py-3 text-xs text-slate-900 dark:text-white focus:outline-none focus:border-slate-950 dark:focus:border-lime-400 rounded-none"
                          />
                          <User className="w-3.5 h-3.5 text-slate-400 absolute right-4 top-1/2 -translate-y-1/2" />
                        </div>
                      </div>
                      <div className="space-y-1.5">
                        <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Numéro de Contact</label>
                        <input 
                          type="tel" required name="phone" value={clientInfo.phone} onChange={handleInputChange} placeholder="ex: 690461830" 
                          className="w-full bg-stone-50 dark:bg-slate-950/60 border border-slate-200/60 dark:border-slate-800/80 px-4 py-3 text-xs text-slate-900 dark:text-white focus:outline-none focus:border-slate-950 dark:focus:border-lime-400 rounded-none"
                        />
                      </div>
                    </div>

                    {/* CHOIX DU SERVICE DU SOIN */}
                    <div className="space-y-1.5">
                      <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Sélection de la Formule</label>
                      <select
                        value={selectedService}
                        onChange={(e) => setSelectedService(e.target.value)}
                        className="w-full bg-stone-50 dark:bg-slate-950/60 border border-slate-200/60 dark:border-slate-800/80 px-4 py-3 text-xs text-slate-900 dark:text-white focus:outline-none focus:border-slate-950 dark:focus:border-lime-400 appearance-none cursor-pointer rounded-none"
                      >
                        {filteredServices.map(s => (
                          <option key={s.id} value={s.id}>{s.name} — {s.price.toLocaleString()} FCFA</option>
                        ))}
                      </select>
                    </div>

                    {/* SÉLECTION DATE & CRÉNEAUX AVEC SQUELETTE ANIMÉ */}
                    <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 items-start">
                      <div className="sm:col-span-5 space-y-1.5">
                        <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Date souhaitée</label>
                        <div className="relative">
                          <input 
                            type="date" required value={selectedDate} onChange={(e) => setSelectedDate(e.target.value)}
                            className="w-full bg-stone-50 dark:bg-slate-950/60 border border-slate-200/60 dark:border-slate-800/80 px-4 py-3 text-xs text-slate-900 dark:text-white focus:outline-none focus:border-slate-950 dark:focus:border-lime-400 rounded-none appearance-none"
                          />
                        </div>
                      </div>

                      {/* HORAIRES LOGIQUE + SKELETON */}
                      <div className="sm:col-span-7 space-y-1.5 text-left">
                        <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 flex items-center gap-1.5">
                          <Clock className="w-3 h-3 text-lime-500" /> Heures disponibles (Live DB)
                        </label>
                        
                        {!selectedDate ? (
                          <div className="text-xs text-slate-400 italic p-3 bg-stone-50 dark:bg-slate-950/40 border border-dashed border-slate-200 dark:border-slate-800">
                            Veuillez choisir une date pour charger les heures disponibles.
                          </div>
                        ) : slotsLoading ? (
                          // CRÉNEAUX SQUELETTE DE CHARGEMENT ANIMÉ
                          <div className="grid grid-cols-4 gap-2">
                            {[1, 2, 3, 4].map(n => (
                              <div key={n} className="h-8 bg-stone-100 dark:bg-slate-950 animate-pulse border border-slate-200/40 dark:border-slate-900" />
                            ))}
                          </div>
                        ) : (
                          // CRÉNEAUX RÉELS REÇUS
                          <div className="grid grid-cols-4 gap-1.5">
                            {availableSlots.map((slot, idx) => (
                              <button
                                key={idx}
                                type="button"
                                disabled={!slot.available}
                                onClick={() => setSelectedTime(slot.time)}
                                className={`py-2 text-[11px] font-mono font-bold border text-center transition-all ${
                                  selectedTime === slot.time
                                    ? 'bg-lime-400 text-slate-950 border-lime-400'
                                    : slot.available
                                      ? 'bg-stone-50 dark:bg-slate-950 hover:border-slate-400 dark:hover:border-slate-700 text-slate-800 dark:text-slate-200'
                                      : 'bg-stone-100 dark:bg-slate-900/50 text-slate-300 dark:text-slate-700 line-through cursor-not-allowed border-transparent'
                                }`}
                              >
                                {slot.time}
                              </button>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>

                    {/* ESTIMATEUR DE PRESTATION REAL-TIME */}
                    <div className="p-4 bg-stone-50 dark:bg-slate-950 border border-slate-200/60 dark:border-slate-800 flex justify-between items-center">
                      <div className="text-left">
                        <span className="text-[9px] font-mono text-slate-400 block uppercase tracking-wider">Durée totale bloquée</span>
                        <span className="text-xs font-bold text-slate-950 dark:text-white">{activeService.duration} min en cabine</span>
                      </div>
                      <div className="text-right">
                        <span className="text-[9px] font-mono text-slate-400 block uppercase tracking-wider">Total estimé</span>
                        <span className="text-base font-mono font-black text-lime-600 dark:text-lime-400">
                          {activeService.price.toLocaleString()} <span className="text-[10px] font-sans font-light text-slate-400">FCFA</span>
                        </span>
                      </div>
                    </div>

                  </div>

                  {/* ACTION SUBMIT */}
                  <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex flex-col sm:flex-row justify-between items-center gap-4">
                    <div className="flex items-center gap-2 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                      <ShieldCheck className="w-4 h-4 text-lime-500" /> Aucun prépaiement requis en ligne
                    </div>
                    <button
                      type="submit"
                      disabled={status === 'fetching_slots'}
                      className="w-full sm:w-auto px-6 py-3.5 bg-slate-950 dark:bg-lime-400 text-white dark:text-slate-950 text-xs font-black uppercase tracking-widest flex items-center justify-center gap-2 rounded-none hover:bg-lime-500 transition-all disabled:opacity-50"
                    >
                      {status === 'fetching_slots' ? (
                        <>
                          <Loader2 className="w-3.5 h-3.5 animate-spin" />
                          <span>Vérification des verrous horaires...</span>
                        </>
                      ) : (
                        <>
                          <span>Confirmer le rendez-vous</span>
                          <ArrowRight className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </div>

                </form>
              )}
            </AnimatePresence>

          </div>

        </div>

      <Footer/>
      </div>
    </section>
  </>
  );
}