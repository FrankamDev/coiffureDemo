
import { motion } from "framer-motion";
import LightGallery from "lightgallery/react";
import type { LightGalleryProps } from "lightgallery/react";

import lgZoom from "lightgallery/plugins/zoom";
import lgThumbnail from "lightgallery/plugins/thumbnail";
import type { Variants } from "framer-motion";

import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";

import { Award, CheckCircle2, Heart, ShieldAlert, ZoomIn } from "lucide-react";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function GalleryExpertise() {
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

  // Liste des photos (tu peux en ajouter facilement)
  const galleryImages = [
    { src: "/men/1.jpg", alt: "Précision du tressage", span: "col-span-8 row-span-2" },
    { src: "/men/2.jpg", alt: "Box Braids", span: "col-span-4 row-span-3" },
    { src: "/men/3.jpg", alt: "Finitions soignées", span: "col-span-4 row-span-1" },
    { src: "/men/4.jpg", alt: "Tresses longues protectrices", span: "col-span-4 row-span-2" },
    { src: "/men/5.jpg", alt: "Détail racine", span: "col-span-4 row-span-1" },
    { src: "/men/6.jpg", alt: "Style bohème chic", span: "col-span-6 row-span-2" },
    { src: "/men/7.jpg", alt: "Braids africaines", span: "col-span-6 row-span-1" },
    { src: "/men/8.jpg", alt: "Finition miroir", span: "col-span-4 row-span-2" },
    { src: "/men/9.jpg", alt: "Tresses collées", span: "col-span-4 row-span-1" },
    { src: "/men/10.jpg", alt: "Look moderne", span: "col-span-4 row-span-2" },
    { src: "/men/11.jpg", alt: "Tresses jumbo", span: "col-span-6 row-span-2" },
    { src: "/men/12.jpg", alt: "Texture détaillée", span: "col-span-6 row-span-1" },
    { src: "/men/13.jpg", alt: "Style élégant", span: "col-span-4 row-span-2" },
    { src: "/men/14.jpg", alt: "Avant / Après", span: "col-span-4 row-span-1" },
    { src: "/men/15.jpg", alt: "Tresses courtes", span: "col-span-4 row-span-2" },
    { src: "/men/16.jpg", alt: "Couronne de tresses", span: "col-span-8 row-span-2" },
  ];

  return (
    <section className="relative py-20 md:py-28 bg-stone-50 dark:bg-stone-950 transition-colors duration-500 overflow-hidden">
      <Navbar />

      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] max-w-[800px] bg-amber-100/10 dark:bg-amber-950/5 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* ===================== GALLERY ===================== */}
          <div className="lg:col-span-7">
            <div className="mb-8 text-center lg:text-left">
              <span className="text-xs font-semibold tracking-[0.25em] uppercase text-amber-600 dark:text-amber-400">Galerie Signature</span>
              <h2 className="text-4xl md:text-5xl font-serif font-light tracking-tight text-stone-950 dark:text-stone-50 mt-2">
                Nos Réalisations
              </h2>
              <p className="mt-3 text-sm text-stone-600 dark:text-stone-400">
                Cliquez sur les photos pour les agrandir
              </p>
            </div>

            <LightGallery {...lightGalleryProps}>
              {galleryImages.map((image, index) => (
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
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  {/* Overlay sombre au hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Indicateur Zoom */}
                  <div className="absolute top-4 right-4 bg-white/90 dark:bg-stone-900/90 backdrop-blur-md p-2.5 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 scale-75 group-hover:scale-100">
                    <ZoomIn className="w-5 h-5 text-stone-700 dark:text-amber-400" />
                  </div>

                  {/* Légende */}
                  <div className="absolute bottom-4 left-4 bg-white/90 dark:bg-stone-900/90 backdrop-blur-sm px-3 py-1 text-[10px] tracking-widest uppercase font-semibold text-stone-950 dark:text-amber-400">
                    {image.alt}
                  </div>
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
              Notre Philosophie
            </motion.span>

            <motion.h2
              variants={textVariants}
              className="text-3xl sm:text-4xl font-serif font-light text-stone-950 dark:text-stone-50 tracking-tight leading-tight"
            >
              Le tressage sain,
              <br />
              <span className="font-bold uppercase tracking-wide bg-gradient-to-r from-amber-700 to-stone-950 dark:from-amber-400 dark:to-stone-200 bg-clip-text text-transparent">
                Sans aucun compromis
              </span>
            </motion.h2>

            <motion.p
              variants={textVariants}
              className="mt-6 text-sm sm:text-base text-stone-600 dark:text-stone-400 font-light max-w-xl leading-relaxed"
            >
              Chez NexaTress, nous croyons que la beauté ne doit jamais faire souffrir. 
              Notre méthode signature est spécialement développée pour éliminer les tensions excessives à la racine et préserver la santé de vos cheveux.
            </motion.p>

            <motion.div
              variants={textVariants}
              className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4 w-full text-left"
            >
              <div className="p-5 bg-white dark:bg-stone-900/30 border border-stone-100 dark:border-stone-900/60 flex gap-4 items-start">
                <Award className="w-5 h-5 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wide text-stone-900 dark:text-stone-100">Matériaux Premium</h4>
                  <p className="text-xs text-stone-500 dark:text-stone-400 mt-1">Mèches ultra-légères et sélectionnées avec soin.</p>
                </div>
              </div>

              <div className="p-5 bg-white dark:bg-stone-900/30 border border-stone-100 dark:border-stone-900/60 flex gap-4 items-start">
                <Heart className="w-5 h-5 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wide text-stone-900 dark:text-stone-100">Respect du cuir chevelu</h4>
                  <p className="text-xs text-stone-500 dark:text-stone-400 mt-1">Technique conçue pour limiter les tensions excessives.</p>
                </div>
              </div>

              <div className="p-5 bg-white dark:bg-stone-900/30 border border-stone-100 dark:border-stone-900/60 flex gap-4 items-start">
                <CheckCircle2 className="w-5 h-5 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wide text-stone-900 dark:text-stone-100">Conseils personnalisés</h4>
                  <p className="text-xs text-stone-500 dark:text-stone-400 mt-1">Routine d'entretien adaptée à votre type de cheveux.</p>
                </div>
              </div>

              <div className="p-5 bg-white dark:bg-stone-900/30 border border-stone-100 dark:border-stone-900/60 flex gap-4 items-start">
                <ShieldAlert className="w-5 h-5 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wide text-stone-900 dark:text-stone-100">Garantie qualité</h4>
                  <p className="text-xs text-stone-500 dark:text-stone-400 mt-1">Un résultat durable et une finition irréprochable.</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <Footer />
    </section>
  );
}