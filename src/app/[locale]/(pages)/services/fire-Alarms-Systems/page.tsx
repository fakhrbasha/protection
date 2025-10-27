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

export default function FireAlarmsSystemPage() {
  const alarmSystems = [
    {
      title: 'Conventional Fire Alarm Systems',
      description:
        'Reliable and cost-effective fire alarm systems ideal for smaller buildings and straightforward applications.',
      features: [
        'Zone-based Detection',
        'Manual Call Points',
        'Audible/Visual Alarms',
        'Battery Backup',
      ],
      applications: [
        'Small Offices',
        'Retail Stores',
        'Restaurants',
        'Small Warehouses',
      ],
      image: '/image/fire-alarm/1.webp',
    },
    {
      title: 'Addressable Fire Alarm Systems',
      description:
        'Advanced intelligent fire alarm systems providing precise location identification and enhanced control.',
      features: [
        'Individual Device Addressing',
        'Precise Location ID',
        'Advanced Diagnostics',
        'Remote Monitoring',
      ],
      applications: [
        'Large Buildings',
        'Hospitals',
        'Hotels',
        'Shopping Centers',
      ],
      image: '/image/fire-alarm/2.webp',
    },
    {
      title: 'Wireless Fire Alarm Systems',
      description:
        'Flexible wireless fire alarm solutions perfect for heritage buildings and retrofit applications.',
      features: [
        'No Wiring Required',
        'Easy Installation',
        'Mesh Network',
        'Battery Powered',
      ],
      applications: [
        'Historic Buildings',
        'Temporary Structures',
        'Retrofit Projects',
        'Remote Locations',
      ],
      image: '/image/fire-alarm/3.webp',
    },
  ];

  const detectionTypes = [
    {
      name: 'Smoke Detectors',
      icon: <Radio className="h-6 w-6" />,
      description:
        'Advanced photoelectric and ionization smoke detection technology',
    },
    {
      name: 'Heat Detectors',
      icon: <Zap className="h-6 w-6" />,
      description: 'Fixed temperature and rate-of-rise heat detection systems',
    },
    {
      name: 'Flame Detectors',
      icon: <AlertTriangle className="h-6 w-6" />,
      description: 'UV/IR flame detection for rapid fire identification',
    },
    {
      name: 'Gas Detectors',
      icon: <Shield className="h-6 w-6" />,
      description: 'Specialized gas detection for industrial applications',
    },
  ];

  const systemFeatures = [
    'Early Fire Detection',
    'Mass Notification',
    'Emergency Communication',
    'Evacuation Management',
    'Integration with Building Systems',
    'Remote Monitoring Capability',
    'Maintenance Alerts',
    'Compliance Reporting',
  ];

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
              Fire Alarm <span className="text-red-500">Systems</span>
            </h1>
          </div>
          <p className="text-lg md:text-xl text-gray-200 mb-8">
            Intelligent fire detection and alarm solutions providing early
            warning and life safety for all environments.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="text-lg px-8 bg-red-600 hover:bg-red-700"
            >
              <Link href="/contact">Get Fire Alarm Quote</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="text-lg px-8 bg-transparent border-white text-white hover:bg-white hover:text-black"
            >
              <Link href="/services/regular-maintenance">
                Maintenance Services
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* 🔥 Alarm System Types */}
      <section className="py-20 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Fire Alarm System Types
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Choose from our range of fire alarm systems designed for different
              building sizes and applications.
            </p>
          </div>

          <div className="space-y-12">
            {alarmSystems.map((system, index) => (
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
                      src={system.image || '/placeholder.svg'}
                      alt={system.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-8 lg:p-12 flex flex-col justify-center">
                    <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
                      {system.title}
                    </h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {system.description}
                    </p>

                    <div className="mb-6">
                      <h4 className="font-semibold text-foreground mb-3">
                        Key Features:
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {system.features.map((feature, i) => (
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
                        Best For:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {system.applications.map((app, i) => (
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
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Detection Technologies
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Advanced detection technologies ensuring rapid and accurate fire
              identification.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {detectionTypes.map((type, index) => (
              <Card
                key={index}
                className="text-center group hover:shadow-lg transition-all duration-300 border-2 hover:border-red-400/40"
              >
                <CardHeader>
                  <div className="mx-auto mb-4 p-3 bg-red-100 rounded-full text-red-600 group-hover:bg-red-600 group-hover:text-white transition-colors">
                    {type.icon}
                  </div>
                  <CardTitle className="text-lg mb-2">{type.name}</CardTitle>
                  <CardDescription className="text-sm">
                    {type.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 🧩 System Features */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Advanced System Features
            </h2>
            <p className="text-lg text-muted-foreground">
              Our fire alarm systems include comprehensive features for complete
              life safety protection.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {systemFeatures.map((feature, i) => (
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
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Professional Installation Process
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-12">
            Certified technicians ensure precise installation and testing for
            maximum system performance.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {['Site Survey', 'System Design', 'Installation', 'Testing'].map(
              (step, i) => (
                <div key={i}>
                  <div className="w-12 h-12 bg-red-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                    {i + 1}
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{step}</h3>
                  <p className="text-sm text-muted-foreground">
                    {
                      [
                        'Detailed assessment of site and fire safety needs.',
                        'Custom design following codes and requirements.',
                        'Professional installation by experts.',
                        'Full testing and commissioning before delivery.',
                      ][i]
                    }
                  </p>
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* 🚨 CTA */}
      <section className="relative py-24 overflow-hidden">
        {/* 🎨 Animated Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-red-600 via-red-700 to-red-900 dark:from-red-700 dark:via-red-800 dark:to-red-950 animate-gradient-slow" />

        {/* 🟪 Overlay for better contrast */}
        <div className="absolute inset-0 bg-black/30 mix-blend-multiply dark:bg-black/40" />

        <div className="relative container mx-auto px-4 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight drop-shadow-lg">
              Protect Your Building with Advanced Fire Alarms
            </h2>
            <p className="text-lg md:text-xl opacity-90 mb-10 max-w-2xl mx-auto leading-relaxed text-gray-100 dark:text-gray-300">
              Don’t wait for a fire emergency — install a reliable alarm system
              today to safeguard lives and assets.
            </p>

            {/* 🎯 Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                size="lg"
                variant="secondary"
                className="px-8 py-6 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 bg-white text-red-700 hover:bg-gray-100 dark:bg-gray-100 dark:text-red-800 dark:hover:bg-gray-200"
                asChild
              >
                <Link href="/contact" className="flex items-center space-x-2">
                  <span>Request a Quote</span>
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
                  Maintenance Services
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
