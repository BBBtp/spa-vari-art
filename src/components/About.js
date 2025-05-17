import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0,
    rootMargin: '900px 0px'
  });

  return (
    <section className="py-12 sm:py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 items-center">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            className="about-text"
          >
            <p className="text-base sm:text-lg">
              Уже семь лет мы оттачиваем наши знания и умения в области изготовления декорации и бутафории.
              Наша команда ВариАрт* - это художники, скульпторы, бутафоры, декораторы и инженеры, воплощающие любые самые смелые творческие идеи!
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.2 }}
            className="relative aspect-square rounded-2xl sm:rounded-3xl overflow-hidden"
          >
            <Image
              src="/images/1.jpg"
              alt="Наша команда"
              layout="fill"
              objectFit="cover"
              className="transform hover:scale-105 transition-transform duration-500"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.4 }}
            className="relative aspect-square rounded-2xl sm:rounded-3xl overflow-hidden order-first md:order-none"
          >
            <Image
              src="/images/2.jpg"
              alt="Наша мастерская"
              layout="fill"
              objectFit="cover"
              className="transform hover:scale-105 transition-transform duration-500"
            />
          </motion.div>
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.6 }}
            className="about-text"
          >
            <p className="text-base sm:text-lg">
              Мы за индивидуальный и внимательный подход, а также бережное отношение к вашему времени и бюджету.
              Подберем из всего разнообразия материалов и технологий то, что подойдет именно вам.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 