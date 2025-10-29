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
  Shield,
  Flame,
  Camera,
  Bell,
  Wrench,
  CheckCircle,
  ArrowRight,
  Building,
  Settings,
  Users,
} from 'lucide-react';
import { Link } from '@/i18n/routing';
import { useTranslations } from 'next-intl';

export default function ServicesPage() {
  const t = useTranslations('services');
  const services = t.raw('items');
  const industries = t.raw('industries');
  const process = t.raw('process');

  type IconName = 'Flame' | 'Bell' | 'Camera' | 'Settings' | 'Wrench' | 'Users';

  const iconsMap: Record<
    IconName,
    React.ComponentType<{ className?: string }>
  > = {
    Flame,
    Bell,
    Camera,
    Settings,
    Wrench,
    Users,
  };

  type IndustryIconName = 'Building' | 'Shield' | 'Users';

  const industryIcons: Record<
    IndustryIconName,
    React.ComponentType<{ className?: string }>
  > = {
    Building,
    Shield,
    Users,
  };

  return (
    <div
      className="flex flex-col"
      dir={t('pageTitle') === 'خدماتنا' ? 'rtl' : 'ltr'}
    >
      {/* 🧯 Hero Section */}
      <section className="py-20 bg-gradient-to-br from-background via-background to-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-6">
              {t('heroBadge')}
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
              {t('heroTitle')}{' '}
              <span className="text-primary">{t('heroHighlight')}</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed text-pretty">
              {t('heroSubtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* 🔥 Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {t('coreTitle')}
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
              {t('coreSubtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service: any, index: number) => {
              const Icon = iconsMap[service.icon as IconName];

              return (
                <Card
                  key={index}
                  className="h-full hover:shadow-lg transition-shadow"
                >
                  <CardHeader>
                    <div className="mb-4 p-3 bg-primary/10 rounded-full w-fit">
                      <Icon className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                    <CardDescription className="text-base">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {service.features.map((feature: string, i: number) => (
                        <li key={i} className="flex items-center text-sm">
                          <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* 🏢 Industries We Serve */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {t('industriesTitle')}
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
              {t('industriesSubtitle')}
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {industries.map((industry: any, index: number) => {
              const IndustryIcon =
                industryIcons[industry.icon as IndustryIconName];

              return (
                <Card
                  key={index}
                  className="text-center p-6 hover:shadow-md transition-shadow"
                >
                  <IndustryIcon className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold text-sm">{industry.name}</h3>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* ⚙️ Process Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {t('processTitle')}
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
              {t('processSubtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((p: any, index: number) => (
              <div key={index} className="text-center">
                <div className="mb-6">
                  <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                    {p.step}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{p.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {p.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 🚨 Call to Action */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t('ctaTitle')}
          </h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto text-pretty">
            {t('ctaSubtitle')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/contact" className="flex items-center space-x-2">
                <span>{t('ctaBtn1')}</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent"
              asChild
            >
              <Link href="/gallery">{t('ctaBtn2')}</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
