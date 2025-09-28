import { useTranslations } from 'next-intl';
import { getMessages, getTranslations } from 'next-intl/server';
import Link from 'next/link';
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
  Eye,
  Wrench,
  CheckCircle,
  ArrowRight,
  Users,
  Award,
  Clock,
  Phone,
} from 'lucide-react';

export default async function Home({ params }: { params: { locale: string } }) {
  // const locale = (await params).locale;
  const t = await getTranslations('Home');
  return (
    <>
      <div className="flex flex-col">
        {/* Hero Section */}
        <section className="relative min-h-[80vh] flex items-center justify-center bg-gradient-to-br from-background via-background to-muted/30">
          <div className="absolute inset-0 bg-[url('/industrial-fire-protection-equipment-facility.jpg')] bg-cover bg-center opacity-5" />
          <div className="container mx-auto px-4 text-center relative z-10">
            <Badge variant="secondary" className="mb-6">
              Established 2008 • Trusted in Egypt
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">
              <span className="text-primary">Limitless Protection</span>
              <br />
              for Life and Property
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto text-pretty">
              Leading fire protection and safety equipment company in Egypt,
              specializing in comprehensive firefighting systems, security
              solutions, and life safety equipment since 2008.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/contact" className="flex items-center space-x-2">
                  <Phone className="h-5 w-5" />
                  <span>Get Free Quote</span>
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/services" className="flex items-center space-x-2">
                  <span>Our Services</span>
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
                <div className="text-sm opacity-90">Years of Excellence</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold mb-2">500+</div>
                <div className="text-sm opacity-90">Projects Completed</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold mb-2">100%</div>
                <div className="text-sm opacity-90">Safety Compliance</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold mb-2">24/7</div>
                <div className="text-sm opacity-90">Support Available</div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Overview */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Our Core Services
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
                Comprehensive fire protection and safety solutions designed to
                protect lives and property across Egypt.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="group hover:shadow-lg transition-all duration-300">
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit group-hover:bg-primary/20 transition-colors">
                    <Flame className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-lg">
                    Fire Protection Systems
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center">
                    Complete firefighting solutions including sprinkler systems,
                    suppression systems, and fire pumps.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-lg transition-all duration-300">
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4 p-3 bg-accent/10 rounded-full w-fit group-hover:bg-accent/20 transition-colors">
                    <Shield className="h-8 w-8 text-accent" />
                  </div>
                  <CardTitle className="text-lg">Fire Alarm Systems</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center">
                    Advanced addressable fire detection and alarm systems for
                    early warning and emergency response.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-lg transition-all duration-300">
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit group-hover:bg-primary/20 transition-colors">
                    <Eye className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-lg">CCTV & Security</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center">
                    Professional security camera systems and integrated security
                    solutions for comprehensive protection.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-lg transition-all duration-300">
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4 p-3 bg-accent/10 rounded-full w-fit group-hover:bg-accent/20 transition-colors">
                    <Wrench className="h-8 w-8 text-accent" />
                  </div>
                  <CardTitle className="text-lg">
                    Maintenance & Support
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center">
                    Ongoing maintenance, testing, and commissioning services to
                    ensure optimal system performance.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Why Choose ProtectionCO */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Why Choose Protection?
                </h2>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  As Egypt's trusted fire protection specialist, we combine
                  international standards with local expertise to deliver
                  unparalleled safety solutions.
                </p>

                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold mb-1">
                        Certified Excellence
                      </h3>
                      <p className="text-muted-foreground">
                        Registered with Egyptian Federation for Construction and
                        Building Contractors (EFCBC)
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold mb-1">Premium Partners</h3>
                      <p className="text-muted-foreground">
                        Working with world leaders: NAFFCO, SFFECO, NATIONAL,
                        GLOBE, POTTER, and APOLLO
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold mb-1">Complete Solutions</h3>
                      <p className="text-muted-foreground">
                        From design and engineering to installation,
                        maintenance, and training
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold mb-1">
                        Standards Compliance
                      </h3>
                      <p className="text-muted-foreground">
                        Committed to international standards and codes in all
                        our projects
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="aspect-square bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl p-8">
                  <img
                    src="/professional-fire-safety-engineer-inspecting-equip.jpg"
                    alt="ProtectionCO professional inspecting fire safety equipment"
                    className="w-full h-full object-cover rounded-xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Company Highlights */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Our Commitment
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
                Dedicated to providing world-class fire protection solutions
                that save lives and protect property.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="mx-auto mb-6 p-4 bg-primary/10 rounded-full w-fit">
                  <Users className="h-10 w-10 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Expert Team</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Specialized crew with unparalleled expertise in fire safety
                  and control systems across Egypt.
                </p>
              </div>

              <div className="text-center">
                <div className="mx-auto mb-6 p-4 bg-accent/10 rounded-full w-fit">
                  <Award className="h-10 w-10 text-accent" />
                </div>
                <h3 className="text-xl font-semibold mb-3">
                  Quality Assurance
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Committed to quality, safety, and environmental management
                  systems with continuous improvement.
                </p>
              </div>

              <div className="text-center">
                <div className="mx-auto mb-6 p-4 bg-primary/10 rounded-full w-fit">
                  <Clock className="h-10 w-10 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">
                  Long-term Partnership
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Serving clients for decades with ongoing maintenance, support,
                  and commitment to workplace safety.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Secure Your Property?
            </h2>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto text-pretty">
              Get a comprehensive fire protection asProtectionsment and
              customized safety solution for your facility.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <Link href="/contact" className="flex items-center space-x-2">
                  <Phone className="h-5 w-5" />
                  <span>Contact Us Today</span>
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent"
                asChild
              >
                <Link href="/about">Learn More About ProtectionCO</Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
      )
    </>
  );
}
