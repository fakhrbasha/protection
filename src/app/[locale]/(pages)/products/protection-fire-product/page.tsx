import { Button } from '@/components/ui/button';
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Shield, Flame, CheckCircle, Award, Settings } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function ProtectionFireProductPage() {
  const products = [
    {
      name: 'Protection Fire Sprinkler Systems',
      category: 'Suppression Systems',
      description:
        'Advanced wet and dry sprinkler systems designed for maximum coverage and reliability.',
      features: [
        'Quick Response Technology',
        'Corrosion Resistant Materials',
        'Easy Maintenance',
        'NFPA Compliant',
      ],
      applications: [
        'Commercial Buildings',
        'Industrial Facilities',
        'Warehouses',
        'Hospitals',
      ],
      image: '/industrial-factory-sprinkler-fire-suppression-syst.jpg',
    },
    {
      name: 'Protection Fire Alarm Panels',
      category: 'Detection Systems',
      description:
        'Intelligent fire alarm control panels with advanced detection and notification capabilities.',
      features: [
        'Multi-Zone Control',
        'Remote Monitoring',
        'Voice Evacuation',
        'Battery Backup',
      ],
      applications: [
        'Office Buildings',
        'Shopping Malls',
        'Educational Facilities',
        'Hotels',
      ],
      image: '/school-fire-alarm-system-installation.jpg',
    },
    {
      name: 'Protection Foam Systems',
      category: 'Special Hazard Protection',
      description:
        'High-performance foam fire suppression systems for flammable liquid protection.',
      features: [
        'AFFF Technology',
        'Proportioning Systems',
        'Automatic Activation',
        'Environmental Safe',
      ],
      applications: [
        'Aircraft Hangars',
        'Chemical Plants',
        'Oil Refineries',
        'Fuel Storage',
      ],
      image: '/industrial-fire-protection-equipment-facility.jpg',
    },
  ];

  const certifications = [
    { name: 'NFPA Certified', icon: <Award className="h-6 w-6" /> },
    { name: 'UL Listed', icon: <Shield className="h-6 w-6" /> },
    { name: 'FM Approved', icon: <CheckCircle className="h-6 w-6" /> },
    { name: 'ISO 9001', icon: <Settings className="h-6 w-6" /> },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary/10 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center mb-6">
              <Flame className="h-12 w-12 text-primary mr-4" />
              <h1 className="text-4xl md:text-6xl font-bold text-foreground">
                Protection Fire <span className="text-primary">Products</span>
              </h1>
            </div>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Engineered and manufactured in Egypt, our fire protection products
              meet international standards while being optimized for local
              conditions
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-2 bg-background/80 backdrop-blur rounded-lg px-4 py-2 border"
                >
                  <div className="text-primary">{cert.icon}</div>
                  <span className="text-sm font-medium">{cert.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Product Range
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive fire protection solutions designed and manufactured
              to the highest international standards
            </p>
          </div>

          <div className="space-y-12">
            {products.map((product, index) => (
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
                      src={product.image || '/placeholder.svg'}
                      alt={product.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-8 lg:p-12 flex flex-col justify-center">
                    <Badge variant="secondary" className="w-fit mb-4">
                      {product.category}
                    </Badge>
                    <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
                      {product.name}
                    </h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {product.description}
                    </p>

                    <div className="mb-6">
                      <h4 className="font-semibold text-foreground mb-3">
                        Key Features:
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {product.features.map((feature, featureIndex) => (
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
                        Applications:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {product.applications.map((app, appIndex) => (
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
                      <Button>Request Quote</Button>
                      <Button variant="outline">Technical Specs</Button>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Protection Products */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Why Choose Protection Products?
              </h2>
              <p className="text-lg text-muted-foreground">
                Our products are designed with Egyptian conditions in mind while
                meeting international standards
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="text-center">
                <CardHeader>
                  <Shield className="h-12 w-12 text-primary mx-auto mb-4" />
                  <CardTitle>Proven Reliability</CardTitle>
                  <CardDescription>
                    Over 15 years of successful installations across Egypt with
                    99.8% uptime record
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <Settings className="h-12 w-12 text-primary mx-auto mb-4" />
                  <CardTitle>Local Support</CardTitle>
                  <CardDescription>
                    Comprehensive local support with spare parts availability
                    and rapid response times
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <Award className="h-12 w-12 text-primary mx-auto mb-4" />
                  <CardTitle>International Standards</CardTitle>
                  <CardDescription>
                    All products meet NFPA, UL, and FM standards while being
                    optimized for local conditions
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Ready to Protect Your Facility?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Contact our technical team to discuss your fire protection
              requirements and get a customized solution proposal.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="text-lg px-8">
                <Link href="/contact">Get Technical Consultation</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="text-lg px-8 bg-transparent"
              >
                <Link href="/products/global-fire-equipment">
                  View Global Products
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
