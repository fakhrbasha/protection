'use client';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  AlertTriangle,
  Bell,
  Shield,
  CheckCircle,
  Zap,
  Radio,
  ArrowRight,
} from 'lucide-react';
import Image from 'next/image';
import { Link } from '@/i18n/routing';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

export default function FireAlarmsSystemPage() {
  const t = useTranslations('fireAlarm');

  const systems = t.raw('systems').map((s: any, i: number) => ({
    ...s,
    image: [
      `/image/fire-alarm/1.webp`,
      `/image/fire-alarm/2.webp`,
      `/image/fire-alarm/3.webp`,
    ][i],
  }));

  const detectionTypes = t.raw('detectionTypes');
  const systemFeatures = t.raw('systemFeatures');
  const installationSteps = t.raw('installationSteps');
  const installationDescriptions = t.raw('installationDescriptions');

  return (
    <div className="min-h-screen bg-background">
      {/* 🧯 Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center text-center">
        <Image
          src="/image/fire-alarm/types-of-fire-alarm-systems.webp"
          alt="Fire Alarm System"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/30" />
        <div className="relative z-10 text-white px-6 max-w-3xl">
          <div className="flex items-center justify-center mb-4">
            <Bell className="h-12 w-12 text-red-500 mr-3" />
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              {t('heroTitle')}
            </h1>
          </div>
          <p className="text-lg md:text-xl text-gray-200 mb-8">
            {t('heroSubtitle')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="text-lg px-8 bg-red-600 hover:bg-red-700"
            >
              <Link href="/contact">{t('getQuote')}</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="text-lg px-8 bg-transparent border-white text-white hover:bg-white hover:text-black"
            >
              <Link href="/services/regular-maintenance">
                {t('maintenance')}
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* 🔥 Alarm System Types */}
      <section className="py-20 bg-muted/20">
        <div className="containerr mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              {t('typesTitle')}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t('typesSubtitle')}
            </p>
          </div>

          <div className="space-y-12">
            {systems.map((system: any, index: number) => (
              <Card
                key={index}
                className="overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                <div
                  className={`grid lg:grid-cols-2 gap-0 ${
                    index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                  }`}
                >
                  <div
                    className={`relative h-64 lg:h-auto ${
                      index % 2 === 1 ? 'lg:col-start-2' : ''
                    }`}
                  >
                    <Image
                      src={system.image}
                      alt={system.title}
                      fill
                      onError={(e) =>
                        (e.currentTarget.src =
                          '/image/fire-alarm/placeholder.webp')
                      }
                      className="object-cover"
                    />
                  </div>
                  <div className="p-8 lg:p-12 flex flex-col justify-center">
                    <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
                      {system.title}
                    </h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {system.desc}
                    </p>

                    <div className="mb-6">
                      <h4 className="font-semibold text-foreground mb-3">
                        {t('keyFeatures')}:
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {system.features.map((feature: string, i: number) => (
                          <div
                            key={i}
                            className="flex items-center space-x-2 text-sm"
                          >
                            <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                            <span className="text-muted-foreground">
                              {feature}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="mb-6">
                      <h4 className="font-semibold text-foreground mb-3">
                        {t('bestFor')}:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {system.apps.map((app: string, i: number) => (
                          <Badge key={i} variant="outline" className="text-xs">
                            {app}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 🔍 Detection Technologies */}
      <section className="py-20 bg-muted/30">
        <div className="containerr mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              {t('detectionTitle')}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t('detectionSubtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {detectionTypes.map((type: any, index: number) => (
              <Card
                key={index}
                className="text-center group hover:shadow-lg transition-all duration-300 border-2 hover:border-red-400/40"
              >
                <CardHeader>
                  <div className="mx-auto mb-4 p-3 bg-red-100 rounded-full text-red-600 group-hover:bg-red-600 group-hover:text-white transition-colors">
                    {[<Radio />, <Zap />, <AlertTriangle />, <Shield />][index]}
                  </div>
                  <CardTitle className="text-lg mb-2">{type.name}</CardTitle>
                  <CardDescription className="text-sm">
                    {type.desc}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 🧩 System Features */}
      <section className="py-20">
        <div className="containerr mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              {t('featuresTitle')}
            </h2>
            <p className="text-lg text-muted-foreground">
              {t('featuresSubtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {systemFeatures.map((feature: string, i: number) => (
              <div
                key={i}
                className="flex items-center space-x-3 p-4 bg-muted/40 rounded-lg hover:bg-muted/60 transition-colors"
              >
                <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="text-sm font-medium text-foreground">
                  {feature}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 🚧 Installation Process */}
      <section className="py-20 bg-muted/30">
        <div className="containerr mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {t('installationTitle')}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-12">
            {t('installationSubtitle')}
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {installationSteps.map((step: string, i: number) => (
              <div key={i}>
                <div className="w-12 h-12 bg-red-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {i + 1}
                </div>
                <h3 className="font-semibold text-foreground mb-2">{step}</h3>
                <p className="text-sm text-muted-foreground">
                  {installationDescriptions[i]}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 🚨 CTA */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-red-600 via-red-700 to-red-900 dark:from-red-700 dark:via-red-800 dark:to-red-950 animate-gradient-slow" />
        <div className="absolute inset-0 bg-black/30 mix-blend-multiply dark:bg-black/40" />

        <div className="relative containerr mx-auto px-4 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight drop-shadow-lg">
              {t('ctaTitle')}
            </h2>
            <p className="text-lg md:text-xl opacity-90 mb-10 max-w-2xl mx-auto leading-relaxed text-gray-100 dark:text-gray-300">
              {t('ctaSubtitle')}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                size="lg"
                variant="secondary"
                className="px-8 py-6 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 bg-white text-red-700 hover:bg-gray-100 dark:bg-gray-100 dark:text-red-800 dark:hover:bg-gray-200"
                asChild
              >
                <Link href="/contact" className="flex items-center space-x-2">
                  <span>{t('ctaQuote')}</span>
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="px-8 py-6 text-lg border-2 font-semibold border-white text-white hover:bg-white hover:text-red-700 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 dark:border-gray-200 dark:text-gray-100 dark:hover:bg-gray-100 dark:hover:text-red-700 bg-transparent"
                asChild
              >
                <Link href="/services/regular-maintenance">
                  {t('ctaMaintenance')}
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
