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
  Building2,
  Users,
  Award,
  CheckCircle,
  Star,
  Quote,
} from 'lucide-react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Link } from '@/i18n/routing';
import CTAbout from '../../components/CTAAbout/CTAbout';

export default function ClientPage() {
  const t = useTranslations('ClientPage');
  const tt = useTranslations('categories');

  const clientCategories = tt.raw('list');

  const icons = [
    <Building2 className="h-8 w-8" key="1" />,
    <Users className="h-8 w-8" key="2" />,
    <Award className="h-8 w-8" key="3" />,
    <Building2 className="h-8 w-8" key="4" />,
    <Users className="h-8 w-8" key="5" />,
  ];

  const testimonials = [
    {
      name: 'Dr. Ahmed Hassan',
      position: 'Facilities Manager',
      company: 'Cairo University Hospital',
      content:
        "Protection's fire protection system has been flawless for over 5 years. Their maintenance service is exceptional and their response time is outstanding.",
      rating: 5,
    },
    {
      name: 'Eng. Sarah Mohamed',
      position: 'Safety Director',
      company: 'Mall of Egypt',
      content:
        'The comprehensive fire safety solution provided by Protection gives us complete peace of mind. Professional installation and excellent ongoing support.',
      rating: 5,
    },
    {
      name: 'Mr. Khaled Ibrahim',
      position: 'Operations Manager',
      company: 'Suez Steel Company',
      content:
        'Protection understands industrial fire protection requirements. Their customized solution perfectly fits our complex manufacturing environment.',
      rating: 5,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center text-center overflow-hidden">
        <Image
          src="/image/careHero.png"
          alt={t('hero.alt')}
          fill
          className="object-cover brightness-[0.65]"
        />
        <div className="absolute inset-0 bg-black/40" />
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-white px-6"
        >
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4">
            {t('hero.main')}
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            {t('hero.subtitle')}
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <Button
              asChild
              size="lg"
              className="bg-white text-red-700 hover:bg-gray-100 font-semibold px-8"
            >
              <Link href="/gallery">{t('hero.button')}</Link>
            </Button>
          </div>
        </motion.div>
      </section>

      {/* Client Categories */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              {t('categories.heading')}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t('categories.description')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {clientCategories.map((category: any, index: number) => (
              <Card
                key={index}
                className="group hover:shadow-lg transition-all duration-300 border-2 hover:border-primary/20"
              >
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                    {icons[index] ?? <Building2 className="h-8 w-8" />}
                  </div>
                  <CardTitle className="text-xl mb-2">
                    {category.title}
                  </CardTitle>
                  <CardDescription>{category.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-center mb-4">
                    <Badge variant="secondary" className="text-sm">
                      {category.projects} {t('hero.stats.projects')}
                    </Badge>
                  </div>
                  <div className="space-y-2">
                    {category.clients.map(
                      (client: string, clientIndex: number) => (
                        <div
                          key={clientIndex}
                          className="flex items-center space-x-2 text-sm"
                        >
                          <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                          <span className="text-muted-foreground">
                            {client}
                          </span>
                        </div>
                      )
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Client Testimonials */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              {t('testimonials.heading')}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t('testimonials.description')}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="relative">
                <CardHeader>
                  <Quote className="h-8 w-8 text-primary/20 absolute top-4 right-4" />
                  <div className="flex space-x-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 fill-primary text-primary"
                      />
                    ))}
                  </div>
                  <CardDescription className="text-base leading-relaxed">
                    "{testimonial.content}"
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="border-t pt-4">
                    <div className="font-semibold text-foreground">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.position}
                    </div>
                    <div className="text-sm text-primary font-medium">
                      {testimonial.company}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTAbout />
    </div>
  );
}
