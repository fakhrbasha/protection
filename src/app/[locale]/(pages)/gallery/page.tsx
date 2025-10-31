'use client';
import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Link } from '@/i18n/routing';
import { ArrowRight } from 'lucide-react';
import { useTranslations } from 'next-intl';

const images = [
  '/image/Project/Gallery/1.jpg',
  '/image/Project/Gallery/2.jpg',
  '/image/Project/Gallery/3.jpg',
  '/image/Project/Gallery/4.jpg',
  '/image/Project/Gallery/5.jpg',
  '/image/Project/Gallery/6.jpg',
  '/image/Project/Gallery/7.jpg',
  '/image/Project/Gallery/8.jpg',
  '/image/Project/Gallery/9.jpg',
  '/image/Project/Gallery/10.jpg',
  '/image/Project/Gallery/11.jpg',
  '/image/Project/Gallery/12.jpg',
  '/image/Project/Gallery/13.jpg',
  '/image/Project/Gallery/14.jpg',
  '/image/Project/Gallery/15.jpg',
  '/image/Project/Gallery/16.jpg',
];

// 🎥 Video data
const videos = [
  { src: '/video/hero.mp4', title: 'Protection For Safety' },
  { src: '/video/2.mp4', title: 'Protection For Safety' },
  { src: '/video/3.mp4', title: 'Protection For Safety' },
  { src: '/video/4.mp4', title: 'Protection For Safety' },
];

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const t = useTranslations('About');

  return (
    <>
      <section className="w-full bg-background min-h-screen overflow-hidden">
        {/* Hero Section */}
        <div className="relative h-[60vh] w-full mb-16">
          <Image
            src="/image/careHero.png"
            alt="El Abd Factory Hero"
            fill
            className="object-cover brightness-75"
            priority
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4">
            <motion.h1
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-6xl font-bold mb-4"
            >
              <span className="text-red-500">Protection</span> Gallery
            </motion.h1>
            <motion.p
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="max-w-2xl text-lg md:text-xl text-gray-200"
            >
              Discover our integrated fire protection systems and safety
              installations Sadat City.
            </motion.p>
          </div>
        </div>

        <div className="container mx-auto px-4">
          {/* Gallery Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Project Gallery
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A showcase of our fire safety installations, advanced
              technologies, and project implementations across the facility.
            </p>
          </div>

          {/* 🖼️ Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-20">
            {images.map((src, idx) => (
              <motion.div
                key={idx}
                className="rounded-xl overflow-hidden shadow-lg border border-border cursor-pointer"
                whileHover={{ scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 300 }}
                onClick={() => setSelectedImage(src)}
              >
                <Image
                  src={src}
                  alt={`Gallery image ${idx + 1}`}
                  width={500}
                  height={400}
                  className="w-full h-[300px] object-cover"
                />
              </motion.div>
            ))}
          </div>

          {/* 🎥 Videos Section */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Project Videos
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Explore the project in motion — our fire protection systems,
              testing phases, and installation procedures.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-8 mb-24">
            {videos.map((video, idx) => (
              <motion.div
                key={idx}
                className="overflow-hidden rounded-2xl shadow-lg bg-black"
                whileHover={{ scale: 1.03 }}
                transition={{ type: 'spring', stiffness: 250 }}
              >
                {video.src.includes('youtube') ? (
                  <iframe
                    src={video.src}
                    title={video.title}
                    className="w-full h-[280px] rounded-2xl"
                    allowFullScreen
                  />
                ) : (
                  <video
                    src={video.src}
                    controls
                    className="w-full h-[350px] object-cover rounded-2xl"
                  />
                )}
                <div className="p-4 text-left bg-white dark:bg-black">
                  <h3 className="text-lg font-semibold">{video.title}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* 🖼️ Lightbox Modal */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedImage(null)}
            >
              <motion.img
                src={selectedImage}
                alt="Selected"
                className="max-h-[90vh] max-w-[90vw] rounded-lg shadow-2xl"
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.8 }}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/90 to-primary-foreground/20 animate-gradient-slow" />
        <div className="absolute inset-0 bg-black/20 mix-blend-multiply" />
        <div className="relative container mx-auto px-4 text-center text-primary-foreground">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight drop-shadow-lg">
              {t('cta.heading')}
            </h2>
            <p className="text-lg md:text-xl opacity-90 mb-10 max-w-2xl mx-auto leading-relaxed">
              {t('cta.description')}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                size="lg"
                variant="secondary"
                className="px-8 py-6 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                asChild
              >
                <Link href="/services" className="flex items-center space-x-2">
                  <span>{t('cta.buttons.services')}</span>
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="px-8 py-6 text-lg border-2 font-semibold border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 bg-transparent"
                asChild
              >
                <Link href="/contact">{t('cta.buttons.contact')}</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
