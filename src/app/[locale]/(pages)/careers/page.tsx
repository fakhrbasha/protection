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
  MapPin,
  Award,
  Briefcase,
  GraduationCap,
  Heart,
  TrendingUp,
} from 'lucide-react';
import Link from 'next/link';

export default function CareersPage() {
  const jobOpenings = [
    {
      title: 'Fire Protection Engineer',
      department: 'Engineering',
      location: 'Cairo, Egypt',
      type: 'Full-time',
      experience: '3-5 years',
      description:
        'Design and implement fire protection systems for commercial and industrial projects.',
      requirements: [
        "Bachelor's degree in Mechanical/Electrical Engineering",
        'Experience with fire protection systems',
        'AutoCAD proficiency',
        'NFPA standards knowledge',
      ],
    },
    {
      title: 'Installation Technician',
      department: 'Operations',
      location: 'Alexandria, Egypt',
      type: 'Full-time',
      experience: '2-4 years',
      description:
        'Install and maintain fire alarm systems, sprinklers, and CCTV security systems.',
      requirements: [
        'Technical diploma or equivalent',
        'Hands-on installation experience',
        'Electrical systems knowledge',
        "Valid driver's license",
      ],
    },
    {
      title: 'Sales Representative',
      department: 'Sales',
      location: 'Giza, Egypt',
      type: 'Full-time',
      experience: '2-3 years',
      description:
        'Develop new business relationships and manage existing client accounts in fire protection sector.',
      requirements: [
        "Bachelor's degree in Engineering or Business",
        'Sales experience in B2B environment',
        'Excellent communication skills',
        'Knowledge of fire safety industry',
      ],
    },
    {
      title: 'Project Manager',
      department: 'Project Management',
      location: 'New Capital, Egypt',
      type: 'Full-time',
      experience: '5-7 years',
      description:
        'Lead fire protection projects from design phase through completion and commissioning.',
      requirements: [
        'PMP certification preferred',
        'Project management experience',
        'Fire protection industry knowledge',
        'Strong leadership skills',
      ],
    },
  ];

  const benefits = [
    {
      icon: <Heart className="h-6 w-6" />,
      title: 'Health Insurance',
      description: 'Comprehensive medical coverage for you and your family',
    },
    {
      icon: <TrendingUp className="h-6 w-6" />,
      title: 'Career Growth',
      description:
        'Clear advancement paths and professional development opportunities',
    },
    {
      icon: <GraduationCap className="h-6 w-6" />,
      title: 'Training Programs',
      description: 'Continuous learning and certification programs',
    },
    {
      icon: <Award className="h-6 w-6" />,
      title: 'Performance Bonuses',
      description: 'Competitive salary with performance-based incentives',
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary/10 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Build Your Career with{' '}
              <span className="text-primary">Protection</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Join Egypt's leading fire protection company and help us create
              safer environments for communities across the region
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-center">
              <div className="bg-background/80 backdrop-blur rounded-lg p-4 border">
                <div className="text-3xl font-bold text-primary">50+</div>
                <div className="text-sm text-muted-foreground">
                  Team Members
                </div>
              </div>
              <div className="bg-background/80 backdrop-blur rounded-lg p-4 border">
                <div className="text-3xl font-bold text-primary">15+</div>
                <div className="text-sm text-muted-foreground">
                  Years in Business
                </div>
              </div>
              <div className="bg-background/80 backdrop-blur rounded-lg p-4 border">
                <div className="text-3xl font-bold text-primary">95%</div>
                <div className="text-sm text-muted-foreground">
                  Employee Satisfaction
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Choose Protection?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We believe our people are our greatest asset. Join a company that
              values innovation, safety, and professional growth.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <Card
                key={index}
                className="text-center group hover:shadow-lg transition-all duration-300 border-2 hover:border-primary/20"
              >
                <CardHeader>
                  <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                    {benefit.icon}
                  </div>
                  <CardTitle className="text-xl mb-2">
                    {benefit.title}
                  </CardTitle>
                  <CardDescription>{benefit.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Current Openings */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Current Job Openings
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore exciting career opportunities and join our mission to
              provide limitless protection
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {jobOpenings.map((job, index) => (
              <Card
                key={index}
                className="hover:shadow-lg transition-all duration-300"
              >
                <CardHeader>
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <CardTitle className="text-xl mb-2">
                        {job.title}
                      </CardTitle>
                      <div className="flex flex-wrap gap-2 mb-3">
                        <Badge variant="secondary">{job.department}</Badge>
                        <Badge variant="outline">{job.type}</Badge>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
                    <div className="flex items-center space-x-1">
                      <MapPin className="h-4 w-4" />
                      <span>{job.location}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Briefcase className="h-4 w-4" />
                      <span>{job.experience}</span>
                    </div>
                  </div>
                  <CardDescription className="text-base mb-4">
                    {job.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mb-6">
                    <h4 className="font-semibold text-foreground mb-3">
                      Requirements:
                    </h4>
                    <ul className="space-y-2">
                      {job.requirements.map((req, reqIndex) => (
                        <li
                          key={reqIndex}
                          className="flex items-start space-x-2 text-sm text-muted-foreground"
                        >
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                          <span>{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Button className="w-full">Apply Now</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Application Process
              </h2>
              <p className="text-lg text-muted-foreground">
                Our streamlined hiring process ensures we find the right fit for
                both you and our team
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  1
                </div>
                <h3 className="font-semibold text-foreground mb-2">
                  Apply Online
                </h3>
                <p className="text-sm text-muted-foreground">
                  Submit your application and resume through our online portal
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  2
                </div>
                <h3 className="font-semibold text-foreground mb-2">
                  Initial Review
                </h3>
                <p className="text-sm text-muted-foreground">
                  Our HR team reviews your qualifications and experience
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  3
                </div>
                <h3 className="font-semibold text-foreground mb-2">
                  Interview
                </h3>
                <p className="text-sm text-muted-foreground">
                  Meet with our team to discuss your skills and career goals
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  4
                </div>
                <h3 className="font-semibold text-foreground mb-2">
                  Welcome Aboard
                </h3>
                <p className="text-sm text-muted-foreground">
                  Join the Protection family and start your career journey
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Ready to Start Your Career with Protection?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Don't see a position that matches your skills? Send us your resume
              and we'll keep you in mind for future opportunities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8">
                Send Your Resume
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="text-lg px-8 bg-transparent"
              >
                <Link href="/contact">Contact HR Department</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
