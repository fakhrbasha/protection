'use client';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Flame,
  Shield,
  Settings,
  CheckCircle,
  Users,
  Award,
} from 'lucide-react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';

export default function FireSystemSolutionPage() {
  const t = useTranslations('FireSystemProtection');
  const processSteps = t.raw('processSteps');
  const features = t.raw('features');

  // 🧩 خريطة تحويل أسماء الأيقونات إلى مكوّنات فعلية
  const iconMap: Record<string, any> = {
    Shield,
    Settings,
    CheckCircle,
    Users,
    Award,
  };

  return (
    <div className="min-h-screen bg-background">
      {/* 🧯 Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center text-center">
        <Image
          src="/image/fire-alarm/FP.jpg"
          alt="Fire Protection System"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/30" />
        <div className="relative z-10 text-white px-6 max-w-3xl">
          <div className="flex items-center justify-center mb-4">
            <Flame className="h-12 w-12 text-red-500 mr-3" />
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              {t('hero.title')}
            </h1>
          </div>
          <p className="text-lg md:text-xl text-gray-200 mb-8">
            {t('hero.description')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="text-lg px-8 bg-red-600 hover:bg-red-700"
            >
              <Link href="/contact">{t('hero.buttons.consultation')}</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="text-lg px-8 bg-transparent border-white text-white hover:bg-white hover:text-black"
            >
              <Link href="/projects">{t('hero.buttons.projects')}</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* 🔧 Implementation Process */}
      <section className="py-20 bg-muted/30">
        <div className="containerr mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {t('process.heading')}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t('process.description')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {processSteps.map((step: any, i: number) => (
              <Card
                key={i}
                className="relative group hover:shadow-lg transition-all duration-300"
              >
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4 group-hover:scale-110 transition-transform">
                    {step.step}
                  </div>
                  <CardTitle className="text-xl mb-2">{step.title}</CardTitle>
                  <CardDescription className="text-base">
                    {step.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 🛡️ Why Choose Section */}
      <section className="py-20">
        <div className="containerr mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {t('why.heading')}
            </h2>
            <p className="text-lg text-muted-foreground">
              {t('why.description')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((item: any, i: number) => {
              const IconComponent = iconMap[item.icon] || Shield;

              return (
                <Card
                  key={i}
                  className="text-center hover:shadow-xl transition"
                >
                  <CardHeader>
                    <IconComponent className="h-12 w-12 text-primary mx-auto mb-4" />
                    <CardTitle>{item.title}</CardTitle>
                    <CardDescription>{item.desc}</CardDescription>
                  </CardHeader>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* 🚨 CTA Section */}
      <section className="py-20 bg-gradient-to-r from-red-600 to-red-800 text-white">
        <div className="containerr mx-auto px-4 text-center max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            {t('cta.heading')}
          </h2>
          <p className="text-lg text-gray-200 mb-8 leading-relaxed">
            {t('cta.description')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="text-lg px-8 bg-white text-red-600 hover:bg-gray-100"
            >
              <Link href="/contact">{t('cta.buttons.consultation')}</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="text-lg px-8 bg-transparent border-white text-white hover:bg-white hover:text-red-600"
            >
              <Link href="/services/regular-maintenance">
                {t('cta.buttons.maintenance')}
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
