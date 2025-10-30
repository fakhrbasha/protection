'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import FactoryAndMall from '../../components/Factory/factory';
import { Button } from '@/components/ui/button';
import { Link } from '@/i18n/routing';
import { ArrowRight } from 'lucide-react';
import { useTranslations } from 'next-intl';

export default function ProjectsPage() {
  const t = useTranslations('About');
  const tt = useTranslations('Projects');

  return (
    <div className="bg-white dark:bg-[#0a0a0a] text-black dark:text-white min-h-screen transition-colors duration-300">
      {/* ===== HERO SECTION ===== */}
      {/* ===== HERO SECTION ===== */}
      <div className="relative w-full h-[70vh] overflow-hidden">
        <motion.div
          initial={{ scale: 1.2, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
          className="absolute inset-0"
        >
          <Image
            src="/image/Hero1.png"
            alt="Projects Hero"
            fill
            className="object-cover brightness-[0.4]"
            priority
          />
        </motion.div>

        <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-6">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-6xl md:text-7xl font-extrabold tracking-tight mb-4 text-white"
          >
            {tt('hero.title')}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 1 }}
            className="text-lg md:text-2xl max-w-3xl text-gray-200"
          >
            {tt('hero.description')}
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="absolute bottom-6 left-1/2 -translate-x-1/2 text-sm text-gray-300"
        >
          {tt('hero.scroll')}
        </motion.div>
      </div>

      {/* ===== PROJECTS SECTION ===== */}
      <FactoryAndMall />

      {/* ===== ADDITIONAL SECTIONS ===== */}
      <div className="container mx-auto">
        <div className="p-12 rounded-2xl shadow-lg text-center flex flex-col items-center gap-6 bg-gray-50 dark:bg-black transition-colors duration-300">
          <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">
            {tt('moreProjects.title')}
          </h2>
          <p className="text-gray-700 dark:text-gray-300 max-w-2xl mb-6">
            {tt('moreProjects.description')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/gallery">
              <Button className="px-6 py-3 bg-red-500 text-white font-semibold rounded-lg hover:bg-red-600 dark:hover:bg-red-400 transition-colors">
                {tt('moreProjects.gallery')}
              </Button>
            </Link>
            <Link href="/clients">
              <Button className="px-6 py-3 bg-gray-200 text-black font-semibold rounded-lg hover:bg-gray-300 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600 transition-colors">
                {tt('moreProjects.clients')}
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* ===== CTA SECTION ===== */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-red-600 via-red-500 to-red-400 dark:from-red-800 dark:via-red-700 dark:to-red-500 animate-gradient-slow" />
        <div className="absolute inset-0 bg-black/30 mix-blend-multiply" />

        <div className="relative container mx-auto px-4 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight drop-shadow-lg">
              {t('cta.heading')}
            </h2>
            <p className="text-lg md:text-xl opacity-90 mb-10 max-w-2xl mx-auto leading-relaxed text-pretty">
              {t('cta.description')}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                size="lg"
                variant="secondary"
                className="px-8 py-6 text-lg font-semibold shadow-lg hover:shadow-xl text-red-500 transition-all duration-300 transform hover:-translate-y-1  hover:bg-gray-100 dark:bg-gray-100 dark:text-red-700"
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
                className="px-8 py-6 text-lg border-2 font-semibold border-white text-white hover:bg-white hover:text-red-700 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 bg-transparent"
                asChild
              >
                <Link href="/contact">{t('cta.buttons.contact')}</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
