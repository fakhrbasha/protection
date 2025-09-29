'use client';
import { motion } from 'motion/react';
import React from 'react';
import { ImagesSlider } from '@/components/ui/images-slider';
import { Link } from '@/i18n/routing';

export function ImagesSliderDemo() {
  const images = [
    'https://images.unsplash.com/photo-1485433592409-9018e83a1f0d?q=80&w=1814&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1483982258113-b72862e6cff6?q=80&w=3456&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1482189349482-3defd547e0e9?q=80&w=2848&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  ];
  return (
    <ImagesSlider className="h-[50rem]" images={images}>
      <motion.div
        initial={{
          opacity: 0,
          y: -80,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.6,
        }}
        className="z-50 flex flex-col justify-center items-center"
      >
        <motion.p className="font-bold text-xl md:text-6xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 py-4">
          Protection <br /> The right fire suppression system tailored to your
          business
          <p className="text-lg mt-5">
            We work with you to assess your requirements and identify the fire
            suppression system that best fits your application and business
            needs.
          </p>
        </motion.p>
        <Link href={'/projects'}>
          <button className="px-4 bg-red-800 cursor-pointer py-2 backdrop-blur-sm border border-red-800  text-white mx-auto text-center rounded-2xl relative mt-4">
            <span>Projects</span>
            {/* <div className="absolute inset-x-0  h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-emerald-500 to-transparent" /> */}
          </button>
        </Link>
      </motion.div>
    </ImagesSlider>
  );
}
