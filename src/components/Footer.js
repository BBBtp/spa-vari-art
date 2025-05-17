import TgIcon from "./../assets/tg-icon.svg";
import WthIcon from "./../assets/icons8-whatsapp.svg";

export default function Footer() {
  return (
    <footer id="footer" className="bg-[rgb(42,77,59)] text-white py-8 sm:py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12">
          <div>
            <h3 className="text-xl sm:text-2xl font-display font-bold mb-4">Вари Арт*</h3>
            <p className="text-sm sm:text-base opacity-80">
              Создаем уникальные декорации и бутафорию для ваших проектов
            </p>
          </div>
          <div>
          </div>
          <div>
            <h3 className="text-xl sm:text-2xl font-display font-bold mb-4">Социальные сети</h3>
            <div className="flex space-x-4">
              <a href="https://t.me/V_VariART">
                <span className="opacity-100 hover:opacity-80 transition-opacity">
                  <TgIcon/>
                </span>
              </a>
              <a href="https://wa.me/79031640284?text=%D0%9F%D1%80%D0%B8%D0%B2%D0%B5%D1%82!%20%F0%9F%91%8B%20%D0%9C%D0%B5%D0%BD%D1%8F%20%D0%B8%D0%BD%D1%82%D0%B5%D1%80%D0%B5%D1%81%D1%83%D0%B5%D1%82...">
                <span className="opacity-100 hover:opacity-80 transition-opacity">
                  <WthIcon/>
                </span>
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 sm:mt-12 pt-8 sm:pt-12 border-t border-white border-opacity-20 text-center text-sm sm:text-base opacity-80">
          <p>© 2025 Вари Арт*. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
} 