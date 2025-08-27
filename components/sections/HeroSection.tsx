'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen bg-white flex items-center justify-center px-4 py-12 sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center lg:text-left order-2 lg:order-1"
        >
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-6 sm:mb-8"
          >
            <h1 className="text-3xl sm:text-4xl font-bold text-rose-400 mb-2">Florata</h1>
            <div className="w-16 sm:w-20 h-1 bg-gradient-to-r from-rose-400 to-emerald-500 mx-auto lg:mx-0"></div>
          </motion.div>

          {/* Headline */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-black text-gray-900 leading-tight mb-4 sm:mb-6 px-2 sm:px-0"
          >
            Transforme sua{' '}
            <span className="bg-gradient-to-r from-rose-400 to-emerald-500 bg-clip-text text-transparent">funerária</span>{' '}
            {' '}
            ou            
            <span className="bg-gradient-to-r from-rose-400 to-emerald-500 bg-clip-text text-transparent"> floricultura</span>{' '}
            em um e-commerce completo
          </motion.h2>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg sm:text-xl md:text-2xl text-gray-600 mb-6 sm:mb-8 leading-relaxed px-2 sm:px-0 font-medium"
          >
            Venda coroas de flores online 24/7 com pagamentos automáticos e gestão completa de pedidos.
          </motion.p>

          {/* Trust indicators */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45 }}
            className="flex flex-wrap items-center justify-center lg:justify-start gap-4 sm:gap-6 mb-6 sm:mb-8 px-2 sm:px-0"
          >
            <div className="flex items-center space-x-2 text-sm sm:text-base text-gray-600">
              <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
              <span>Setup em 24h</span>
            </div>
            <div className="flex items-center space-x-2 text-sm sm:text-base text-gray-600">
              <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
              <span>Suporte dedicado</span>
            </div>
          </motion.div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="px-2 sm:px-0"
          >
            <Button 
              onClick={() => window.open('https://wa.me/5551983339080?text=Olá, gostaria de conhecer a Florata!', '_blank')}
              className="w-full sm:w-auto bg-gradient-to-r from-rose-400 to-rose-500 hover:from-rose-500 hover:to-rose-600 text-white px-8 sm:px-10 py-4 sm:py-5 text-lg sm:text-xl font-bold rounded-2xl shadow-xl hover:shadow-rose-400/30 hover:shadow-2xl transition-all duration-300 transform hover:scale-105 active:scale-95"
            >
              Começar agora - É simples
            </Button>
          </motion.div>
        </motion.div>

        {/* Right Content - Mockup */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="relative order-1 lg:order-2 mb-8 lg:mb-0"
        >
          <div className="relative bg-gray-50 rounded-2xl shadow-2xl overflow-hidden mx-4 sm:mx-0">
            <div className="bg-gradient-to-br from-rose-100 to-emerald-100 p-4 sm:p-6 lg:p-8">
              <img 
                src="https://res.cloudinary.com/dajdn7nqw/image/upload/v1755888957/Inserir_um_subt%C3%ADtulo_btywgb.jpg" 
                alt="Loja online de flores - Interface do Florata"
                className="w-full h-auto rounded-xl shadow-lg object-cover"
              />
            </div>
          </div>
          
          {/* Floating elements */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 bg-gradient-to-r from-emerald-400 to-emerald-500 w-12 h-12 sm:w-16 sm:h-16 rounded-full shadow-lg"
          ></motion.div>
          
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute -bottom-3 -left-3 sm:-bottom-6 sm:-left-6 bg-gradient-to-r from-rose-400 to-rose-500 w-10 h-10 sm:w-12 sm:h-12 rounded-full shadow-lg"
          ></motion.div>
        </motion.div>
      </div>
    </section>
  );
}