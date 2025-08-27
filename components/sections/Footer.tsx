'use client';

import { motion } from 'framer-motion';
import { MessageCircle, Mail, Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          {/* Logo */}
          <div className="mb-6 sm:mb-8">
            <h3 className="text-2xl sm:text-3xl font-bold text-rose-400 mb-2">Florata</h3>
            <div className="w-12 sm:w-16 h-1 bg-gradient-to-r from-rose-400 to-emerald-500 mx-auto"></div>
          </div>

          {/* Contact Links */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-3 sm:space-y-0 sm:space-x-8 mb-8 sm:mb-12">
            <a 
              href="https://wa.me/5551983339080?text=Olá, gostaria de conhecer a Florata!"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-3 text-gray-300 hover:text-emerald-400 transition-colors duration-300 group active:scale-95"
            >
              <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 group-hover:scale-110 transition-transform duration-300" />
              <span className="text-sm sm:text-base">WhatsApp</span>
            </a>
            <a 
              href="mailto:keiteltecno@gmail.com"
              className="flex items-center space-x-3 text-gray-300 hover:text-rose-400 transition-colors duration-300 group active:scale-95"
            >
              <Mail className="w-4 h-4 sm:w-5 sm:h-5 group-hover:scale-110 transition-transform duration-300" />
              <span className="text-sm sm:text-base">Email</span>
            </a>
          </div>

          {/* Divider */}
          <div className="w-20 sm:w-24 h-px bg-gradient-to-r from-transparent via-gray-600 to-transparent mx-auto mb-6 sm:mb-8"></div>

          {/* Copyright */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-2 text-gray-400 text-sm sm:text-base">
            <span className="text-center">© 2025 Florata – E-commerce para o seu estabelecimento</span>
            <div className="hidden sm:block">•</div>
            <div className="flex items-center space-x-1">
              <span>Feito com</span>
              <Heart className="w-3 h-3 sm:w-4 sm:h-4 text-rose-400" />
              <span>para seu sucesso</span>
            </div>
          </div>

          {/* Decorative elements */}
          <div className="mt-8 sm:mt-12 flex justify-center space-x-3 sm:space-x-4">
            <motion.div
              animate={{ opacity: [0.3, 1, 0.3] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-rose-400 rounded-full"
            ></motion.div>
            <motion.div
              animate={{ opacity: [0.3, 1, 0.3] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-emerald-400 rounded-full"
            ></motion.div>
            <motion.div
              animate={{ opacity: [0.3, 1, 0.3] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 2 }}
              className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-rose-400 rounded-full"
            ></motion.div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}