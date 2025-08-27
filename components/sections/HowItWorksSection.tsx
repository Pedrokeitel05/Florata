'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Globe, Palette, CreditCard, Bell } from 'lucide-react';

const steps = [
  {
    number: "01",
    icon: Globe,
    title: "Cliente acessa sua loja online",
    description: "Seus clientes encontram facilmente sua loja virtual via Qr code ou link e navegam pelo catálogo de produtos."
  },
  {
    number: "02", 
    icon: Palette,
    title: "Escolhe a coroa e personaliza o cartão",
    description: "Seleção do produto ideal e personalização completa da faixa."
  },
  {
    number: "03",
    icon: CreditCard,
    title: "Realiza o pagamento com segurança",
    description: "Checkout simplificado com múltiplas opções de pagamento seguro e criptografado."
  },
  {
    number: "04",
    icon: Bell,
    title: "Você recebe o pedido instantaneamente",
    description: "Notificação imediata do pedido com todos os detalhes para providenciar a entrega."
  }
];

export default function HowItWorksSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-12 sm:py-16 lg:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8 sm:mb-12 lg:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 mb-3 sm:mb-4 px-2 sm:px-0">
            Como <span className="bg-gradient-to-r from-rose-400 to-emerald-500 bg-clip-text text-transparent">funciona</span>?
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-2 sm:px-0 font-medium">
            Processo 100% automatizado que funciona 24 horas por dia, 7 dias por semana.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Timeline line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-rose-200 via-emerald-200 to-rose-200 transform -translate-y-1/2 z-0"></div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 relative">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.8, delay: index * 0.3 }}
                className="relative"
              >
                {/* Step Number */}
                <div className="bg-white rounded-full w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center mx-auto mb-4 sm:mb-6 shadow-lg border-4 border-rose-100 relative z-10">
                  <span className="text-lg sm:text-2xl font-black text-rose-500">{step.number}</span>
                </div>
                
                {/* Card */}
                <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-xl hover:shadow-2xl transition-all duration-300 text-center hover:-translate-y-1 active:scale-95 sm:active:scale-100">
                  {/* Icon */}
                  <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-emerald-100 to-rose-100 rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-5">
                    <step.icon className="w-7 h-7 sm:w-8 sm:h-8 text-emerald-600" />
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-black text-gray-900 mb-3 sm:mb-4">
                    {step.title}
                  </h3>
                  <p className="text-base sm:text-lg text-gray-600 leading-relaxed font-medium">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}