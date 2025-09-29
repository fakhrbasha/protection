'use client';

import { useTranslations } from 'next-intl';
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
  Wrench,
  CheckCircle,
  Users,
  Award,
  Clock,
  Phone,
  ArrowRight,
} from 'lucide-react';
import { ImagesSliderDemo } from './components/imageSlider/imageSlider';
import { Link } from '@/i18n/routing';

export default function Home() {
  const t = useTranslations('Home');

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <ImagesSliderDemo />
      <section className="relative min-h-[80vh] flex items-center justify-center bg-gradient-to-br from-background via-background to-muted/30">
        <div className="absolute inset-0 bg-[url('/industrial-fire-protection-equipment-facility.jpg')] bg-cover bg-center opacity-5" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <Badge variant="secondary" className="mb-6">
            {t('hero.badge')}
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">
            {t.rich('hero.title', {
              span: (chunks) => <span className="text-primary">{chunks}</span>,
              br: () => <br />,
            })}
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto text-pretty">
            {t('hero.subtitle')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="/contact" className="flex items-center space-x-2">
                <Phone className="h-5 w-5" />
                <span>{t('hero.buttons.quote')}</span>
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/services" className="flex items-center space-x-2">
                <span>{t('hero.buttons.services')}</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">17+</div>
              <div className="text-sm opacity-90">{t('stats.years')}</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">500+</div>
              <div className="text-sm opacity-90">{t('stats.projects')}</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">100%</div>
              <div className="text-sm opacity-90">{t('stats.safety')}</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">24/7</div>
              <div className="text-sm opacity-90">{t('stats.support')}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {t('services.heading')}
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
              {t('services.description')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {t.raw('services.list').map((service: any, index: number) => {
              const icons = [<Flame />, <Shield />, <Wrench />];
              return (
                <Card
                  key={index}
                  className="group hover:shadow-lg transition-all duration-300"
                >
                  <CardHeader className="text-center">
                    <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit group-hover:bg-primary/20 transition-colors">
                      {icons[index]}
                    </div>
                    <CardTitle className="text-lg">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-center">
                      {service.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                {t('whyChoose.heading')}
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                {t('whyChoose.description')}
              </p>

              <div className="space-y-4">
                {t.raw('whyChoose.points').map((point: any, index: number) => (
                  <div
                    key={index}
                    className="flex items-start space-x-3 text-start"
                  >
                    <CheckCircle className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold mb-1">{point.title}</h3>
                      <p className="text-muted-foreground">
                        {point.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl p-8">
                <img
                  src="/image/professional-fire-safety-engineer-inspecting-equip.jpg"
                  alt="ProtectionCO professional inspecting fire safety equipment"
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Commitment Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {t('commitment.heading')}
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
              {t('commitment.description')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {t.raw('commitment.list').map((item: any, index: number) => {
              const icons = [<Users />, <Award />, <Clock />];
              return (
                <div key={index} className="text-center">
                  <div className="mx-auto mb-6 p-4 bg-primary/10 rounded-full w-fit">
                    {icons[index]}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t('cta.heading')}
          </h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto text-pretty">
            {t('cta.description')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/contact" className="flex items-center space-x-2">
                <Phone className="h-5 w-5" />
                <span>{t('cta.buttons.contact')}</span>
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent"
              asChild
            >
              <Link href="/about">{t('cta.buttons.about')}</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
