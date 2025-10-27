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

export default function ServicesPage() {
  const services = [
    {
      icon: Flame,
      title: 'Fire Fighting Systems',
      description:
        'Complete firefighting solutions including sprinkler systems, foam systems, and fire suppression.',
      features: [
        'Wet & Dry Sprinkler Systems',
        'Foam Fire Suppression',
        'CO2 Fire Suppression',
        'FM200 Clean Agent Systems',
        'Water Mist Systems',
        'Fire Hydrant Systems',
      ],
    },
    {
      icon: Bell,
      title: 'Fire Alarm Systems',
      description:
        'Advanced fire detection and alarm systems for early warning and emergency response.',
      features: [
        'Addressable Fire Alarm Systems',
        'Conventional Fire Alarm Systems',
        'Smoke Detection Systems',
        'Heat Detection Systems',
        'Manual Call Points',
        'Emergency Voice Systems',
      ],
    },
    {
      icon: Camera,
      title: 'CCTV & Security Systems',
      description:
        'Comprehensive security solutions with advanced surveillance and monitoring capabilities.',
      features: [
        'IP Camera Systems',
        'Analog CCTV Systems',
        'Access Control Systems',
        'Video Management Software',
        'Remote Monitoring',
        'Security Integration',
      ],
    },
    {
      icon: Settings,
      title: 'Installation & Commissioning',
      description:
        'Professional installation and commissioning services ensuring optimal system performance.',
      features: [
        'System Design & Engineering',
        'Professional Installation',
        'System Testing',
        'Performance Commissioning',
        'Documentation & Certification',
        'Training & Handover',
      ],
    },
    {
      icon: Wrench,
      title: 'Maintenance & Support',
      description:
        'Ongoing maintenance and support services to ensure continuous system reliability.',
      features: [
        'Preventive Maintenance',
        'Emergency Repairs',
        'System Upgrades',
        '24/7 Technical Support',
        'Spare Parts Supply',
        'Performance Monitoring',
      ],
    },
    {
      icon: Users,
      title: 'Training & Consultation',
      description:
        'Expert training and consultation services for fire safety and system operation.',
      features: [
        'Fire Safety Training',
        'System Operation Training',
        'Emergency Response Training',
        'Safety Consultation',
        'Code Compliance Review',
        'Risk Assessment',
      ],
    },
  ];

  const industries = [
    { name: 'Industrial Facilities', icon: Building },
    { name: 'Commercial Buildings', icon: Building },
    { name: 'Healthcare Facilities', icon: Shield },
    { name: 'Educational Institutions', icon: Users },
    { name: 'Hospitality Sector', icon: Building },
    { name: 'Government Buildings', icon: Shield },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-background via-background to-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-6">
              Our Services
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
              Comprehensive Fire Protection &{' '}
              <span className="text-primary">Safety Solutions</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed text-pretty">
              From design and installation to maintenance and support, SESCO
              provides complete fire protection and security solutions tailored
              to your specific needs.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Core Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
              Specialized solutions designed to protect lives and property with
              cutting-edge technology and expertise.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="h-full hover:shadow-lg transition-shadow"
              >
                <CardHeader>
                  <div className="mb-4 p-3 bg-primary/10 rounded-full w-fit">
                    <service.icon className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription className="text-base">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex items-center text-sm"
                      >
                        <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Industries We Serve
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
              Our expertise spans across various industries, providing tailored
              solutions for each sector's unique requirements.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {industries.map((industry, index) => (
              <Card
                key={index}
                className="text-center p-6 hover:shadow-md transition-shadow"
              >
                <industry.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold text-sm">{industry.name}</h3>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Process</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
              A systematic approach ensuring quality delivery from initial
              consultation to ongoing support.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Consultation & Assessment',
                description:
                  'We analyze your requirements and conduct thorough site assessments to understand your specific needs.',
              },
              {
                step: '02',
                title: 'Design & Engineering',
                description:
                  'Our expert engineers design customized solutions that comply with all relevant standards and codes.',
              },
              {
                step: '03',
                title: 'Installation & Testing',
                description:
                  'Professional installation followed by comprehensive testing to ensure optimal system performance.',
              },
              {
                step: '04',
                title: 'Support & Maintenance',
                description:
                  'Ongoing support and maintenance services to ensure your systems remain reliable and effective.',
              },
            ].map((process, index) => (
              <div key={index} className="text-center">
                <div className="mb-6">
                  <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                    {process.step}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">
                    {process.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {process.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Protect Your Assets?
          </h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto text-pretty">
            Contact our experts today for a comprehensive consultation and
            customized fire protection solution.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/contact" className="flex items-center space-x-2">
                <span>Get Free Consultation</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent"
              asChild
            >
              <Link href="/gallery">View Our Work</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
