'use client';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  Settings,
  CheckCircle,
  AlertTriangle,
  Phone,
  Clock,
  ArrowRight,
} from 'lucide-react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Link } from '@/i18n/routing';
import { useTranslations } from 'next-intl';

export default function RegularMaintenancePage() {
  const t = useTranslations('maintenance');

  const maintenanceServices = t.raw('services');
  const maintenancePlans = t.raw('plans');
  const maintenanceChecklist = t.raw('checklist');

  return (
    <div className="min-h-screen bg-background">
      {/* 🧰 Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center text-center overflow-hidden">
        <Image
          src="/image/Hero1.png"
          alt={t('heroAlt')}
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/30 dark:from-black/80 dark:via-black/60 dark:to-black/30" />

        <div className="relative z-10 px-6 max-w-3xl text-white">
          <div className="flex items-center justify-center mb-4">
            <Settings className="h-12 w-12 text-red-500 mr-3" />
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
              className="text-lg px-8 bg-red-600 hover:bg-red-700 text-white"
            >
              <Link href="/contact">{t('heroBtn1')}</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="text-lg px-8 bg-transparent border-white text-white hover:bg-white hover:text-black"
            >
              <Link href="/services">{t('heroBtn2')}</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* 🧯 Maintenance Services */}
      <section className="py-20">
        <div className="containerr mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              {t('servicesTitle')}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t('servicesSubtitle')}
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {maintenanceServices.map((service: any, index: number) => (
              <Card
                key={index}
                className="hover:shadow-lg transition-all duration-300 border-2 hover:border-primary/20"
              >
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full">
                    <Settings className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl mb-2">
                    {service.title}
                  </CardTitle>
                  <Badge variant="secondary" className="mb-4">
                    {service.frequency}
                  </Badge>
                  <CardDescription className="text-base">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mb-6">
                    <h4 className="font-semibold text-foreground mb-3">
                      {t('includes')}
                    </h4>
                    <ul className="space-y-2">
                      {service.includes.map(
                        (item: string, itemIndex: number) => (
                          <li
                            key={itemIndex}
                            className="flex items-center space-x-2 text-sm"
                          >
                            <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                            <span className="text-muted-foreground">
                              {item}
                            </span>
                          </li>
                        )
                      )}
                    </ul>
                  </div>
                  <div className="mb-6">
                    <h4 className="font-semibold text-foreground mb-3">
                      {t('benefits')}
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {service.benefits.map((benefit: string, i: number) => (
                        <Badge key={i} variant="outline" className="text-xs">
                          {benefit}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 🧾 Maintenance Checklist */}
      <section className="py-20">
        <div className="containerr mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                {t('checklistTitle')}
              </h2>
              <p className="text-lg text-muted-foreground">
                {t('checklistSubtitle')}
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">
              {maintenanceChecklist.map((item: string, index: number) => (
                <div
                  key={index}
                  className="flex items-center space-x-3 p-4 bg-muted/30 rounded-lg hover:bg-muted/50 transition-colors"
                >
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-sm font-medium text-foreground">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ☎️ Emergency Support */}
      <section className="py-20 bg-primary/5">
        <div className="containerr mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center mb-6">
              <Phone className="h-12 w-12 text-primary mr-4" />
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                {t('emergencyTitle')}
              </h2>
            </div>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              {t('emergencySubtitle')}
            </p>
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              {t.raw('emergencyCards').map((card: any, i: number) => (
                <Card className="text-center" key={i}>
                  <CardHeader>
                    {[<Clock />, <Settings />, <AlertTriangle />][i]}
                    <CardTitle className="text-lg mt-2">{card.title}</CardTitle>
                    <CardDescription>{card.desc}</CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8">
                {t('emergencyHotline')}
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="text-lg px-8 bg-transparent"
              >
                <Link href="/contact">{t('emergencyBtn')}</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 🚨 CTA Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/90 to-primary-foreground/30 dark:from-primary dark:via-primary/80 dark:to-primary-foreground/20 animate-gradient-slow" />
        <div className="absolute inset-0 bg-black/30 mix-blend-multiply" />

        <div className="relative containerr mx-auto px-4 text-center text-primary-foreground">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight drop-shadow-lg">
              {t('ctaTitle')}
            </h2>
            <p className="text-lg md:text-xl opacity-90 mb-10 max-w-2xl mx-auto leading-relaxed">
              {t('ctaSubtitle')}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                size="lg"
                variant="secondary"
                className="px-8 py-6 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                asChild
              >
                <Link href="/contact" className="flex items-center space-x-2">
                  <span>{t('ctaBtn1')}</span>
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="px-8 py-6 text-lg border-2 font-semibold border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 bg-transparent"
                asChild
              >
                <Link href="/services">{t('ctaBtn2')}</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
