import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  Calendar,
  MapPin,
  Building2,
  Users,
  Award,
  CheckCircle,
} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function ProjectsPage() {
  const featuredProjects = [
    {
      title: 'Cairo University Medical Center',
      category: 'Healthcare',
      location: 'Cairo, Egypt',
      year: '2024',
      value: '$2.5M',
      description:
        'Complete fire protection system installation including sprinklers, fire alarms, and emergency evacuation systems for the new medical complex.',
      image: '/hospital-fire-protection-system-installation.jpg',
      features: [
        'Advanced Fire Sprinkler System',
        'Intelligent Fire Alarm Network',
        'Emergency Evacuation Systems',
        '24/7 Monitoring Integration',
      ],
      status: 'Completed',
    },
    {
      title: 'Mall of Egypt Expansion',
      category: 'Commercial',
      location: 'Giza, Egypt',
      year: '2023',
      value: '$1.8M',
      description:
        'Comprehensive fire safety upgrade for the mall expansion including CCTV integration and advanced detection systems.',
      image: '/shopping-mall-fire-alarm-detection-system.jpg',
      features: [
        'Smart Fire Detection',
        'CCTV Security Integration',
        'Public Address Systems',
        'Smoke Management Systems',
      ],
      status: 'Completed',
    },
    {
      title: 'Suez Industrial Complex',
      category: 'Industrial',
      location: 'Suez, Egypt',
      year: '2024',
      value: '$3.2M',
      description:
        'Specialized fire suppression systems for chemical processing facility with foam-based protection systems.',
      image: '/industrial-factory-sprinkler-fire-suppression-syst.jpg',
      features: [
        'Foam Fire Suppression',
        'Explosion Prevention Systems',
        'Industrial Grade Detectors',
        'Remote Monitoring',
      ],
      status: 'In Progress',
    },
  ];

  const projectStats = [
    {
      label: 'Total Projects',
      value: '500+',
      icon: <Building2 className="h-6 w-6" />,
    },
    {
      label: 'Active Projects',
      value: '25',
      icon: <Users className="h-6 w-6" />,
    },
    {
      label: 'Project Value',
      value: '$50M+',
      icon: <Award className="h-6 w-6" />,
    },
    {
      label: 'Success Rate',
      value: '99.8%',
      icon: <CheckCircle className="h-6 w-6" />,
    },
  ];

  const projectCategories = [
    { name: 'Healthcare', count: 45, color: 'bg-red-500' },
    { name: 'Commercial', count: 62, color: 'bg-blue-500' },
    { name: 'Educational', count: 38, color: 'bg-green-500' },
    { name: 'Industrial', count: 29, color: 'bg-yellow-500' },
    { name: 'Residential', count: 156, color: 'bg-purple-500' },
    { name: 'Government', count: 23, color: 'bg-orange-500' },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary/10 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Our <span className="text-primary">Projects</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Discover how SESCO has protected Egypt's most important facilities
              with innovative fire safety solutions
            </p>

            {/* Project Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
              {projectStats.map((stat, index) => (
                <div
                  key={index}
                  className="bg-background/80 backdrop-blur rounded-lg p-4 border"
                >
                  <div className="flex items-center justify-center mb-2 text-primary">
                    {stat.icon}
                  </div>
                  <div className="text-2xl md:text-3xl font-bold text-primary">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Project Categories */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Project Categories
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We serve diverse industries with specialized fire protection
              solutions tailored to each sector's unique requirements
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {projectCategories.map((category, index) => (
              <Card
                key={index}
                className="text-center hover:shadow-lg transition-all duration-300 cursor-pointer group"
              >
                <CardContent className="p-6">
                  <div
                    className={`w-12 h-12 ${category.color} rounded-full mx-auto mb-4 flex items-center justify-center text-white font-bold text-lg group-hover:scale-110 transition-transform`}
                  >
                    {category.count}
                  </div>
                  <h3 className="font-semibold text-foreground mb-1">
                    {category.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">Projects</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Featured Projects
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore some of our most significant and innovative fire
              protection installations
            </p>
          </div>

          <div className="space-y-12">
            {featuredProjects.map((project, index) => (
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
                      src={project.image || '/placeholder.svg'}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute top-4 right-4">
                      <Badge
                        variant={
                          project.status === 'Completed'
                            ? 'default'
                            : 'secondary'
                        }
                      >
                        {project.status}
                      </Badge>
                    </div>
                  </div>
                  <div className="p-8 lg:p-12 flex flex-col justify-center">
                    <div className="flex flex-wrap gap-2 mb-4">
                      <Badge variant="outline">{project.category}</Badge>
                      <Badge variant="secondary">{project.year}</Badge>
                    </div>
                    <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
                      {project.title}
                    </h3>
                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-6">
                      <div className="flex items-center space-x-1">
                        <MapPin className="h-4 w-4" />
                        <span>{project.location}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Calendar className="h-4 w-4" />
                        <span>{project.year}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Award className="h-4 w-4" />
                        <span>{project.value}</span>
                      </div>
                    </div>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {project.description}
                    </p>
                    <div className="mb-6">
                      <h4 className="font-semibold text-foreground mb-3">
                        Key Features:
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {project.features.map((feature, featureIndex) => (
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
                    <Button variant="outline" className="w-fit bg-transparent">
                      View Project Details
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Ready to Start Your Next Project?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Let SESCO design and implement a comprehensive fire protection
              solution for your facility. Contact us today for a free
              consultation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="text-lg px-8">
                <Link href="/contact">Start Your Project</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="text-lg px-8 bg-transparent"
              >
                <Link href="/services">Explore Our Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
