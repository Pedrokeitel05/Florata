'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { TrendingUp, Settings, CreditCard, MessageCircle } from 'lucide-react';

const benefits = [
  {
    icon: TrendingUp,
    title: "Mais vendas online",
    subtitle: "(+40%)",
    description: "Aumente significativamente suas vendas com uma presença online profissional e otimizada."
  },
  {
    icon: Settings,
    title: "Gestão simplificada",
    subtitle: "de pedidos",
    description: "Receba e gerencie todos os pedidos em uma única plataforma intuitiva."
  },
  {
    icon: CreditCard,
    title: "Pagamento online",
    subtitle: "integrado",
    description: "Ofereça múltiplas formas de pagamento seguro para seus clientes."
  },
  {
    icon: MessageCircle,
    title: "Atendimento",
    subtitle: "automatizado",
    description: "Sistema automático de confirmação e acompanhamento de pedidos."
  }
];

export default function BenefitsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8 sm:mb-12 lg:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 mb-3 sm:mb-4 px-2 sm:px-0">
            Por que o <span className="bg-gradient-to-r from-rose-400 to-emerald-500 bg-clip-text text-transparent">Florata</span> é diferente?
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-2 sm:px-0 font-medium">
            Uma plataforma pensada especificamente para funerárias e floriculturas, com resultados comprovados.
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="group"
            >
              <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border-2 border-gray-100 hover:border-emerald-300 hover:-translate-y-2 sm:hover:-translate-y-3 active:scale-95 sm:active:scale-100">
                {/* Icon */}
                <div className="w-14 h-14 sm:w-18 sm:h-18 bg-gradient-to-br from-emerald-100 to-emerald-200 rounded-3xl flex items-center justify-center mb-4 sm:mb-6 group-hover:shadow-xl group-hover:shadow-emerald-200/50 transition-all duration-300">
                  <benefit.icon className="w-7 h-7 sm:w-9 sm:h-9 text-emerald-600" />
                </div>
                
                {/* Content */}
                <h3 className="text-xl sm:text-2xl font-black text-gray-900 mb-2">
                  {benefit.title}
                </h3>
                <p className="text-rose-500 font-bold text-lg sm:text-xl mb-3 sm:mb-4">
                  {benefit.subtitle}
                </p>
                <p className="text-base sm:text-lg text-gray-600 leading-relaxed font-medium">
                  {benefit.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}