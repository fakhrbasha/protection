// pages/masna3-el-abd.tsx
'use client';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

const images = [
  '/image/Project/abd/1.jpg',
  '/image/Project/abd/2.jpg',
  '/image/Project/abd/3.jpg',
  '/image/Project/abd/4.jpg',
  '/image/Project/abd/5.jpg',
  '/image/Project/abd/6.jpg',
  '/image/Project/abd/7.jpg',
  '/image/Project/abd/8.jpg',
  '/image/Project/abd/9.jpg',
  '/image/Project/abd/10.jpg',
  '/image/Project/abd/11.jpg',
  '/image/Project/abd/12.jpg',
];

const Masna3ElAbdPage = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section className="py-20 w-full bg-background min-h-screen overflow-hidden">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-8">
          Masna3 El Abd Gallery
        </h1>
        <p className="text-center text-muted-foreground mb-12">
          Explore our fire safety equipment installations at Masna3 El Abd.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((src, idx) => (
            <motion.div
              key={idx}
              className="rounded-xl overflow-hidden shadow-lg border border-border cursor-pointer"
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 300 }}
              onClick={() => setSelectedImage(src)}
            >
              <Image
                src={src}
                alt={`Masna3 El Abd ${idx + 1}`}
                width={500}
                height={400}
                className="w-full h-[300px] object-cover"
              />
            </motion.div>
          ))}
        </div>

        {/* Lightbox */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedImage(null)}
            >
              <motion.img
                src={selectedImage}
                alt="Selected"
                className="max-h-[90vh] max-w-[90vw] rounded-lg shadow-2xl"
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.8 }}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Masna3ElAbdPage;
