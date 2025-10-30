'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import FactoryAndMall from '../../components/Factory/factory';
import { Button } from '@/components/ui/button';
import { Link } from '@/i18n/routing';

export default function ProjectsPage() {
  return (
    <div className="bg-white text-black min-h-screen">
      {/* ===== HERO SECTION ===== */}
      <div className="relative w-full h-[70vh] overflow-hidden">
        <motion.div
          initial={{ scale: 1.2, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
          className="absolute inset-0"
        >
          <Image
            src="/image/Hero1.png"
            alt="Projects Hero"
            fill
            className="object-cover brightness-[0.4]"
            priority
          />
        </motion.div>

        <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-6">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-6xl md:text-7xl font-extrabold tracking-tight mb-4"
          >
            مشاريعنا
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 1 }}
            className="text-lg md:text-2xl max-w-3xl text-gray-200"
          >
            استعرض إنجازاتنا في مختلف القطاعات، حيث الجودة والإتقان في كل مشروع
            قمنا بتنفيذه.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="absolute bottom-6 left-1/2 -translate-x-1/2 text-sm text-gray-400"
        >
          Scroll Down ↓
        </motion.div>
      </div>

      {/* ===== PROJECTS SECTION ===== */}

      <FactoryAndMall />
      {/* ===== ADDITIONAL SECTIONS ===== */}
      <div className="container mx-auto px-4 mt-16">
        <div className="bg-gray-50 p-12 rounded-2xl shadow-lg text-center flex flex-col items-center gap-6">
          <h2 className="text-3xl font-bold mb-4">More Projects & Clients</h2>
          <p className="text-gray-600 max-w-2xl mb-6">
            We have successfully completed numerous fire safety and protection
            projects across Egypt. Check out our galleries and discover our
            satisfied clients.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href={'/gallery'}>
              <Button className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors">
                Show Protection Gallery
              </Button>
            </Link>
            <Link href={'/clients'}>
              <Button className="px-6 py-3 bg-gray-200 text-black font-semibold rounded-lg hover:bg-gray-300 transition-colors">
                Our Clients
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
