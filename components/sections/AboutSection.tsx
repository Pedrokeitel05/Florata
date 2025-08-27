'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';
import { Carousel } from '@/components/ui/carousel';

const carouselImages = [
  "https://res.cloudinary.com/dajdn7nqw/image/upload/v1755884675/Design_sem_nome_vykykx.jpg",
  "https://res.cloudinary.com/dajdn7nqw/image/upload/v1755884543/4_l5d73z.jpg",
  "https://res.cloudinary.com/dajdn7nqw/image/upload/v1755884543/3_az8g18.jpg",
  "https://res.cloudinary.com/dajdn7nqw/image/upload/v1755884544/2_vvnw1v.jpg",
  "https://res.cloudinary.com/dajdn7nqw/image/upload/v1755884543/1_wehv9l.jpg"
];

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-12 sm:py-16 lg:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
              O que é a <span className="bg-gradient-to-r from-rose-400 to-emerald-500 bg-clip-text text-transparent">Florata</span>?
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 leading-relaxed mb-6 sm:mb-8 font-medium">
              O Florata é uma solução digital que leva sua funerária ou floricultura para o mundo online.
Com ele, seus clientes podem escolher coroas de flores, personalizar cartões de homenagem e realizar o pagamento de forma rápida e segura.
Você recebe os pedidos em tempo real e organiza tudo em um só lugar.
            </p>
            <div className="space-y-3 sm:space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                <span className="text-base sm:text-lg text-gray-700 font-medium">Loja online profissional em 24h</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                <span className="text-base sm:text-lg text-gray-700 font-medium">Pagamentos automáticos via PIX/Cartão</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                <span className="text-base sm:text-lg text-gray-700 font-medium">Gestão completa de pedidos relatórios</span>
              </div>
            </div>
          </motion.div>

          {/* Right Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative mt-8 lg:mt-0"
          >
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden mx-2 sm:mx-0">
              <div className="bg-gradient-to-br from-rose-50 to-emerald-50 p-4 sm:p-6 lg:p-8">
                <Carousel 
                  images={carouselImages}
                  autoSlide={true}
                  autoSlideInterval={3000}
                />
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -z-10 top-3 left-3 sm:top-6 sm:left-6 w-full h-full bg-gradient-to-br from-rose-100 to-emerald-100 rounded-2xl"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}