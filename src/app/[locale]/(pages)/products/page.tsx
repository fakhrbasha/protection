'use client';

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { FileText, ArrowRight } from 'lucide-react';

type Product = {
  id: string;
  title_ar: string;
  title_en: string;
  subtitle: string;
  image?: string;
  pdf: string;
  specs: { label: string; value: string }[];
};

const PRODUCTS: Product[] = [
  // ==== المنتجات الأصلية ====
  {
    id: 'A155S',
    title_ar: 'صمام تخفيض ضغط زاوية - سلسلة A155S',
    title_en: 'Pressure Restricting Angle Valve (A155S Series)',
    subtitle:
      'صمام زاوية لتقليل الضغط مزود بنظام هيدرولاتور – مناسب لخراطيم الحريق وأنظمة المواسير الرأسية. يتضمن بيانات أداء على نمط FM/UL.',
    image: '/image/product/A155S.png',
    pdf: '/pdf/A155S.pdf',
    specs: [
      { label: 'المقاس', value: '1½"' },
      {
        label: 'Cv',
        value: 'Set1: 7 | Set2: 10.09 | Set3: 16.63 | F.O: 28.00',
      },
      {
        label: 'الوظيفة',
        value: 'تقليل ضغط التدفق الخارج للحفاظ على الاستقرار',
      },
      { label: 'المعايير', value: 'ISO 9001 / ISO 14001 / OHSAS 18001' },
    ],
  },
  {
    id: 'J282',
    title_ar: 'صمام تحديد ضغط الخرطوم - موديل J282',
    title_en: 'Pressure Restricting Hose Valve (J282)',
    subtitle:
      'صمام لتحديد وضبط ضغط الخرطوم معتمد من FM و UL. مناسب لأنظمة المواسير الرأسية ووصلات المضخات.',
    image: '/image/product/2.png',
    pdf: '/pdf/DOC-20220815-WA0030..pdf',
    specs: [
      { label: 'الأحجام', value: `1½", 2½"` },
      { label: 'أقصى ضغط تشغيل', value: '175 psi (1205 kPa)' },
      { label: 'المادة', value: 'Bronze / Ductile Iron' },
    ],
  },
  {
    id: 'VIKING-D1-G1',
    title_ar: 'صمام منع الرجوع - موديل D-1 & G-1',
    title_en: 'Rubber-faced Swing Check Valve (D-1 & G-1)',
    subtitle:
      'صمام عالي الكفاءة لمنع الرجوع لأنظمة الإطفاء – جسم من الحديد المطيل، قابل للتركيب أفقيًا أو رأسيًا، معتمد من FM و cULus.',
    image: '/image/product/DOC.png',
    pdf: '/pdf/DOC-20220815-WA0031..pdf',
    specs: [
      { label: 'الأحجام', value: `2½", 3", 4", 6", 8"` },
      { label: 'أقصى ضغط تشغيل', value: '300 psi (20.7 bar)' },
      { label: 'ضغط الاختبار', value: '600 psi (41.4 bar)' },
      { label: 'الخامة', value: 'Ductile Iron, Rubber-faced internals' },
    ],
  },
  {
    id: 'FG-OSY-GATE',
    title_ar: 'صمام بوابة OS&Y - موديل FGO907',
    title_en: 'Fireguard OS&Y Gate Valve (FGO907)',
    subtitle:
      'صمام بوابة بنظام OS&Y، مصنوع من الحديد الزهر المطيل ومطلي بالإيبوكسي، مصمم لأنظمة مكافحة الحريق حتى ضغط 300 PSI.',
    image: '/image/product/Product4.png',
    pdf: '/pdf/FG OS&Y GATE Valve.pdf',
    specs: [
      { label: 'الضغط', value: '250 / 300 PSI' },
      { label: 'المعيار', value: 'AWWA C509' },
      { label: 'درجة الحرارة', value: '160°F / 71°C' },
    ],
  },

  // ==== المنتجات الجديدة من ملفات PDF ====
  {
    id: 'TY-B',
    title_ar: 'رشاش مياه – سلسلة TY-B',
    title_en: 'Tyco Series TY-B Sprinkler (Upright & Pendent, K=5.6)',
    subtitle:
      'رشاش إطفاء حريق قياسي الاستجابة والتغطية، متاح بتصميمين: رأسي ومعلق. يستخدم في المنشآت التجارية والصناعية مثل الفنادق والمصانع ومراكز التسوق.',
    image: '/image/product/TYP.png',
    pdf: '/pdf/مستند من Ahmed Elbably.pdf',
    specs: [
      { label: 'النوع', value: 'Upright (TY315) / Pendent (TY325)' },
      {
        label: 'الضغط الأقصى',
        value: '175 psi (12.1 bar) | 250 psi (17.2 bar UL فقط)',
      },
      {
        label: 'درجات الحرارة',
        value: '135°F / 155°F / 175°F / 200°F / 286°F / 360°F',
      },
      {
        label: 'الخامة',
        value: 'Bronze, Stainless Steel, Brass/Copper, Glass Bulb',
      },
    ],
  },
  {
    id: 'J168',
    title_ar: 'رشاش مياه رأسي – موديل J168',
    title_en: 'Reliable Model J168 Upright Sprinkler (K16.8)',
    subtitle:
      'رشاش قياسي الاستجابة والتغطية، يستخدم في أنظمة مكافحة الحرائق لتطبيقات التخزين وغير التخزين. معتمد من FM و UL.',
    image: '/image/product/j168.png',
    pdf: '/pdf/مستند من Aahmed Elbably.pdf',
    specs: [
      { label: 'النمط', value: 'Upright' },
      { label: 'الوصلة', value: '3/4” NPT or ISO 7-R3/4' },
      { label: 'الخامة', value: 'Brass Alloy, Bronze, PTFE Seal' },
      {
        label: 'درجات الحرارة',
        value: '165°F / 212°F / 286°F (74°C / 100°C / 141°C)',
      },
      { label: 'الاعتمادات', value: 'FM Approved, cULus Listed' },
    ],
  },
  {
    id: 'VSR-F',
    title_ar: 'مفتاح تدفق المياه – موديل VSR-F',
    title_en: 'Potter VSR-F Vane Type Waterflow Alarm Switch with Retard',
    subtitle:
      'مفتاح تدفق ميكانيكي يستخدم لمراقبة تدفق المياه في أنظمة الرش الآلي. يحتوي على مفتاحي SPDT ونظام تأخير هوائي قابل للتعديل.',
    image: '/image/product/VSR.png',
    pdf: '/pdf/مستند من Aehmed Elbably.pdf',
    specs: [
      { label: 'الضغط التشغيلي', value: 'حتى 450 PSI (31 BAR)' },
      { label: 'معدل التدفق الأدنى للتنبيه', value: '10 GPM (38 LPM)' },
      { label: 'السرعة القصوى للنبضة', value: '18 FPS (5.5 m/s)' },
      { label: 'الجهد والتيار', value: '15A عند 125/250VAC أو 2A عند 30VDC' },
      { label: 'الأحجام المتاحة', value: '2" إلى 8" (50mm إلى 200mm)' },
      { label: 'الاعتمادات', value: 'UL, ULC, CSFM, FM, LPCB, NYMEA, CE' },
    ],
  },

  // ==== المنتجات المستخرجة من ملفات PDF الجديدة ====
  {
    id: 'R250D-U',
    title_ar: 'صمام كروي نحاسي - موديل R250D-U',
    title_en: 'Giacomini R250D-U Brass Ball Valve',
    subtitle:
      'صمام كروي بنهايات لولبية داخلية (NPT). مناسب لأنظمة المياه للتدفئة والتبريد والغازات غير الخطرة والهيدروكربونات السائلة. يتميز بمقبض فولاذي مطلي ضد التآكل وساق مزدوج الحلقات.',
    image: '/image/product/R250D.png',
    pdf: '/pdf/مستند من Ahmed Elbagbly.pdf',
    specs: [
      { label: 'المادة', value: 'Brass UNI EN 12165 CW617N' },
      { label: 'درجات الحرارة', value: '-20°C إلى 185°C' },
      {
        label: 'الضغط الأقصى',
        value:
          '42 بار (1/4” إلى 3/4”)، 35 بار (1” إلى 2”)، 28 بار (2½” إلى 4”)',
      },
      {
        label: 'الاستخدام',
        value: 'ماء، غازات غير خطرة، هيدروكربونات سائلة',
      },
      { label: 'الاعتمادات', value: 'Giacomini S.p.A – إيطاليا' },
    ],
  },
  {
    id: 'J282-NEW',
    title_ar: 'صمام تحديد ضغط الخرطوم - موديل J282 (موسع)',
    title_en: 'Pressure Restricting Hose Valve (Model J282)',
    subtitle:
      'صمام زاوية لتحديد ضغط المياه في أنظمة مكافحة الحرائق، متاح بمقاسات 1½ بوصة و2½ بوصة. معتمد من FM وUL ومناسب لضغوط التشغيل حتى 175 psi.',
    image: '/image/product/J282.png',
    pdf: '/pdf/مستند من Ahmefd Elbably.pdf',
    specs: [
      { label: 'المقاسات', value: '1½", 2½"' },
      { label: 'الضغط الأقصى للتشغيل', value: '175 psi (1205 kPa)' },
      {
        label: 'نوع التوصيل',
        value: 'Female × Male أو Female × Female',
      },
      {
        label: 'الشركة المصنعة',
        value: 'Ningbo Huacheng Valve Co. Ltd – الصين',
      },
      { label: 'الاعتمادات', value: 'FM Approved, UL Listed' },
    ],
  },
  {
    id: 'VIKING-D1-G1-NEW',
    title_ar: 'صمام منع الرجوع - موديل D-1 & G-1 (Viking)',
    title_en: 'Viking Swing Check Valve (Models D-1 & G-1)',
    subtitle:
      'صمام منع رجوع مطاطي عالي الكفاءة من شركة Viking، مصنوع من الحديد المطيل ومناسب لأنظمة مكافحة الحريق. يمكن تركيبه أفقيًا أو رأسيًا.',
    image: '/image/product/viking.png',
    pdf: '/pdf/مستند منs Ahmed Elbably.pdf',
    specs: [
      { label: 'الأحجام', value: '2½", 3", 4", 6", 8"' },
      { label: 'الضغط الأقصى للتشغيل', value: '300 psi (20.7 bar)' },
      { label: 'الضغط الاختباري', value: '600 psi (41.4 bar)' },
      {
        label: 'الخامة',
        value: 'Ductile Iron Body, Brass Seat, Rubber-faced Clapper',
      },
      {
        label: 'الاعتمادات',
        value: 'FM Approved, UL Listed, NYC MEA 89-92-E Vol. XI',
      },
    ],
  },
  // ==== كروت إضافية (بدون صور) ====
  {
    id: 'EXTRA-1',
    title_ar: 'منتجات إضافية',
    title_en: 'Additional Products',
    subtitle: 'مجموعة إضافية من المنتجات المدرجة ضمن ملفات الكتالوج.',
    pdf: '/pdf/big.pdf',
    specs: [],
  },
  {
    id: 'EXTRA-2',
    title_ar: 'منتجات إضافية',
    title_en: 'Additional Products',
    subtitle: 'مجموعة إضافية من المنتجات المدرجة ضمن ملفات الكتالوج.',
    pdf: '/pdf/big2.pdf',
    specs: [],
  },
  {
    id: 'EXTRA-3',
    title_ar: 'منتجات إضافية',
    title_en: 'Additional Products',
    subtitle: 'مجموعة إضافية من المنتجات المدرجة ضمن ملفات الكتالوج.',
    pdf: '/pdf/big3.pdf',
    specs: [],
  },
];

export default function ProductsPage() {
  const [openPdf, setOpenPdf] = useState<{ src: string; title: string } | null>(
    null
  );

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpenPdf(null);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-black dark:to-black text-foreground">
      {/* HERO */}
      <section className="relative h-[60vh] flex items-center justify-center text-center overflow-hidden">
        <Image
          src="/image/careHero.png"
          alt="Fire protection valves"
          fill
          className="object-cover brightness-[0.65]"
        />
        <div className="absolute inset-0 bg-black/40" />
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-white px-6"
        >
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4">
            حلول الصمامات وأنظمة مكافحة الحريق
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            منتجات معتمدة من FM & UL – تصميم هندسي لضمان الأداء الأمثل.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <Button
              asChild
              size="lg"
              className="bg-white text-red-700 hover:bg-gray-100 font-semibold px-8"
            >
              <Link href="#catalog">عرض الكتالوجات</Link>
            </Button>
          </div>
        </motion.div>
      </section>

      {/* PRODUCTS */}
      <section id="catalog" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold mb-3">
              منتجاتنا المميزة
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              اكتشف مواصفات منتجاتنا الفنية، الاعتمادات، وقم بتحميل كتالوج PDF
              مباشرة.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {PRODUCTS.map((p) => (
              <motion.div
                key={p.id}
                whileHover={{ scale: 1.01 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              >
                <Card
                  className={`overflow-hidden rounded-3xl shadow-md hover:shadow-2xl transition-all duration-300 bg-white dark:bg-gray-800 flex flex-col ${
                    p.image ? 'h-[550px]' : 'h-auto'
                  }`}
                >
                  {p.image ? (
                    <div className="grid md:grid-cols-2 h-full">
                      <div className="relative h-64 md:h-auto">
                        <Image
                          src={p.image}
                          alt={p.title_en}
                          fill
                          className="object-cover transition-transform duration-500 hover:scale-105"
                        />
                        <div className="absolute top-3 left-3 bg-black/60 text-white text-xs px-3 py-1 rounded">
                          {p.id}
                        </div>
                      </div>

                      <div className="p-6 flex flex-col justify-between">
                        <div>
                          <h3 className="text-xl font-bold mb-1 text-gray-900 dark:text-white">
                            {p.title_ar}
                          </h3>
                          <h4 className="text-sm text-gray-500 mb-3">
                            {p.title_en}
                          </h4>
                          <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 leading-relaxed line-clamp-3">
                            {p.subtitle}
                          </p>
                          <div className="grid grid-cols-2 gap-y-2 text-sm">
                            {p.specs.map((s, idx) => (
                              <div key={idx}>
                                <span className="text-gray-500">{s.label}</span>
                                <br />
                                <span className="font-medium text-gray-900 dark:text-gray-100">
                                  {s.value}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="flex flex-wrap gap-3 mt-6">
                          <Button
                            onClick={() =>
                              setOpenPdf({
                                src: p.pdf,
                                title: `${p.id} — ${p.title_en}`,
                              })
                            }
                            className="bg-red-600 hover:bg-red-700 text-white flex items-center gap-2"
                          >
                            <FileText className="w-4 h-4" />
                            عرض الكتالوج
                          </Button>
                          <a
                            href={p.pdf}
                            download
                            className="inline-flex items-center gap-2 text-sm font-medium text-red-700 hover:text-red-800"
                          >
                            تحميل PDF <ArrowRight className="w-4 h-4" />
                          </a>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="p-8 text-center flex flex-col justify-between h-full">
                      <div>
                        <h3 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">
                          {p.title_ar}
                        </h3>
                        <h4 className="text-sm text-gray-500 mb-3">
                          {p.title_en}
                        </h4>
                        <p className="text-gray-600 dark:text-gray-300 text-sm mb-6">
                          {p.subtitle}
                        </p>
                      </div>
                      <div className="flex justify-center gap-3">
                        <Button
                          onClick={() =>
                            setOpenPdf({
                              src: p.pdf,
                              title: `${p.id} — ${p.title_en}`,
                            })
                          }
                          className="bg-red-600 hover:bg-red-700 text-white flex items-center gap-2"
                        >
                          <FileText className="w-4 h-4" />
                          عرض الكتالوج
                        </Button>
                        <a
                          href={p.pdf}
                          download
                          className="inline-flex items-center gap-2 text-sm font-medium text-red-700 hover:text-red-800"
                        >
                          تحميل PDF <ArrowRight className="w-4 h-4" />
                        </a>
                      </div>
                    </div>
                  )}
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PDF Modal */}
      <AnimatePresence>
        {openPdf && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <div
              className="absolute inset-0 bg-black/70 backdrop-blur-sm"
              onClick={() => setOpenPdf(null)}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative z-10 w-full max-w-5xl bg-white dark:bg-gray-900 rounded-2xl shadow-2xl overflow-hidden"
            >
              <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-800">
                <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  {openPdf.title}
                </h4>
                <div className="flex gap-2">
                  <a
                    href={openPdf.src}
                    download
                    className="px-3 py-1 rounded bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-sm"
                  >
                    تحميل
                  </a>
                  <button
                    onClick={() => setOpenPdf(null)}
                    className="px-3 py-1 rounded bg-red-600 hover:bg-red-700 text-white text-sm"
                  >
                    إغلاق
                  </button>
                </div>
              </div>
              <div className="h-[80vh]">
                <iframe
                  src={openPdf.src}
                  title={openPdf.title}
                  className="w-full h-full"
                  style={{ border: 'none' }}
                />
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
      {/* SECTIONS AFTER PRODUCTS */}
      <section className="bg-gradient-to-b from-white to-gray-50 dark:from-black dark:to-gray-950 py-20 mt-10">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white">
            لماذا تختار منتجاتنا؟
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-12">
            نحن نقدم حلولًا متكاملة في مجال أنظمة مكافحة الحريق، مع التركيز على
            الجودة، الاعتمادية، وخدمة العملاء المتميزة. منتجاتنا معتمدة من FM و
            UL وتتماشى مع أعلى المعايير العالمية.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              whileHover={{ y: -5 }}
              className="p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-md"
            >
              <h3 className="text-xl font-semibold text-red-600 mb-2">
                جودة عالمية
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                كل منتج يخضع لاختبارات صارمة لضمان أعلى أداء واستقرار في بيئات
                العمل المختلفة.
              </p>
            </motion.div>

            <motion.div
              whileHover={{ y: -5 }}
              className="p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-md"
            >
              <h3 className="text-xl font-semibold text-red-600 mb-2">
                معايير سلامة معتمدة
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                منتجاتنا معتمدة من FM و UL وتفي بمعايير ISO للجودة وسلامة
                الاستخدام.
              </p>
            </motion.div>

            <motion.div
              whileHover={{ y: -5 }}
              className="p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-md"
            >
              <h3 className="text-xl font-semibold text-red-600 mb-2">
                دعم فني مستمر
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                فريقنا الهندسي جاهز دائمًا لتقديم الدعم الفني والمشورة لاختيار
                الأنسب لتطبيقك.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="bg-gradient-to-r from-red-700 to-red-600 text-white py-20">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            هل تحتاج إلى مساعدة في اختيار المنتج المناسب؟
          </motion.h2>
          <p className="text-gray-200 mb-8 max-w-2xl mx-auto">
            تواصل معنا وسيساعدك فريقنا الفني في تحديد أفضل الحلول لأنظمة مكافحة
            الحريق لمشروعك.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-white text-red-700 font-semibold hover:bg-gray-100 px-8"
          >
            <Link href="/contact">تواصل معنا الآن</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
