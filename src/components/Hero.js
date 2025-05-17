import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Hero() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="pt-24 sm:pt-32 pb-12 sm:pb-20 px-4"
    >
      <div id="hero" className="max-w-7xl mx-auto">
        <div className="relative">
          <div className="aspect-[16/9] relative rounded-2xl sm:rounded-3xl overflow-hidden">
            <Image
              src="/images/back.jpg"
              alt="Декорации и оформление"
              layout="fill"
              objectFit="cover"
              priority
              className="transform scale-[1.02] animate-scale"
            />
            <div className="absolute inset-0 bg-black/20" />
          </div>
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="absolute bottom-4 sm:bottom-8 left-4 sm:left-8 right-4 sm:right-8 text-white"
          >
            <h2 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-display font-bold mb-2 sm:mb-4">
              Создаем<br />незабываемое
            </h2>
            <p className="text-base xs:text-lg sm:text-xl md:text-2xl font-light max-w-2xl">
              Декорации и оформление для ваших мероприятий
            </p>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
} 