'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function FinalCTASection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-rose-50 via-white to-emerald-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.8 }}
          className="bg-white rounded-3xl p-6 sm:p-8 lg:p-12 shadow-2xl border border-gray-100 relative overflow-hidden mx-2 sm:mx-0"
        >
          {/* Background decoration */}
          <div className="absolute inset-0 bg-gradient-to-br from-rose-50/50 to-emerald-50/50"></div>
          
          {/* Floating elements */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute top-2 right-2 sm:top-4 sm:right-4 text-rose-300"
          >
            <Sparkles className="w-4 h-4 sm:w-6 sm:h-6" />
          </motion.div>
          
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="absolute bottom-2 left-2 sm:bottom-4 sm:left-4 text-emerald-300"
          >
            <Sparkles className="w-6 h-6 sm:w-8 sm:h-8" />
          </motion.div>
          
          <div className="relative z-10">
            {/* Icon */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-rose-100 to-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6 sm:mb-8"
            >
              <Sparkles className="w-8 h-8 sm:w-10 sm:h-10 text-rose-500" />
            </motion.div>

            {/* Headline */}
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black text-gray-900 mb-4 sm:mb-6 leading-tight"
            >
              Comece hoje mesmo e transforme{' '}
              <span className="bg-gradient-to-r from-rose-400 to-emerald-500 bg-clip-text text-transparent">
                seu negócio
              </span>{' '}
              em 24 horas
            </motion.h2>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg sm:text-xl lg:text-2xl text-gray-600 mb-6 sm:mb-8 lg:mb-10 max-w-3xl mx-auto leading-relaxed font-medium"
            >
              Mais de 500 funerárias já aumentaram suas vendas com o Florata. 
              Seja a próxima success story!
            </motion.p>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-6 sm:mb-8 lg:mb-10"
            >
              <div>
                <div className="text-3xl sm:text-4xl font-black text-rose-500 mb-1">+67%</div>
                <div className="text-base sm:text-lg text-gray-600 font-medium">Aumento médio em vendas</div>
              </div>
              <div>
                <div className="text-3xl sm:text-4xl font-black text-emerald-500 mb-1">500+</div>
                <div className="text-base sm:text-lg text-gray-600 font-medium">Empresas confiando</div>
              </div>
              <div>
                <div className="text-3xl sm:text-4xl font-black text-rose-500 mb-1">24h</div>
                <div className="text-base sm:text-lg text-gray-600 font-medium">Para estar online</div>
              </div>
            </motion.div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Button 
                onClick={() => window.open('https://wa.me/5551983339080?text=Olá, gostaria de conhecer a Florata!', '_blank')}
                className="w-full sm:w-auto bg-gradient-to-r from-rose-400 via-rose-500 to-emerald-500 hover:from-rose-500 hover:via-rose-600 hover:to-emerald-600 text-white px-8 sm:px-10 lg:px-12 py-4 sm:py-5 lg:py-6 text-lg sm:text-xl lg:text-2xl font-black rounded-2xl shadow-2xl hover:shadow-rose-400/40 hover:shadow-3xl transition-all duration-300 transform hover:scale-105 active:scale-95 group"
              >
                🚀 Criar minha loja agora
                <ArrowRight className="ml-2 w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
            </motion.div>

            {/* Trust indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="mt-6 sm:mt-8 text-sm sm:text-base text-gray-600 font-medium"
            >
              ✅ Teste grátis por 7 dias • ✅ Sem contrato de fidelidade • ✅ Suporte 24/7
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}