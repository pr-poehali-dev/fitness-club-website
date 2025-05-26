import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-purple-900 to-orange-900 text-white min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3')] bg-cover bg-center opacity-20"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl animate-fade-in">
            <h1 className="text-7xl font-bold mb-6 leading-tight">
              Твое тело — это
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">
                {" "}
                произведение искусства
              </span>
            </h1>
            <p className="text-2xl mb-8 text-gray-200 max-w-3xl leading-relaxed">
              Преврати каждую тренировку в шаг к совершенству. Современное
              оборудование, профессиональные тренеры и атмосфера успеха ждут
              тебя.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-10 py-8 text-xl font-semibold shadow-2xl shadow-orange-500/25 transform hover:scale-105 transition-all duration-200"
              >
                <Icon name="Zap" className="mr-3" size={24} />
                Первая тренировка БЕСПЛАТНО
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-white/80 text-white hover:bg-white hover:text-slate-900 px-10 py-8 text-xl backdrop-blur-sm transform hover:scale-105 transition-all duration-200"
              >
                <Icon name="Play" className="mr-3" size={24} />
                Виртуальный тур
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold mb-6 text-slate-900">
              Направления тренировок
            </h2>
            <p className="text-2xl text-gray-600 max-w-3xl mx-auto">
              От силовых до кардио — найди свой идеальный путь к результату
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            <Card className="group text-center hover:shadow-2xl transition-all duration-500 hover:-translate-y-4 border-0 bg-gradient-to-br from-white to-gray-50">
              <CardHeader className="pb-8">
                <div className="w-20 h-20 bg-gradient-to-br from-orange-400 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <Icon name="Dumbbell" size={40} className="text-white" />
                </div>
                <CardTitle className="text-3xl mb-4 text-slate-900">
                  Силовые тренировки
                </CardTitle>
                <CardDescription className="text-lg text-gray-600 leading-relaxed">
                  Построй мускулатуру мечты с современным оборудованием и
                  индивидуальным подходом от профессионалов
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="group text-center hover:shadow-2xl transition-all duration-500 hover:-translate-y-4 border-0 bg-gradient-to-br from-white to-gray-50">
              <CardHeader className="pb-8">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <Icon name="Heart" size={40} className="text-white" />
                </div>
                <CardTitle className="text-3xl mb-4 text-slate-900">
                  Кардио зона
                </CardTitle>
                <CardDescription className="text-lg text-gray-600 leading-relaxed">
                  Сжигай калории эффективно на премиальных тренажерах с
                  интерактивными программами
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="group text-center hover:shadow-2xl transition-all duration-500 hover:-translate-y-4 border-0 bg-gradient-to-br from-white to-gray-50">
              <CardHeader className="pb-8">
                <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <Icon name="Users" size={40} className="text-white" />
                </div>
                <CardTitle className="text-3xl mb-4 text-slate-900">
                  Групповые занятия
                </CardTitle>
                <CardDescription className="text-lg text-gray-600 leading-relaxed">
                  Заряжайся энергией в команде единомышленников: йога, пилатес,
                  функциональный тренинг
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Trainers Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-slate-900">
              Наши тренеры
            </h2>
            <p className="text-xl text-gray-600">
              Команда профессионалов с многолетним опытом
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="overflow-hidden hover:shadow-xl transition-all duration-300">
              <div className="h-64 bg-gradient-to-br from-orange-400 to-orange-600"></div>
              <CardHeader>
                <CardTitle className="text-xl">Александр Петров</CardTitle>
                <CardDescription>
                  Персональный тренер, специалист по силовым тренировкам
                </CardDescription>
                <div className="flex gap-2 mt-2">
                  <span className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-sm">
                    5+ лет опыта
                  </span>
                </div>
              </CardHeader>
            </Card>

            <Card className="overflow-hidden hover:shadow-xl transition-all duration-300">
              <div className="h-64 bg-gradient-to-br from-blue-400 to-blue-600"></div>
              <CardHeader>
                <CardTitle className="text-xl">Мария Сидорова</CardTitle>
                <CardDescription>
                  Инструктор групповых программ, йога и пилатес
                </CardDescription>
                <div className="flex gap-2 mt-2">
                  <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">
                    8+ лет опыта
                  </span>
                </div>
              </CardHeader>
            </Card>

            <Card className="overflow-hidden hover:shadow-xl transition-all duration-300">
              <div className="h-64 bg-gradient-to-br from-green-400 to-green-600"></div>
              <CardHeader>
                <CardTitle className="text-xl">Дмитрий Козлов</CardTitle>
                <CardDescription>
                  Специалист по функциональному тренингу и реабилитации
                </CardDescription>
                <div className="flex gap-2 mt-2">
                  <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">
                    7+ лет опыта
                  </span>
                </div>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-slate-900">
              Тарифные планы
            </h2>
            <p className="text-xl text-gray-600">
              Выбери подходящий абонемент и начни тренироваться уже сегодня
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="relative hover:shadow-xl transition-all duration-300">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">Базовый</CardTitle>
                <div className="text-4xl font-bold text-slate-900 mt-4">
                  2990₽{" "}
                  <span className="text-lg font-normal text-gray-500">
                    /месяц
                  </span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <Icon
                      name="Check"
                      className="text-green-500 mr-3"
                      size={20}
                    />
                    Безлимитное посещение тренажерного зала
                  </li>
                  <li className="flex items-center">
                    <Icon
                      name="Check"
                      className="text-green-500 mr-3"
                      size={20}
                    />
                    Доступ в кардио зону
                  </li>
                  <li className="flex items-center">
                    <Icon
                      name="Check"
                      className="text-green-500 mr-3"
                      size={20}
                    />
                    Консультация тренера
                  </li>
                </ul>
                <Button className="w-full mt-6 bg-slate-900 hover:bg-slate-800">
                  Выбрать план
                </Button>
              </CardContent>
            </Card>

            <Card className="relative border-2 border-orange-500 hover:shadow-xl transition-all duration-300">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <span className="bg-orange-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                  Популярный
                </span>
              </div>
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">Премиум</CardTitle>
                <div className="text-4xl font-bold text-slate-900 mt-4">
                  4990₽{" "}
                  <span className="text-lg font-normal text-gray-500">
                    /месяц
                  </span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <Icon
                      name="Check"
                      className="text-green-500 mr-3"
                      size={20}
                    />
                    Все из тарифа "Базовый"
                  </li>
                  <li className="flex items-center">
                    <Icon
                      name="Check"
                      className="text-green-500 mr-3"
                      size={20}
                    />
                    Групповые занятия
                  </li>
                  <li className="flex items-center">
                    <Icon
                      name="Check"
                      className="text-green-500 mr-3"
                      size={20}
                    />
                    Персональная программа тренировок
                  </li>
                  <li className="flex items-center">
                    <Icon
                      name="Check"
                      className="text-green-500 mr-3"
                      size={20}
                    />
                    Питьевая вода
                  </li>
                </ul>
                <Button className="w-full mt-6 bg-orange-500 hover:bg-orange-600">
                  Выбрать план
                </Button>
              </CardContent>
            </Card>

            <Card className="relative hover:shadow-xl transition-all duration-300">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">VIP</CardTitle>
                <div className="text-4xl font-bold text-slate-900 mt-4">
                  7990₽{" "}
                  <span className="text-lg font-normal text-gray-500">
                    /месяц
                  </span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <Icon
                      name="Check"
                      className="text-green-500 mr-3"
                      size={20}
                    />
                    Все из тарифа "Премиум"
                  </li>
                  <li className="flex items-center">
                    <Icon
                      name="Check"
                      className="text-green-500 mr-3"
                      size={20}
                    />
                    Персональные тренировки (8 в месяц)
                  </li>
                  <li className="flex items-center">
                    <Icon
                      name="Check"
                      className="text-green-500 mr-3"
                      size={20}
                    />
                    Индивидуальный план питания
                  </li>
                  <li className="flex items-center">
                    <Icon
                      name="Check"
                      className="text-green-500 mr-3"
                      size={20}
                    />
                    Приоритетная запись
                  </li>
                </ul>
                <Button className="w-full mt-6 bg-slate-900 hover:bg-slate-800">
                  Выбрать план
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-slate-900">
                Готов начать свой путь к идеальной форме?
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Запишись на бесплатную консультацию и получи персональную
                программу тренировок
              </p>

              <div className="space-y-4">
                <div className="flex items-center">
                  <Icon
                    name="MapPin"
                    className="text-orange-500 mr-4"
                    size={24}
                  />
                  <span className="text-lg">ул. Спортивная, 15, Москва</span>
                </div>
                <div className="flex items-center">
                  <Icon
                    name="Phone"
                    className="text-orange-500 mr-4"
                    size={24}
                  />
                  <span className="text-lg">+7 (495) 123-45-67</span>
                </div>
                <div className="flex items-center">
                  <Icon
                    name="Clock"
                    className="text-orange-500 mr-4"
                    size={24}
                  />
                  <span className="text-lg">Ежедневно с 6:00 до 24:00</span>
                </div>
              </div>
            </div>

            <Card className="p-8">
              <CardHeader>
                <CardTitle className="text-2xl text-center">
                  Записаться на тренировку
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Input placeholder="Ваше имя" />
                <Input placeholder="Телефон" type="tel" />
                <Input placeholder="Email" type="email" />
                <Button className="w-full bg-orange-500 hover:bg-orange-600 py-6 text-lg">
                  <Icon name="Send" className="mr-2" />
                  Записаться бесплатно
                </Button>
                <p className="text-sm text-gray-500 text-center">
                  Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">FitClub</h3>
              <p className="text-gray-300">
                Современный фитнес-клуб для достижения ваших целей
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Услуги</h4>
              <ul className="space-y-2 text-gray-300">
                <li>Персональные тренировки</li>
                <li>Групповые занятия</li>
                <li>Консультации по питанию</li>
                <li>Функциональный тренинг</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Контакты</h4>
              <div className="space-y-2 text-gray-300">
                <p>ул. Спортивная, 15, Москва</p>
                <p>+7 (495) 123-45-67</p>
                <p>info@fitclub.ru</p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 FitClub. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
