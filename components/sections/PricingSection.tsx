'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Check, Crown, Zap } from 'lucide-react';

const plans = [
  {
    name: "Plano Mensal",
    price: "R$ 204,64",
    period: "/mês",
    icon: Zap,
    description: "Para começar sem compromisso",
    features: [
      "Loja online completa",
      "Gestão de pedidos",
      "Cancelamento fácil a qualquer momento"
    ],
    buttonText: "Quero começar hoje",
    isPopular: false
  },
  {
    name: "Plano Vitalício",
    price: "20x R$ 256",
    period: "(ou R$ 4.500,00 à vista)",
    icon: Crown,
    description: "Mais escolhido 🚀",
    features: [
      "Tudo do plano mensal",
      "Suporte vitalício",
      "Customizações extras",
      "Economia de +60% no longo prazo",
      "Nunca mais se preocupe com mensalidades"
    ],
    buttonText: "Quero este plano para sempre",
    isPopular: true
  }
];

export default function PricingSection() {
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
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-gray-900 mb-3 sm:mb-4 px-2 sm:px-0">
            O plano certo para fazer seu <span className="bg-gradient-to-r from-rose-400 to-emerald-500 bg-clip-text text-transparent">negócio crescer rápido</span>
          </h2>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="relative mx-2 sm:mx-0"
            >
              {plan.isPopular && (
                <div className="absolute -top-3 sm:-top-4 left-1/2 transform -translate-x-1/2 z-10">
                  <div className="bg-gradient-to-r from-rose-400 to-rose-500 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full text-sm sm:text-base font-bold shadow-lg">
                    🚀 Mais Escolhido
                  </div>
                </div>
              )}
              
              <div className={`bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border-2 transition-all duration-300 hover:shadow-3xl hover:-translate-y-2 sm:hover:-translate-y-3 active:scale-95 sm:active:scale-100 ${
                plan.isPopular 
                  ? 'border-rose-300 shadow-rose-200/50 ring-2 ring-rose-100' 
                  : 'border-gray-200 shadow-gray-100/50'
              }`}>
                {/* Icon */}
                <div className={`w-14 h-14 sm:w-18 sm:h-18 rounded-3xl flex items-center justify-center mb-4 sm:mb-6 ${
                  plan.isPopular 
                    ? 'bg-gradient-to-br from-rose-100 to-rose-200' 
                    : 'bg-gradient-to-br from-gray-100 to-gray-200'
                }`}>
                  <plan.icon className={`w-7 h-7 sm:w-9 sm:h-9 ${
                    plan.isPopular ? 'text-rose-600' : 'text-gray-600'
                  }`} />
                </div>

                {/* Plan Name */}
                <h3 className="text-xl sm:text-2xl font-black text-gray-900 mb-2">
                  {plan.name}
                </h3>
                
                {/* Description */}
                <p className="text-base sm:text-lg text-gray-600 mb-4 sm:mb-6 font-medium">
                  {plan.description}
                </p>

                {/* Price */}
                <div className="mb-6 sm:mb-8">
                  <div className="flex items-baseline">
                    <span className="text-2xl sm:text-3xl lg:text-4xl font-black text-gray-900">
                      {plan.price}
                    </span>
                    <span className="text-base sm:text-lg text-gray-500 ml-2 font-medium">
                      {plan.period}
                    </span>
                  </div>
                  {plan.name === "Plano Vitalício" && (
                    <p className="text-base text-gray-700 font-semibold mt-2">
                      Acesso vitalício, sem mensalidade
                    </p>
                  )}
                  {plan.isPopular && (
                    <p className="text-sm text-gray-700 font-semibold mt-3">
                      🔥 Inúmeros negócios já escolheram este plano
                    </p>
                  )}
                </div>

                {/* Features */}
                <div className="mb-6 sm:mb-8 space-y-2 sm:space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-3">
                      <Check className={`w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0 ${
                        plan.isPopular ? 'text-rose-500' : 'text-gray-500'
                      }`} />
                      <span className="text-sm sm:text-base text-gray-700 font-medium">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <Button 
                  onClick={() => {
                    const message = plan.name === "Plano Mensal" 
                      ? "Olá, gostaria de integrar a Florata mensal ao meu estabelecimento."
                      : "Olá, gostaria de integrar a Florata vitalícia ao meu estabelecimento.";
                    window.open(`https://wa.me/5551983339080?text=${encodeURIComponent(message)}`, '_blank');
                  }}
                  className={`w-full py-4 sm:py-5 text-base sm:text-lg font-bold rounded-2xl shadow-xl transition-all duration-300 transform hover:scale-105 active:scale-95 ${
                  plan.isPopular
                    ? 'bg-gradient-to-r from-rose-400 to-rose-500 hover:from-rose-500 hover:to-rose-600 text-white hover:shadow-rose-400/30 hover:shadow-2xl'
                    : 'bg-white border-2 border-gray-300 hover:border-gray-400 text-gray-700 hover:bg-gray-50 hover:shadow-xl'
                }`}
                >
                  {plan.buttonText}
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-8 sm:mt-12 px-2 sm:px-0"
        >
          <p className="text-base sm:text-lg text-gray-600 font-medium">
            🔒 Pagamento 100% seguro • 📞 Suporte dedicado • ⚡ Garantia 7 dias
          </p>
        </motion.div>
      </div>
    </section>
  );
}