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
  '/image/Project/Gallery/17.jpg',
  '/image/Project/Gallery/18.jpg',
  '/image/Project/Gallery/19.jpg',
  '/image/Project/Gallery/21.jpg',
  '/image/Project/Gallery/22.jpg',
  '/image/Project/Gallery/23.jpg',
  '/image/Project/Gallery/24.jpg',
  '/image/Project/Gallery/25.jpg',
  '/image/Project/Gallery/26.jpg',
  '/image/Project/Gallery/27.jpg',
  '/image/Project/Gallery/28.jpg',
  '/image/Project/Gallery/29.jpg',
  '/image/Project/Gallery/30.jpg',
  '/image/Project/Gallery/31.jpg',
  '/image/Project/Gallery/32.jpg',
  '/image/Project/Gallery/33.jpg',
  '/image/Project/Gallery/34.jpg',
  '/image/Project/Gallery/35.jpg',
  '/image/Project/Gallery/36.jpg',
  '/image/Project/Gallery/37.jpg',
  '/image/Project/Gallery/38.jpg',
  '/image/Project/Gallery/39.jpg',
  '/image/Project/Gallery/40.jpg',
  '/image/Project/Gallery/41.jpg',
  '/image/Project/Gallery/42.jpg',
  '/image/Project/Gallery/43.jpg',
  '/image/Project/Gallery/44.jpg',
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
  const tt = useTranslations('About');
  const t = useTranslations('Gallery');
  return (
    <>
      <section className="w-full bg-background min-h-screen overflow-hidden">
        {/* Hero Section */}
        <div className="relative h-[60vh] w-full mb-16">
          <motion.div
            initial={{ scale: 1.1, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.2 }}
            className="absolute inset-0"
          >
            <Image
              src="/image/careHero.png"
              alt="El Abd Factory Hero"
              fill
              className="object-cover brightness-75"
              priority
            />
          </motion.div>

          <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4">
            <motion.h1
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-6xl font-bold mb-4"
            >
              <span className="text-red-500">{t('hero.highlight')}</span>{' '}
              {t('hero.title')}
            </motion.h1>
            <motion.p
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="max-w-2xl text-lg md:text-xl text-gray-200"
            >
              {t('hero.subtitle')}
            </motion.p>
          </div>
        </div>

        <div className="container mx-auto px-4">
          {/* Gallery Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              {t('gallery.heading')}
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {t('gallery.description')}
            </p>
          </div>

          {/* Gallery Grid */}
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

          {/* Videos Section */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              {t('videos.heading')}
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {t('videos.description')}
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

        {/* Lightbox Modal */}
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
              {tt('cta.heading')}
            </h2>
            <p className="text-lg md:text-xl opacity-90 mb-10 max-w-2xl mx-auto leading-relaxed">
              {tt('cta.description')}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                size="lg"
                variant="secondary"
                className="px-8 py-6 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                asChild
              >
                <Link href="/services" className="flex items-center space-x-2">
                  <span>{tt('cta.buttons.services')}</span>
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="px-8 py-6 text-lg border-2 font-semibold border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 bg-transparent"
                asChild
              >
                <Link href="/contact">{tt('cta.buttons.contact')}</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
