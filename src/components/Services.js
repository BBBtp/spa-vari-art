import { motion } from 'framer-motion';
import Image from 'next/image';

const services = [
  {
    title: "Декорации для мероприятий",
    description: "Создаем уникальные декорации для концертов, шоу и фестивалей",
    image: "/images/1.png",
  },
  {
    title: "Оформление пространств",
    description: "Украшаем витрины, торговые точки, офисы, кафе, рестораны и отели",
    image: "/images/2.png",
  },
  {
    title: "Фигуры из пенопласта",
    description: "Изготавливаем объемные фигуры любой сложности",
    image: "/images/3.png",
  },
  {
    title: "Цветочные композиции",
    description: "Создаем композиции из фоамирана",
    image: "/images/4.png",
  },
  {
    title: "Фотозоны",
    description: "Разрабатываем и создаем уникальные фотозоны",
    image: "/images/5.png",
  },
  {
    title: "Кэнди бары",
    description: "Оформляем стильные кэнди бары",
    image: "/images/6.png",
  }
];

export default function Services() {
  return (
    <section id="services" className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl xs:text-4xl sm:text-5xl md:text-5xl font-display font-bold text-green-primary mb-8 sm:mb-12 text-center">
          Наши услуги
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="product-card group"
            >
              <div className="aspect-square relative rounded-2xl overflow-hidden mb-4">
                <Image
                  src={service.image}
                  alt={service.title}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <h3 className="text-xl font-display font-bold text-green-primary mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 