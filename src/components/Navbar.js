import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react'; // иконки можно заменить

export default function Navbar({ onScrollTo }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = (section) => {
    setIsOpen(false); // сначала закрываем меню
    setTimeout(() => {
      onScrollTo(section); // потом скроллим
    }, 200); // небольшая задержка
  };

  return (
      <nav className="fixed w-full z-40 top-0 px-4 sm:px-6 py-3 sm:py-4 bg-cream/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-green-primary cursor-pointer"
              onClick={() => handleClick('hero')}
          >
            Вари Арт*
          </motion.h1>

          {/* Desktop menu */}
          <div className="hidden sm:flex items-center gap-4 sm:gap-8">
            <button
                onClick={() => handleClick('services')}
                className="text-sm sm:text-base text-green-primary hover:text-green-light transition-colors"
            >
              Услуги
            </button>
            <button
                onClick={() => handleClick('footer')}
                className="text-sm sm:text-base text-green-primary hover:text-green-light transition-colors"
            >
              Контакты
            </button>
          </div>

          {/* Mobile burger */}
          <div className="sm:hidden">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X size={28} className={"text-green-primary"} /> : <Menu size={28} className={"text-green-primary"} />}
            </button>
          </div>
        </div>

        {/* Mobile dropdown */}
        <AnimatePresence>
          {isOpen && (
              <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="sm:hidden px-4 mt-2 overflow-hidden"
              >
                <button
                    onClick={() => handleClick('services')}
                    className="block w-full text-left py-2 text-green-primary hover:text-green-light transition-colors"
                >
                  Услуги
                </button>
                <button
                    onClick={() => handleClick('footer')}
                    className="block w-full text-left py-2 text-green-primary hover:text-green-light transition-colors"
                >
                  Контакты
                </button>
              </motion.div>
          )}
        </AnimatePresence>
      </nav>
  );
}
