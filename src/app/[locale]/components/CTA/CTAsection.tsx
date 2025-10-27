'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Phone, ArrowRight } from 'lucide-react';
import { Link } from '@/i18n/routing';
import { useTheme } from 'next-themes';

export default function CTASection({ t }: { t: any }) {
  const { theme } = useTheme();

  return (
    <section
      className={`relative py-24 overflow-hidden transition-colors duration-500 ${
        theme === 'dark'
          ? 'bg-gradient-to-br from-zinc-900 via-zinc-800 to-red-900 text-white'
          : 'bg-gradient-to-br from-red-600 via-orange-500 to-amber-400 text-white'
      }`}
    >
      {/* 🔥 Subtle Animated Fire Texture */}
      <div className="absolute inset-0 bg-[url('/image/one.gif')] bg-cover bg-center opacity-10 mix-blend-overlay pointer-events-none"></div>

      <div className="container mx-auto px-6 text-center relative z-10 max-w-3xl">
        {/* 🧠 Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight leading-tight"
        >
          {t('heading')}
        </motion.h2>

        {/* 💬 Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-lg md:text-xl opacity-90 mb-10 leading-relaxed text-balance"
        >
          {t('description')}
        </motion.p>

        {/* 🎯 Buttons */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Button
            size="lg"
            className="bg-white text-red-700 hover:bg-gray-100 font-semibold shadow-lg transition-transform hover:scale-105"
            asChild
          >
            <Link href="/contact" className="flex items-center space-x-2">
              <Phone className="h-5 w-5" />
              <span>{t('buttons.contact')}</span>
            </Link>
          </Button>

          <Button
            size="lg"
            variant="outline"
            className="border-white bg-transparent text-white hover:bg-white/10 hover:border-red-200 font-semibold transition-transform hover:scale-105"
            asChild
          >
            <Link href="/about" className="flex items-center space-x-2">
              <span>{t('buttons.about')}</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
          </Button>
        </motion.div>
      </div>

      {/* ✨ Overlay Glow */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
    </section>
  );
}
