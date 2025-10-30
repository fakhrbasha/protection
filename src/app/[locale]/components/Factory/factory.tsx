import React from 'react';
import { motion } from 'framer-motion';
import {
  Heart,
  Activity,
  ShieldCheck,
  Hospital,
  Network,
  BarChart3,
} from 'lucide-react';
import { Link } from '@/i18n/routing';
import { Button } from '@/components/ui/button';

const FactoryAndMall = () => {
  return (
    <section className="py-20 w-full bg-background">
      <div className="container mx-auto px-4">
        <div className="flex justify-center mb-4">
          <span className="px-4 py-2 text-sm font-semibold bg-foreground text-background rounded-full">
            PROTECTION
          </span>
        </div>

        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our Fire Safety Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Showcasing our fire safety equipment deployed in key industrial and
            commercial projects across Egypt.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Card - Masna3 El Abd */}
          <motion.div
            className="bg-card rounded-2xl overflow-hidden shadow-lg border border-border"
            whileHover={{ y: -5 }}
            transition={{ type: 'spring', stiffness: 400, damping: 10 }}
          >
            <div className="relative w-full">
              <img
                src="/image/project/a1.jpg"
                alt="Masna3 El Abd"
                className="w-full h-[400px]"
              />
              <span className="absolute top-10 left-10 px-3 py-1 text-xs font-semibold bg-blue-500 text-white rounded-full">
                El3abd
              </span>
            </div>

            <div className="p-8 md:p-10">
              <div className="flex items-center mb-4">
                <h3 className="text-2xl font-bold">Masna3 El Abd</h3>
                <p className="text-sm text-muted-foreground ml-3">
                  Located in Sadat City
                </p>
              </div>
              <p className="text-muted-foreground mb-6">
                Leading manufacturer of fire safety equipment, providing smart
                solutions for industrial and commercial safety.
              </p>

              <div className="grid grid-cols-2 gap-3 mb-6">
                <div className="flex items-center p-3 bg-blue-500/5 rounded-lg">
                  <Activity className="w-4 h-4 mr-2 text-blue-600" />
                  <span className="text-sm">Fire Safety Monitoring</span>
                </div>
                <div className="flex items-center p-3 bg-blue-500/5 rounded-lg">
                  <Hospital className="w-4 h-4 mr-2 text-blue-600" />
                  <span className="text-sm">
                    Equipment Coverage Across Departments
                  </span>
                </div>
                <div className="flex items-center p-3 bg-blue-500/5 rounded-lg">
                  <ShieldCheck className="w-4 h-4 mr-2 text-blue-600" />
                  <span className="text-sm">
                    Compliance with Safety Standards
                  </span>
                </div>
                <div className="flex items-center p-3 bg-blue-500/5 rounded-lg">
                  <Heart className="w-4 h-4 mr-2 text-blue-600" />
                  <span className="text-sm">Employee & Facility Safety</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <Link href={'/projects/abd'} className="w-full">
                  <Button className="px-6 py-3 w-full bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-900 transition-colors">
                    Explore Masna3 El Abd →
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>

          {/* Right Card - Ritzy Mall */}
          {/* Right Card - Ritzy Mall */}
          <motion.div
            className="bg-card rounded-2xl overflow-hidden shadow-lg border border-border"
            whileHover={{ y: -5 }}
            transition={{ type: 'spring', stiffness: 400, damping: 10 }}
          >
            <div className="relative w-full">
              <img
                src="/image/project/R1.jpg"
                alt="Ritzy Mall"
                className="w-full h-[400px]"
              />
              <span className="absolute top-10 left-10 px-3 py-1 text-xs font-semibold bg-purple-500 text-white rounded-full">
                Ritzy Mall
              </span>
            </div>

            <div className="p-8 md:p-10">
              <div className="flex items-center mb-4">
                <h3 className="text-2xl font-bold">Ritzy Mall</h3>
                <p className="text-sm text-muted-foreground ml-3">
                  Located in Sheikh Zayed
                </p>
              </div>
              <p className="text-muted-foreground mb-6">
                Implementing advanced fire safety equipment across commercial
                spaces, ensuring protection for shoppers and staff.
              </p>

              <div className="grid grid-cols-2 gap-3 mb-6">
                <div className="flex items-center p-3 bg-purple-500/5 rounded-lg">
                  <Activity className="w-4 h-4 mr-2 text-purple-600" />
                  <span className="text-sm">Fire Safety Monitoring</span>
                </div>
                <div className="flex items-center p-3 bg-purple-500/5 rounded-lg">
                  <Hospital className="w-4 h-4 mr-2 text-purple-600" />
                  <span className="text-sm">
                    Equipment Coverage in All Areas
                  </span>
                </div>
                <div className="flex items-center p-3 bg-purple-500/5 rounded-lg">
                  <ShieldCheck className="w-4 h-4 mr-2 text-purple-600" />
                  <span className="text-sm">
                    Compliance with Safety Standards
                  </span>
                </div>
                <div className="flex items-center p-3 bg-purple-500/5 rounded-lg">
                  <Heart className="w-4 h-4 mr-2 text-purple-600" />
                  <span className="text-sm">Visitor & Staff Safety</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <Link href={'/projects/ritzy'} className="w-full">
                  <Button className="px-6 py-3 w-full bg-purple-500 text-white font-semibold rounded-lg hover:bg-purple-900 transition-colors">
                    Explore Ritzy Mall →
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FactoryAndMall;
