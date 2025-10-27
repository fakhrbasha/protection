'use client';

import { motion } from 'framer-motion';
import { Users, Award, Clock } from 'lucide-react';

export default function CommitmentSection({ t }: { t: any }) {
  const icons = [<Users />, <Award />, <Clock />];

  return (
    <section className="relative py-24 bg-gradient-to-b from-background to-muted/40">
      {/* 💡 Subtle background texture */}
      <div className="absolute inset-0 bg-[url('/textures/pattern.svg')] opacity-5 bg-center bg-repeat"></div>

      <div className="container relative z-10 mx-auto px-6">
        {/* 🧱 Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t('commitment.heading')}
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            {t('commitment.description')}
          </p>
        </motion.div>

        {/* 🧱 Animated Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {t.raw('commitment.list').map((item: any, index: number) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="bg-card hover:bg-accent/10 transition-all duration-300 rounded-2xl p-8 text-center shadow-sm hover:shadow-lg"
            >
              <div className="flex justify-center mb-6">
                <div className="p-4 bg-primary/10 rounded-full text-primary group-hover:scale-110 transition-transform duration-300">
                  {icons[index]}
                </div>
              </div>

              <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
