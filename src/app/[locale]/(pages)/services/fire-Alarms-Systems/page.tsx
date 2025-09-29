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
} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

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
      image: '/school-fire-alarm-system-installation.jpg',
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
      image: '/shopping-mall-fire-alarm-detection-system.jpg',
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
      image: '/luxury-hotel-fire-protection-system.jpg',
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
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary/10 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center mb-6">
              <Bell className="h-12 w-12 text-primary mr-4" />
              <h1 className="text-4xl md:text-6xl font-bold text-foreground">
                Fire Alarms <span className="text-primary">Systems</span>
              </h1>
            </div>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Advanced fire detection and alarm systems providing early warning
              and life safety protection for all types of facilities
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-center">
              <div className="bg-background/80 backdrop-blur rounded-lg p-4 border">
                <div className="text-3xl font-bold text-primary">1000+</div>
                <div className="text-sm text-muted-foreground">
                  Systems Installed
                </div>
              </div>
              <div className="bg-background/80 backdrop-blur rounded-lg p-4 border">
                <div className="text-3xl font-bold text-primary">99.9%</div>
                <div className="text-sm text-muted-foreground">
                  Detection Accuracy
                </div>
              </div>
              <div className="bg-background/80 backdrop-blur rounded-lg p-4 border">
                <div className="text-3xl font-bold text-primary">24/7</div>
                <div className="text-sm text-muted-foreground">Monitoring</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Alarm System Types */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Fire Alarm System Types
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Choose from our range of fire alarm systems designed to meet
              different building requirements and budgets
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
                        {system.features.map((feature, featureIndex) => (
                          <div
                            key={featureIndex}
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
                        {system.applications.map((app, appIndex) => (
                          <Badge
                            key={appIndex}
                            variant="outline"
                            className="text-xs"
                          >
                            {app}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <Button>Get Quote</Button>
                      <Button variant="outline">Technical Details</Button>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Detection Technologies */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Detection Technologies
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Advanced detection technologies ensuring rapid and accurate fire
              identification
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {detectionTypes.map((type, index) => (
              <Card
                key={index}
                className="text-center group hover:shadow-lg transition-all duration-300 border-2 hover:border-primary/20"
              >
                <CardHeader>
                  <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full text-primary group-hover:bg-primary group-hover:text-white transition-colors">
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

      {/* System Features */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Advanced System Features
              </h2>
              <p className="text-lg text-muted-foreground">
                Our fire alarm systems include comprehensive features for
                complete life safety protection
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {systemFeatures.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-3 p-4 bg-muted/30 rounded-lg hover:bg-muted/50 transition-colors"
                >
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-sm font-medium text-foreground">
                    {feature}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Installation Process */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Professional Installation Process
              </h2>
              <p className="text-lg text-muted-foreground">
                Our certified technicians ensure proper installation and
                commissioning of your fire alarm system
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  1
                </div>
                <h3 className="font-semibold text-foreground mb-2">
                  Site Survey
                </h3>
                <p className="text-sm text-muted-foreground">
                  Detailed assessment of building layout and fire safety
                  requirements
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  2
                </div>
                <h3 className="font-semibold text-foreground mb-2">
                  System Design
                </h3>
                <p className="text-sm text-muted-foreground">
                  Custom design based on building codes and specific
                  requirements
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  3
                </div>
                <h3 className="font-semibold text-foreground mb-2">
                  Installation
                </h3>
                <p className="text-sm text-muted-foreground">
                  Professional installation by certified fire alarm technicians
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  4
                </div>
                <h3 className="font-semibold text-foreground mb-2">Testing</h3>
                <p className="text-sm text-muted-foreground">
                  Comprehensive testing and commissioning to ensure proper
                  operation
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Protect Your Building with Advanced Fire Alarms
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Don't wait for a fire emergency. Install a reliable fire alarm
              system today and ensure the safety of your occupants.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="text-lg px-8">
                <Link href="/contact">Get Fire Alarm Quote</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="text-lg px-8 bg-transparent"
              >
                <Link href="/services/regular-maintenance">
                  Maintenance Services
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
