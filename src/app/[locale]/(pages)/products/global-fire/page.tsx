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
  Globe,
  Shield,
  Award,
  CheckCircle,
  Building2,
  Factory,
} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function GlobalFireEquipmentPage() {
  const globalBrands = [
    {
      name: 'NAFFCO',
      country: 'UAE',
      speciality: 'Fire Fighting Equipment',
      description:
        'Leading manufacturer of fire protection and safety equipment in the Middle East.',
      products: [
        'Fire Pumps',
        'Fire Trucks',
        'Foam Systems',
        'Fire Extinguishers',
      ],
      image: '/industrial-fire-protection-equipment-facility.jpg',
    },
    {
      name: 'SFFECO',
      country: 'UAE',
      speciality: 'Fire Suppression Systems',
      description:
        'Specialized in advanced fire suppression and detection systems for industrial applications.',
      products: [
        'Gas Suppression',
        'Water Mist Systems',
        'Fire Detectors',
        'Control Panels',
      ],
      image: '/professional-fire-safety-engineer-inspecting-equip.jpg',
    },
    {
      name: 'Tyco Fire Protection',
      country: 'USA',
      speciality: 'Sprinkler Systems',
      description:
        'Global leader in fire sprinkler systems and water-based fire protection solutions.',
      products: [
        'Sprinkler Heads',
        'Valves',
        'Pipe Fittings',
        'Control Systems',
      ],
      image: '/hospital-fire-protection-system-installation.jpg',
    },
  ];

  const productCategories = [
    {
      title: 'Fire Detection Systems',
      icon: <Shield className="h-8 w-8" />,
      brands: ['Honeywell', 'Siemens', 'Bosch', 'Notifier'],
      description:
        'Advanced smoke, heat, and flame detection systems from leading global manufacturers',
    },
    {
      title: 'Suppression Systems',
      icon: <Factory className="h-8 w-8" />,
      brands: ['Ansul', 'Kidde', 'Fike', 'Marioff'],
      description:
        'Water, foam, gas, and chemical suppression systems for all hazard types',
    },
    {
      title: 'Fire Pumps & Equipment',
      icon: <Building2 className="h-8 w-8" />,
      brands: ['Grundfos', 'Pentair', 'Xylem', 'Aurora'],
      description:
        'High-performance fire pumps and mechanical equipment for water supply systems',
    },
  ];

  const certifications = [
    'UL Listed',
    'FM Approved',
    'CE Marked',
    'LPCB Certified',
    'VdS Approved',
    'NFPA Compliant',
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary/10 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center mb-6">
              <Globe className="h-12 w-12 text-primary mr-4" />
              <h1 className="text-4xl md:text-6xl font-bold text-foreground">
                Global Fire <span className="text-primary">Equipment</span>
              </h1>
            </div>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Premium fire protection equipment from world-renowned
              manufacturers, ensuring the highest standards of safety and
              reliability
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-2xl mx-auto">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className="bg-background/80 backdrop-blur rounded-lg px-3 py-2 border text-sm font-medium"
                >
                  {cert}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Global Brands */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Global Partners
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We partner with the world's leading fire protection manufacturers
              to bring you the most advanced and reliable equipment
            </p>
          </div>

          <div className="space-y-12">
            {globalBrands.map((brand, index) => (
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
                      src={brand.image || '/placeholder.svg'}
                      alt={brand.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-8 lg:p-12 flex flex-col justify-center">
                    <div className="flex items-center gap-4 mb-4">
                      <h3 className="text-2xl lg:text-3xl font-bold text-foreground">
                        {brand.name}
                      </h3>
                      <Badge variant="outline">{brand.country}</Badge>
                    </div>
                    <Badge variant="secondary" className="w-fit mb-4">
                      {brand.speciality}
                    </Badge>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {brand.description}
                    </p>

                    <div className="mb-6">
                      <h4 className="font-semibold text-foreground mb-3">
                        Key Products:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {brand.products.map((product, productIndex) => (
                          <Badge
                            key={productIndex}
                            variant="outline"
                            className="text-xs"
                          >
                            {product}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <Button>View Products</Button>
                      <Button variant="outline">Request Catalog</Button>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Equipment Categories
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive range of fire protection equipment from trusted
              global manufacturers
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {productCategories.map((category, index) => (
              <Card
                key={index}
                className="text-center group hover:shadow-lg transition-all duration-300 border-2 hover:border-primary/20"
              >
                <CardHeader>
                  <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                    {category.icon}
                  </div>
                  <CardTitle className="text-xl mb-4">
                    {category.title}
                  </CardTitle>
                  <CardDescription className="mb-6">
                    {category.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mb-6">
                    <h4 className="font-semibold text-foreground mb-3">
                      Featured Brands:
                    </h4>
                    <div className="flex flex-wrap gap-2 justify-center">
                      {category.brands.map((brand, brandIndex) => (
                        <Badge
                          key={brandIndex}
                          variant="secondary"
                          className="text-xs"
                        >
                          {brand}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <Button variant="outline" className="w-full bg-transparent">
                    Explore Products
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Global Equipment */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Why Choose Global Equipment?
              </h2>
              <p className="text-lg text-muted-foreground">
                Access to the world's best fire protection technology with local
                support and expertise
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card className="text-center">
                <CardHeader>
                  <Award className="h-12 w-12 text-primary mx-auto mb-4" />
                  <CardTitle className="text-lg">Proven Quality</CardTitle>
                  <CardDescription>
                    Equipment from manufacturers with decades of proven
                    performance worldwide
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <Shield className="h-12 w-12 text-primary mx-auto mb-4" />
                  <CardTitle className="text-lg">Latest Technology</CardTitle>
                  <CardDescription>
                    Access to cutting-edge fire protection innovations and smart
                    systems
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <CheckCircle className="h-12 w-12 text-primary mx-auto mb-4" />
                  <CardTitle className="text-lg">Full Compliance</CardTitle>
                  <CardDescription>
                    All equipment meets international standards and local
                    regulatory requirements
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <Globe className="h-12 w-12 text-primary mx-auto mb-4" />
                  <CardTitle className="text-lg">Global Warranty</CardTitle>
                  <CardDescription>
                    Comprehensive warranty coverage with global manufacturer
                    support
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
              Need Global Fire Protection Equipment?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Our technical team can help you select the right global equipment
              for your specific requirements and ensure proper integration.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="text-lg px-8">
                <Link href="/contact">Get Equipment Quote</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="text-lg px-8 bg-transparent"
              >
                <Link href="/products/Protection-fire-product">
                  View Protection Products
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
