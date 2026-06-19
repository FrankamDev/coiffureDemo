import { useState } from 'react';
import { motion } from "framer-motion";
import LightGallery from "lightgallery/react";
import type { LightGalleryProps } from "lightgallery/react";

import lgZoom from "lightgallery/plugins/zoom";
import lgThumbnail from "lightgallery/plugins/thumbnail";
import type { Variants } from "framer-motion";

import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";

import { Award, Star, ShoppingBag, ZoomIn } from "lucide-react";
import Navbar from "../../src/components/Navbar";
import Footer from "../../src/components/Footer";

export default function GalleryDisplay() {
  const [activeTab, setActiveTab] = useState<'realisations' | 'boutique'>('realisations');

  const textVariants: Variants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
    },
  };

  const imageVariants: Variants = {
    hidden: { opacity: 0, scale: 0.94 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] },
    },
  };

  const lightGalleryProps: LightGalleryProps = {
    speed: 500,
    plugins: [lgZoom, lgThumbnail],
    elementClassNames: "lg:col-span-7 grid grid-cols-12 gap-4 auto-rows-[130px] sm:auto-rows-[160px] lg:auto-rows-[175px]",
  };

  // ==================== DONNÉES ====================
  const realisations = [
    { src: "../../public/women/1.jpg", alt: "Tresses Fulani avec perles", span: "col-span-8 row-span-2" },
    {src: "../../public/women/1.jpg", alt: "Box Braids longues", span: "col-span-4 row-span-3" },
    { src: "../../public/women/1.jpg", alt: "Vanilles naturelles", span: "col-span-4 row-span-1" },
    { src: "../../public/women/1.jpg", alt: "Tresses Maïssa", span: "col-span-4 row-span-2" },
    { src: "../../public/women/1.jpg", alt: "Détail tresses collées", span: "col-span-4 row-span-1" },
    { src: "../../public/women/1.jpg", alt: "Style bohème chic", span: "col-span-6 row-span-2" },
    { src: "../../public/women/1.jpg", alt: "Braids africaines", span: "col-span-6 row-span-1" },
    { src: "../../public/women/1.jpg", alt: "Tresses Fulani avec perles", span: "col-span-8 row-span-2" },
    {src: "../../public/women/1.jpg", alt: "Box Braids longues", span: "col-span-4 row-span-3" },
    { src: "../../public/women/1.jpg", alt: "Vanilles naturelles", span: "col-span-4 row-span-1" },
    { src: "../../public/women/1.jpg", alt: "Tresses Maïssa", span: "col-span-4 row-span-2" },
    { src: "../../public/women/1.jpg", alt: "Détail tresses collées", span: "col-span-4 row-span-1" },
    { src: "../../public/women/1.jpg", alt: "Style bohème chic", span: "col-span-6 row-span-2" },
    { src: "../../public/women/1.jpg", alt: "Braids africaines", span: "col-span-6 row-span-1" },
    { src: "../../public/women/1.jpg", alt: "Tresses Fulani avec perles", span: "col-span-8 row-span-2" },
    {src: "../../public/women/1.jpg", alt: "Box Braids longues", span: "col-span-4 row-span-3" },
    { src: "../../public/women/1.jpg", alt: "Vanilles naturelles", span: "col-span-4 row-span-1" },
    { src: "../../public/women/1.jpg", alt: "Tresses Maïssa", span: "col-span-4 row-span-2" },
    { src: "../../public/women/1.jpg", alt: "Détail tresses collées", span: "col-span-4 row-span-1" },
    { src: "../../public/women/1.jpg", alt: "Style bohème chic", span: "col-span-6 row-span-2" },
    { src: "../../public/women/1.jpg", alt: "Braids africaines", span: "col-span-6 row-span-1" },
  ];

  const boutique = [
    { src: "../../public/perruques/p00.jpg", alt: "Perruque Lace Front 613", span: "col-span-8 row-span-2", price: "85 000 FCFA" },
    { src: "../../public/perruques/p1.jpg", alt: "Perruque Closure 4x4", span: "col-span-4 row-span-3", price: "65 000 FCFA" },
    { src: "../../public/perruques/p2.jpg", alt: "Perruque HD Lace 13x6", span: "col-span-4 row-span-1", price: "120 000 FCFA" },
    { src: "../../public/perruques/p3.jpg", alt: "Perruque Bob 12 pouces", span: "col-span-4 row-span-2", price: "55 000 FCFA" },
    { src: "../../public/perruques/p4.jpg", alt: "Extensions Clip-in", span: "col-span-4 row-span-1", price: "45 000 FCFA" },
    { src: "../../public/perruques/p5.jpg", alt: "Prothèse Capillaire", span: "col-span-6 row-span-2", price: "150 000 FCFA" },
    { src: "../../public/perruques/p6.jpg", alt: "Frontal 13x4", span: "col-span-6 row-span-1", price: "90 000 FCFA" },
    { src: "../../public/perruques/p10.jpg", alt: "Perruque Lace Front 613", span: "col-span-8 row-span-2", price: "85 000 FCFA" },
    { src: "../../public/perruques/p1.jpg", alt: "Perruque Closure 4x4", span: "col-span-4 row-span-3", price: "65 000 FCFA" },
    { src: "../../public/perruques/p2.jpg", alt: "Perruque HD Lace 13x6", span: "col-span-4 row-span-1", price: "120 000 FCFA" },
    { src: "../../public/perruques/p3.jpg", alt: "Perruque Bob 12 pouces", span: "col-span-4 row-span-2", price: "55 000 FCFA" },
    { src: "../../public/perruques/p4.jpg", alt: "Extensions Clip-in", span: "col-span-4 row-span-1", price: "45 000 FCFA" },
    { src: "../../public/perruques/p5.jpg", alt: "Prothèse Capillaire", span: "col-span-6 row-span-2", price: "150 000 FCFA" },
    { src: "../../public/perruques/p6.jpg", alt: "Frontal 13x4", span: "col-span-6 row-span-1", price: "90 000 FCFA" },
  ];

  const currentImages = activeTab === 'realisations' ? realisations : boutique;

  return (
    <section className="relative py-20 md:py-28 bg-stone-50 dark:bg-stone-950 transition-colors duration-500 overflow-hidden">
      <Navbar />

      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] max-w-[800px] bg-amber-100/10 dark:bg-amber-950/5 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mt-6 mx-auto px-4 sm:px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* ===================== GALLERY ===================== */}
          <div className="lg:col-span-7">
            <div className="mb-8 flex flex-col items-center lg:items-start">
              <span className="text-xs font-semibold tracking-[0.25em] uppercase text-amber-600 dark:text-amber-400">Galerie & Boutique</span>
              <h2 className="text-4xl md:text-5xl font-serif font-light tracking-tight text-stone-950 dark:text-stone-50 mt-2">
                Nos Créations
              </h2>

              {/* Tabs */}
              <div className="inline-flex bg-stone-100 dark:bg-stone-900 rounded-full p-1 mt-6">
                <button
                  onClick={() => setActiveTab('realisations')}
                  className={`px-8 py-3 rounded-full text-sm font-semibold transition-all ${
                    activeTab === 'realisations'
                      ? 'bg-stone-950 dark:bg-amber-600 text-white'
                      : 'text-stone-600 dark:text-stone-400 hover:bg-stone-200 dark:hover:bg-stone-800'
                  }`}
                >
                  Réalisations
                </button>
                <button
                  onClick={() => setActiveTab('boutique')}
                  className={`px-8 py-3 rounded-full text-sm font-semibold transition-all ${
                    activeTab === 'boutique'
                      ? 'bg-stone-950 dark:bg-amber-600 text-white'
                      : 'text-stone-600 dark:text-stone-400 hover:bg-stone-200 dark:hover:bg-stone-800'
                  }`}
                >
                  Perruques & Boutique
                </button>
              </div>
            </div>

            <LightGallery {...lightGalleryProps}>
              {currentImages.map((image, index) => (
                <motion.a
                  key={index}
                  href={image.src}
                  variants={imageVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className={`relative overflow-hidden border border-stone-200/60 dark:border-stone-800 group cursor-pointer ${image.span}`}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full rounded-2xl object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Zoom Icon */}
                  <div className="absolute top-4 right-4 bg-white/90 dark:bg-stone-900/90 backdrop-blur-md p-2.5 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 scale-75 group-hover:scale-100">
                    <ZoomIn className="w-5 h-5 text-stone-700 dark:text-amber-400" />
                  </div>

                  {/* Légende */}
                  <div className="absolute bottom-4 left-4 bg-white/90 dark:bg-stone-900/90 backdrop-blur-sm px-3 py-1 text-[10px] tracking-widest uppercase font-semibold text-stone-950 dark:text-amber-400">
                    {image.alt}
                  </div>

                  {/* Prix pour la boutique */}
                  {activeTab === 'boutique' && image.price && (
                    <div className="absolute top-4 left-4 bg-amber-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                      {image.price}
                    </div>
                  )}
                </motion.a>
              ))}
            </LightGallery>
          </div>

          {/* ===================== CONTENU TEXTE ===================== */}
          <motion.div
            className="lg:col-span-5 flex flex-col justify-center text-center lg:text-left items-center lg:items-start pt-8 lg:pt-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
          >
            <motion.span
              variants={textVariants}
              className="text-xs font-semibold tracking-[0.25em] uppercase text-amber-600 dark:text-amber-400 block mb-3"
            >
              {activeTab === 'realisations' ? 'Notre Savoir-Faire' : 'Boutique Premium'}
            </motion.span>

            <motion.h2
              variants={textVariants}
              className="text-3xl sm:text-4xl font-serif font-light text-stone-950 dark:text-stone-50 tracking-tight leading-tight"
            >
              {activeTab === 'realisations' 
                ? "Des créations uniques" 
                : "Perruques & Accessoires"}
            </motion.h2>

            <motion.p
              variants={textVariants}
              className="mt-6 text-sm sm:text-base text-stone-600 dark:text-stone-400 font-light max-w-xl leading-relaxed"
            >
              {activeTab === 'realisations' 
                ? "Chaque réalisation est pensée pour sublimer votre beauté tout en protégeant vos cheveux naturels."
                : "Découvrez notre sélection de perruques lace, closures, frontals et extensions de haute qualité."}
            </motion.p>

            <motion.div
              variants={textVariants}
              className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4 w-full text-left"
            >
              {activeTab === 'realisations' ? (
                <>
                  <div className="p-5 bg-white dark:bg-stone-900/30 border border-stone-100 dark:border-stone-900/60 flex gap-4 items-start">
                    <Award className="w-5 h-5 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-wide text-stone-900 dark:text-stone-100">Technique Experte</h4>
                      <p className="text-xs text-stone-500 dark:text-stone-400 mt-1">Tressage sans tension excessive</p>
                    </div>
                  </div>

                  <div className="p-5 bg-white dark:bg-stone-900/30 border border-stone-100 dark:border-stone-900/60 flex gap-4 items-start">
                    <Star className="w-5 h-5 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-wide text-stone-900 dark:text-stone-100">Finition Parfaite</h4>
                      <p className="text-xs text-stone-500 dark:text-stone-400 mt-1">Détails soignés et durables</p>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div className="p-5 bg-white dark:bg-stone-900/30 border border-stone-100 dark:border-stone-900/60 flex gap-4 items-start">
                    <ShoppingBag className="w-5 h-5 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-wide text-stone-900 dark:text-stone-100">Qualité Premium</h4>
                      <p className="text-xs text-stone-500 dark:text-stone-400 mt-1">Cheveux 100% vierges</p>
                    </div>
                  </div>

                  <div className="p-5 bg-white dark:bg-stone-900/30 border border-stone-100 dark:border-stone-900/60 flex gap-4 items-start">
                    <Star className="w-5 h-5 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-wide text-stone-900 dark:text-stone-100">Livraison Rapide</h4>
                      <p className="text-xs text-stone-500 dark:text-stone-400 mt-1">Disponible en magasin et en ligne</p>
                    </div>
                  </div>
                </>
              )}
            </motion.div>
          </motion.div>
        </div>
      </div>

      <Footer />
    </section>
  );
}