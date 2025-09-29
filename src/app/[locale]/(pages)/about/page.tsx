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
  Target,
  Eye,
  Award,
  Building,
  CheckCircle,
  ArrowRight,
} from 'lucide-react';
import { Link } from '@/i18n/routing';

export default function AboutPage() {
  const t = useTranslations('About');

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-background via-background to-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-6">
              {t('hero.badge')}
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
              {t.rich('hero.title', {
                span: (chunks) => (
                  <span className="text-primary">{chunks}</span>
                ),
              })}
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed text-pretty">
              {t('hero.subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                {t('story.heading')}
              </h2>
              <div className="space-y-6 text-lg leading-relaxed">
                {t.raw('story.paragraphs').map((p: string, i: number) => (
                  <p key={i} className="text-muted-foreground">
                    {p}
                  </p>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl p-6">
                <img
                  src="/Protection-team-fire-safety-professionals-egypt.jpg"
                  alt="Protection team of fire safety professionals in Egypt"
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {t('missionVision.heading')}
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
              {t('missionVision.description')}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {t.raw('missionVision.cards').map((card: any, i: number) => {
              const icons = [
                <Target className="h-8 w-8 text-primary" />,
                <Eye className="h-8 w-8 text-accent" />,
              ];
              return (
                <Card key={i} className="h-full">
                  <CardHeader className="text-center">
                    <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit">
                      {icons[i]}
                    </div>
                    <CardTitle className="text-2xl">{card.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <CardDescription className="text-base leading-relaxed">
                      {card.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Company Profile */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                {t('profile.heading')}
              </h2>
              <p className="text-xl text-muted-foreground text-pretty">
                {t('profile.description')}
              </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <div className="space-y-6">
                {t.raw('profile.features').map((feature: any, i: number) => {
                  const icons = [<Building />, <Award />, <CheckCircle />];
                  return (
                    <div key={i}>
                      <h3 className="text-xl font-semibold mb-3 flex items-center">
                        {icons[i]} <span className="ml-2">{feature.title}</span>
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  );
                })}
              </div>
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Shield className="h-5 w-5 text-primary mr-2" />
                      {t('profile.services.title')}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm">
                      {t
                        .raw('profile.services.items')
                        .map((item: string, i: number) => (
                          <li key={i} className="flex items-center">
                            <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                            {item}
                          </li>
                        ))}
                    </ul>
                  </CardContent>
                </Card>
                <div className="bg-gradient-to-br from-primary/5 to-accent/5 p-6 rounded-lg">
                  <h4 className="font-semibold mb-2">
                    {t('profile.quality.title')}
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {t('profile.quality.description')}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Management Policy */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                {t('policy.heading')}
              </h2>
              <p className="text-xl text-muted-foreground text-pretty">
                {t('policy.description')}
              </p>
            </div>
            <div className="bg-card p-8 rounded-2xl shadow-sm">
              <div className="space-y-6 text-muted-foreground leading-relaxed">
                {t.raw('policy.paragraphs').map((p: string, i: number) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
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
              <Link href="/services" className="flex items-center space-x-2">
                <span>{t('cta.buttons.services')}</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent"
              asChild
            >
              <Link href="/contact">{t('cta.buttons.contact')}</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
