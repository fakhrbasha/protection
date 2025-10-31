'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Link } from '@/i18n/routing';
import { ArrowRight } from 'lucide-react';

export default function BrowseProducts({ t }: { t: any }) {
  const products = [
    {
      title: 'Fire Protection',
      image: '/image/product/A155S.png',
      link: '/products',
    },
    {
      title: 'Flanged Gate Valve',
      image: '/image/product/2.png',
      link: '/products',
    },
    {
      title: 'Valve Resilient Seat',
      image: '/image/product/DOC.png',
      link: '/products',
    },
    {
      title: 'Fire Fighting System',
      image: '/image/product/FireFighting.png',
      link: '/products',
    },
  ];

  return (
    <section className="relative py-24 overflow-hidden bg-gradient-to-b from-red-900/10 via-background to-background text-center">
      {/* 🔥 subtle glow background */}
      <div className="absolute inset-0  pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        {/* ✨ Title Animation */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-extrabold mb-6 text-primary"
        >
          {t('heading', { defaultValue: 'Browse Our Products' })}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-lg md:text-xl opacity-80 mb-14 max-w-2xl mx-auto"
        >
          {t('subheading', {
            defaultValue:
              'Explore our reliable fire safety equipment trusted by professionals worldwide.',
          })}
        </motion.p>

        {/* 🧯 Product Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {products.map((product, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="group relative rounded-2xl overflow-hidden bg-card border border-border shadow-lg hover:shadow-red-500/30 transition-all duration-500"
            >
              {/* 🔥 Product Image */}
              <div className="overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.title}
                  width={400}
                  height={300}
                  className="w-full h-80 object-contain bg-background transition-transform duration-700 group-hover:scale-110"
                />
              </div>

              {/* 🔲 Overlay (animated) */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end items-center p-6">
                <motion.h3
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  className="text-xl font-semibold text-white mb-3"
                >
                  {product.title}
                </motion.h3>

                <Button
                  size="sm"
                  variant="secondary"
                  asChild
                  className="bg-white text-red-600 hover:bg-red-100 font-semibold"
                >
                  <Link href={product.link} className="flex items-center gap-2">
                    {t('view', { defaultValue: 'View Details' })}
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
