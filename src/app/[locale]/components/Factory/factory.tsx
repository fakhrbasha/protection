'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Activity, ShieldCheck, Hospital } from 'lucide-react';
import { Link } from '@/i18n/routing';
import { Button } from '@/components/ui/button';
import { useTranslations } from 'next-intl';

const FactoryAndMall = () => {
  const t = useTranslations('Factory');

  return (
    <section className="py-20 w-full bg-background">
      <div className="container mx-auto px-4">
        <div className="flex justify-center mb-4">
          <span className="px-4 py-2 text-sm font-semibold bg-red-600 text-background rounded-full">
            {t('section.tag')}
          </span>
        </div>

        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t('section.title')}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t('section.description')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* ===== El Abd Factory ===== */}
          <motion.div
            className="bg-card rounded-2xl overflow-hidden shadow-lg border border-border"
            whileHover={{ y: -5 }}
            transition={{ type: 'spring', stiffness: 400, damping: 10 }}
          >
            <div className="relative w-full">
              <img
                src="/image/Project/a1.jpg"
                alt="Masna3 El Abd"
                className="w-full h-[400px]"
              />
              <span className="absolute top-10 left-10 px-3 py-1 text-xs font-semibold bg-blue-500 text-white rounded-full">
                {t('elabd.label')}
              </span>
            </div>

            <div className="p-8 md:p-10">
              <div className="flex items-center mb-4">
                <h3 className="text-2xl font-bold">{t('elabd.title')}</h3>
                <p className="text-sm text-muted-foreground ml-3">
                  {t('elabd.location')}
                </p>
              </div>
              <p className="text-muted-foreground mb-6">
                {t('elabd.description')}
              </p>

              <div className="grid grid-cols-2 gap-3 mb-6">
                <div className="flex items-center p-3 bg-blue-500/5 rounded-lg">
                  <Activity className="w-4 h-4 mr-2 text-blue-600" />
                  <span className="text-sm">
                    {t('elabd.features.monitoring')}
                  </span>
                </div>
                <div className="flex items-center p-3 bg-blue-500/5 rounded-lg">
                  <Hospital className="w-4 h-4 mr-2 text-blue-600" />
                  <span className="text-sm">
                    {t('elabd.features.coverage')}
                  </span>
                </div>
                <div className="flex items-center p-3 bg-blue-500/5 rounded-lg">
                  <ShieldCheck className="w-4 h-4 mr-2 text-blue-600" />
                  <span className="text-sm">
                    {t('elabd.features.compliance')}
                  </span>
                </div>
                <div className="flex items-center p-3 bg-blue-500/5 rounded-lg">
                  <Heart className="w-4 h-4 mr-2 text-blue-600" />
                  <span className="text-sm">{t('elabd.features.safety')}</span>
                </div>
              </div>

              <Link href={'/projects/abd'} className="w-full">
                <Button className="px-6 py-3 w-full bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-900 transition-colors">
                  {t('elabd.button')}
                </Button>
              </Link>
            </div>
          </motion.div>

          {/* ===== Ritzy Mall ===== */}
          <motion.div
            className="bg-card rounded-2xl overflow-hidden shadow-lg border border-border"
            whileHover={{ y: -5 }}
            transition={{ type: 'spring', stiffness: 400, damping: 10 }}
          >
            <div className="relative w-full">
              <img
                src="/image/Project/R1.jpg"
                alt="Ritzy Mall"
                className="w-full h-[400px]"
              />
              <span className="absolute top-10 left-10 px-3 py-1 text-xs font-semibold bg-purple-500 text-white rounded-full">
                {t('ritzy.label')}
              </span>
            </div>

            <div className="p-8 md:p-10">
              <div className="flex items-center mb-4">
                <h3 className="text-2xl font-bold">{t('ritzy.title')}</h3>
                <p className="text-sm text-muted-foreground ml-3">
                  {t('ritzy.location')}
                </p>
              </div>
              <p className="text-muted-foreground mb-6">
                {t('ritzy.description')}
              </p>

              <div className="grid grid-cols-2 gap-3 mb-6">
                <div className="flex items-center p-3 bg-purple-500/5 rounded-lg">
                  <Activity className="w-4 h-4 mr-2 text-purple-600" />
                  <span className="text-sm">
                    {t('ritzy.features.monitoring')}
                  </span>
                </div>
                <div className="flex items-center p-3 bg-purple-500/5 rounded-lg">
                  <Hospital className="w-4 h-4 mr-2 text-purple-600" />
                  <span className="text-sm">
                    {t('ritzy.features.coverage')}
                  </span>
                </div>
                <div className="flex items-center p-3 bg-purple-500/5 rounded-lg">
                  <ShieldCheck className="w-4 h-4 mr-2 text-purple-600" />
                  <span className="text-sm">
                    {t('ritzy.features.compliance')}
                  </span>
                </div>
                <div className="flex items-center p-3 bg-purple-500/5 rounded-lg">
                  <Heart className="w-4 h-4 mr-2 text-purple-600" />
                  <span className="text-sm">{t('ritzy.features.safety')}</span>
                </div>
              </div>

              <Link href={'/projects/ritzy'} className="w-full">
                <Button className="px-6 py-3 w-full bg-purple-500 text-white font-semibold rounded-lg hover:bg-purple-900 transition-colors  mt-6">
                  {t('ritzy.button')}
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FactoryAndMall;
