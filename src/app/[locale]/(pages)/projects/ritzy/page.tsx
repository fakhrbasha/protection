// pages/ritzy-mall.tsx
'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

const images = [
  '/image/project/ritzy/1.jpg',
  '/image/project/ritzy/2.jpg',
  '/image/project/ritzy/3.jpg',
  '/image/project/ritzy/4.jpg',
  '/image/project/ritzy/5.jpg',
  '/image/project/ritzy/6.jpg',
  '/image/project/ritzy/7.jpg',
  '/image/project/ritzy/8.jpg',
  '/image/project/ritzy/9.jpg',
  '/image/project/ritzy/10.jpg',
  '/image/project/ritzy/11.jpg',
  '/image/project/ritzy/12.jpg',
];

const RitzyMallPage = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section className="py-20 w-full bg-background min-h-screen">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-8">
          Ritzy Mall Gallery
        </h1>
        <p className="text-center text-muted-foreground mb-12">
          Showcasing our fire safety equipment installations at Ritzy Mall,
          Sheikh Zayed.
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
                alt={`Ritzy Mall ${idx + 1}`}
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

export default RitzyMallPage;
