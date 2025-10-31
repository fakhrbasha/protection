'use client';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Phone, Mail, MapPin, Clock, Send, Shield } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { RevealLinks } from '../../components/LinkTest/LinksTest';

export default function ContactPage() {
  const t = useTranslations('Contact');

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-background via-background to-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-6">
              {t('hero.badge')}
            </Badge>
            <h1
              className="text-4xl md:text-5xl font-bold mb-6 text-balance"
              dangerouslySetInnerHTML={{ __html: t.raw('hero.title') }}
            />
            <p className="text-xl text-muted-foreground leading-relaxed text-pretty">
              {t('hero.subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20">
        <div className="containerr mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold mb-6">{t('form.heading')}</h2>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Send className="h-5 w-5 text-primary mr-2" />
                    {t('form.title')}
                  </CardTitle>
                  <CardDescription>{t('form.description')}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">
                        {t('form.fields.firstName')}
                      </Label>
                      <Input
                        id="firstName"
                        placeholder={t('form.placeholders.firstName')}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">
                        {t('form.fields.lastName')}
                      </Label>
                      <Input
                        id="lastName"
                        placeholder={t('form.placeholders.lastName')}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">{t('form.fields.email')}</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder={t('form.placeholders.email')}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">{t('form.fields.phone')}</Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder={t('form.placeholders.phone')}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="company">{t('form.fields.company')}</Label>
                    <Input
                      id="company"
                      placeholder={t('form.placeholders.company')}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="service">{t('form.fields.service')}</Label>
                    <select className="w-full p-2 border border-input rounded-md bg-background">
                      <option value="">{t('form.options.select')}</option>
                      <option value="fire-fighting">
                        {t('form.options.fireFighting')}
                      </option>
                      <option value="fire-alarm">
                        {t('form.options.fireAlarm')}
                      </option>
                      <option value="cctv">{t('form.options.cctv')}</option>
                      <option value="maintenance">
                        {t('form.options.maintenance')}
                      </option>
                      <option value="consultation">
                        {t('form.options.consultation')}
                      </option>
                      <option value="other">{t('form.options.other')}</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">{t('form.fields.message')}</Label>
                    <Textarea
                      id="message"
                      placeholder={t('form.placeholders.message')}
                      className="min-h-[120px]"
                    />
                  </div>

                  <Button className="w-full" size="lg">
                    <Send className="h-4 w-4 mr-2" />
                    {t('form.button')}
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold mb-6">{t('info.heading')}</h2>
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  {t('info.description')}
                </p>
              </div>

              <div className="space-y-6">
                {/* Phone */}
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <Phone className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">
                          {t('info.phone.title')}
                        </h3>
                        {t
                          .raw('info.phone.numbers')
                          .map((num: string, i: number) => (
                            <p key={i} className="text-muted-foreground">
                              {num}
                            </p>
                          ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Email */}
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <Mail className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">
                          {t('info.email.title')}
                        </h3>
                        <p className="text-muted-foreground">
                          {t('info.email.address')}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Address */}
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <MapPin className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">
                          {t('info.address.title')}
                        </h3>
                        {t
                          .raw('info.address.lines')
                          .map((line: string, i: number) => (
                            <p key={i} className="text-muted-foreground">
                              {line}
                            </p>
                          ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Hours */}
              </div>

              {/* Emergency Contact */}
              <Card className="bg-primary text-primary-foreground">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="p-2 bg-primary-foreground/10 rounded-lg">
                      <Shield className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">
                        {t('info.emergency.title')}
                      </h3>
                      <p className="opacity-90 text-sm">
                        {t('info.emergency.description')}
                      </p>
                      <p className="font-semibold mt-2">
                        {t('info.emergency.phone')}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
      <RevealLinks />
      {/* Map Section */}
    </div>
  );
}
