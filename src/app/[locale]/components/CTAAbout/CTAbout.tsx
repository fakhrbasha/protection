import { Button } from '@/components/ui/button';
import { Link } from '@/i18n/routing';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useTranslations } from 'next-intl';
import React from 'react';

export default function CTAbout() {
  const t = useTranslations('About');

  return (
    <section className="relative py-24 overflow-hidden">
      {/* 🎨 Animated Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/90 to-primary-foreground/20 animate-gradient-slow" />

      {/* 🟪 Overlay for contrast */}
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
          <p className="text-lg md:text-xl opacity-90 mb-10 max-w-2xl mx-auto leading-relaxed text-pretty">
            {t('cta.description')}
          </p>

          {/* 🎯 Buttons */}
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
  );
}
