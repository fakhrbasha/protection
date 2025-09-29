import { Button } from '@/components/ui/button';
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  Flame,
  Shield,
  Settings,
  CheckCircle,
  Users,
  Award,
} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function FireSystemSolutionPage() {
  const systemSolutions = [
    {
      title: 'Integrated Fire Protection Systems',
      description:
        'Complete end-to-end fire protection solutions combining detection, suppression, and evacuation systems.',
      features: [
        'Unified Control Platform',
        'Real-time Monitoring',
        'Automated Response',
        'Emergency Communication',
      ],
      applications: [
        'Large Commercial Buildings',
        'Industrial Complexes',
        'Healthcare Facilities',
        'Educational Campuses',
      ],
      image: '/hospital-fire-protection-system-installation.jpg',
    },
    {
      title: 'Smart Fire Management Platform',
      description:
        'Advanced IoT-enabled fire protection system with remote monitoring and predictive maintenance.',
      features: [
        'Cloud-based Monitoring',
        'Mobile App Control',
        'Predictive Analytics',
        'Maintenance Alerts',
      ],
      applications: [
        'Multi-site Operations',
        'Remote Facilities',
        'Critical Infrastructure',
        'Government Buildings',
      ],
      image: '/modern-office-building-cctv-security-system.jpg',
    },
    {
      title: 'Custom Industrial Solutions',
      description:
        'Specialized fire protection systems designed for unique industrial hazards and processes.',
      features: [
        'Hazard Analysis',
        'Custom Design',
        'Specialized Suppression',
        'Process Integration',
      ],
      applications: [
        'Chemical Plants',
        'Oil & Gas Facilities',
        'Manufacturing',
        'Power Plants',
      ],
      image: '/industrial-factory-sprinkler-fire-suppression-syst.jpg',
    },
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Site Assessment',
      description:
        "Comprehensive evaluation of your facility's fire protection needs and risk factors",
    },
    {
      step: '02',
      title: 'System Design',
      description:
        'Custom engineering design tailored to your specific requirements and local codes',
    },
    {
      step: '03',
      title: 'Installation',
      description:
        'Professional installation by certified technicians with minimal disruption',
    },
    {
      step: '04',
      title: 'Commissioning',
      description:
        'Complete system testing and commissioning to ensure optimal performance',
    },
    {
      step: '05',
      title: 'Training',
      description:
        'Comprehensive training for your staff on system operation and maintenance',
    },
    {
      step: '06',
      title: 'Support',
      description:
        'Ongoing maintenance and support to ensure continued system reliability',
    },
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
                Fire-Protection{' '}
                <span className="text-primary">System Solutions</span>
              </h1>
            </div>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Comprehensive fire protection system solutions engineered for
              maximum safety, reliability, and performance
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-center">
              <div className="bg-background/80 backdrop-blur rounded-lg p-4 border">
                <div className="text-3xl font-bold text-primary">500+</div>
                <div className="text-sm text-muted-foreground">
                  Systems Installed
                </div>
              </div>
              <div className="bg-background/80 backdrop-blur rounded-lg p-4 border">
                <div className="text-3xl font-bold text-primary">99.8%</div>
                <div className="text-sm text-muted-foreground">
                  Reliability Rate
                </div>
              </div>
              <div className="bg-background/80 backdrop-blur rounded-lg p-4 border">
                <div className="text-3xl font-bold text-primary">24/7</div>
                <div className="text-sm text-muted-foreground">
                  Monitoring Support
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* System Solutions */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our System Solutions
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Advanced fire protection systems designed to meet the unique needs
              of modern facilities
            </p>
          </div>

          <div className="space-y-12">
            {systemSolutions.map((solution, index) => (
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
                      src={solution.image || '/placeholder.svg'}
                      alt={solution.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-8 lg:p-12 flex flex-col justify-center">
                    <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
                      {solution.title}
                    </h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {solution.description}
                    </p>

                    <div className="mb-6">
                      <h4 className="font-semibold text-foreground mb-3">
                        Key Features:
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {solution.features.map((feature, featureIndex) => (
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
                        Ideal For:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {solution.applications.map((app, appIndex) => (
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
                      <Button variant="outline">Learn More</Button>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Implementation Process */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Implementation Process
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A systematic approach ensuring successful deployment of your fire
              protection system
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {processSteps.map((step, index) => (
              <Card
                key={index}
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

      {/* Why Choose Our Solutions */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Why Choose Protection System Solutions?
              </h2>
              <p className="text-lg text-muted-foreground">
                Comprehensive expertise and proven track record in fire
                protection system integration
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="text-center">
                <CardHeader>
                  <Shield className="h-12 w-12 text-primary mx-auto mb-4" />
                  <CardTitle>Integrated Approach</CardTitle>
                  <CardDescription>
                    Complete system integration ensuring all components work
                    seamlessly together
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <Settings className="h-12 w-12 text-primary mx-auto mb-4" />
                  <CardTitle>Custom Engineering</CardTitle>
                  <CardDescription>
                    Tailored solutions designed specifically for your facility's
                    unique requirements
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <Users className="h-12 w-12 text-primary mx-auto mb-4" />
                  <CardTitle>Expert Team</CardTitle>
                  <CardDescription>
                    Certified engineers and technicians with extensive fire
                    protection experience
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <Award className="h-12 w-12 text-primary mx-auto mb-4" />
                  <CardTitle>Proven Results</CardTitle>
                  <CardDescription>
                    Track record of successful installations across diverse
                    industries and applications
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <CheckCircle className="h-12 w-12 text-primary mx-auto mb-4" />
                  <CardTitle>Quality Assurance</CardTitle>
                  <CardDescription>
                    Rigorous testing and commissioning processes ensuring
                    optimal system performance
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <Settings className="h-12 w-12 text-primary mx-auto mb-4" />
                  <CardTitle>Ongoing Support</CardTitle>
                  <CardDescription>
                    Comprehensive maintenance and support services to ensure
                    continued reliability
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Ready for a Complete Fire Protection Solution?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Let our experts design and implement a comprehensive fire
              protection system tailored to your facility's needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="text-lg px-8">
                <Link href="/contact">Schedule Consultation</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="text-lg px-8 bg-transparent"
              >
                <Link href="/projects">View Our Projects</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
