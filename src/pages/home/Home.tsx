import { Button, Container } from '@chakra-ui/react';

import cn from 'classnames';

import { CheckIcon } from '@chakra-ui/icons';
import { TiMediaRecord } from 'react-icons/ti';
import { AiFillThunderbolt } from 'react-icons/ai';

import styles from './home.module.scss';

export const Home: React.FC = () => {
  return (
    <div className={styles.main}>
      <Container className={styles.main__container}>
        <section className={styles.home}>
          <div className={styles.home__content}>
            <div className={styles.home__title}>
              <span>ONLINE</span> ТЕСТЫ ПДД РК 2023
            </div>

            <div className={cn(styles.home__text, styles.text)}>
              Платформа для подготовки к экзаменам
            </div>

            <ul className={styles.home__proposals}>
              <li className={styles.home__proposal}>
                <span>
                  <AiFillThunderbolt />
                </span>
                Теория ПДД, максимально схожа с тестами в СпецЦОНе
              </li>
              <li className={styles.home__proposal}>
                <span>
                  <AiFillThunderbolt />
                </span>
                Актуальная база из 1200+ вопросов
              </li>
              <li className={styles.home__proposal}>
                <span>
                  <AiFillThunderbolt />
                </span>
                Скидки до 50%
              </li>
            </ul>
          </div>

          <div className={styles.home__image}>
            <img src="/src/assets/home.svg" alt="car_home" />
          </div>
        </section>

        <section className={styles.categories}>
          <div className={styles.categories__title}>
            <span>K</span>АТЕГОРИИ ТЕСТОВ
          </div>
          <div className={cn(styles.categories__text, styles.text)}>
            - Вы сможете пройти все тесты после регистрации и приобретения доступа. База данных
            обновляется каждый месяц в соответствии с актуальными тестами в спецЦОНе
          </div>
          <div className={styles.categories__items}>
            <div className={styles.categories__item}>
              <div className={styles.categories__name}>A|A1</div>
              <div className={styles.categories__image}>
                <img src="/src/assets/categories/bike.png" alt="bike" />
              </div>

              <div className={styles.categories__info}>
                Лёгкие мотоциклы, мотороллеры и другой мощный тяжёлый двухколёсный мототранспорт.
              </div>
            </div>
            <div className={styles.categories__item}>
              <div className={styles.categories__name}>A|A1</div>
              <div className={styles.categories__image}>
                <img src="/src/assets/categories/bike.png" alt="bike" />
              </div>

              <div className={styles.categories__info}>
                Лёгкие мотоциклы, мотороллеры и другой мощный тяжёлый двухколёсный мототранспорт.
              </div>
            </div>
            <div className={styles.categories__item}>
              <div className={styles.categories__name}>A|A1</div>
              <div className={styles.categories__image}>
                <img src="/src/assets/categories/bike.png" alt="bike" />
              </div>

              <div className={styles.categories__info}>
                Лёгкие мотоциклы, мотороллеры и другой мощный тяжёлый двухколёсный мототранспорт.
              </div>
            </div>
            <div className={styles.categories__item}>
              <div className={styles.categories__name}>A|A1</div>
              <div className={styles.categories__image}>
                <img src="/src/assets/categories/bike.png" alt="bike" />
              </div>

              <div className={styles.categories__info}>
                Лёгкие мотоциклы, мотороллеры и другой мощный тяжёлый двухколёсный мототранспорт.
              </div>
            </div>
            <div className={styles.categories__item}>
              <div className={styles.categories__name}>A|A1</div>
              <div className={styles.categories__image}>
                <img src="/src/assets/categories/bike.png" alt="bike" />
              </div>

              <div className={styles.categories__info}>
                Лёгкие мотоциклы, мотороллеры и другой мощный тяжёлый двухколёсный мототранспорт.
              </div>
            </div>
            <div className={styles.categories__item}>
              <div className={styles.categories__name}>A|A1</div>

              <div className={styles.categories__image}>
                <img src="/src/assets/categories/bike.png" alt="bike" />
              </div>

              <div className={styles.categories__info}>
                Лёгкие мотоциклы, мотороллеры и другой мощный тяжёлый двухколёсный мототранспорт.
              </div>
            </div>
          </div>
        </section>

        <section className={styles.demo}>
          <div className={styles.demo__title}>
            <span>Д</span>ЕМО ТЕСТ
          </div>
          <div className={styles.demo__content}>
            <div className={cn(styles.demo__text, styles.text)}>
              - Пройдите демо-тест прямо сейчас и заберите скидку 50% на приобретение полной базы
              вопросов
            </div>

            <Button className={styles.button}>Пройти демо тест</Button>
          </div>
        </section>

        <section className={styles.prices}>
          <div className={styles.prices__title}>
            <span>C</span>ТОИМОСТЬ УСЛУГ
          </div>

          <div className={cn(styles.demo__text, styles.text)}>
            - Перед покупкой доступа необходимо войти в аккаунт или зарегистрировать новый
          </div>

          <div className={styles.prices__items}>
            <div className={styles.prices__item}>
              <div className={styles.prices__sale}>50%</div>
              <div className={cn(styles.prices__title, styles.home_title)}>
                <span>н</span>овичок
              </div>

              <div className={styles.prices__buy}>
                <div className={styles.prices__current}>
                  990$ <span>/30 днів</span>
                </div>
              </div>

              <div className={styles.info}>
                <div className={cn(styles.info__text, styles.text)}>
                  Подготовка к экзаменам по теоретической части
                </div>

                <div className={styles.info__buy}>
                  <TiMediaRecord className={styles.info__icon} />
                  <p>Доступ к тестам ПДД на 30 дней</p>
                  <CheckIcon className={styles.info__icon}></CheckIcon>
                </div>

                <div className={styles.info__buy}>
                  <TiMediaRecord className={styles.info__icon} />
                  <p>Доступ к тестам ПДД на 30 дней</p>
                  <CheckIcon className={styles.info__icon}></CheckIcon>
                </div>

                <div className={styles.info__buy}>
                  <TiMediaRecord className={styles.info__icon} />
                  <p>Доступ к тестам ПДД на 30 дней</p>
                  <CheckIcon className={styles.info__icon}></CheckIcon>
                </div>
              </div>

              <button className={styles.prices__button}>Kупити</button>
            </div>

            <div className={styles.prices__item}>
              <div className={styles.prices__sale}>50%</div>
              <div className={cn(styles.prices__title, styles.home_title)}>
                <span>н</span>овичок
              </div>

              <div className={styles.prices__buy}>
                <div className={styles.prices__current}>
                  990$ <span>/30 днів</span>
                </div>
              </div>

              <div className={styles.info}>
                <div className={cn(styles.info__text, styles.text)}>
                  Подготовка к экзаменам по теоретической части
                </div>

                <div className={styles.info__buy}>
                  <TiMediaRecord className={styles.info__icon} />
                  <p>Доступ к тестам ПДД на 30 дней</p>
                  <CheckIcon className={styles.info__icon}></CheckIcon>
                </div>

                <div className={styles.info__buy}>
                  <TiMediaRecord className={styles.info__icon} />
                  <p>Доступ к тестам ПДД на 30 дней</p>
                  <CheckIcon className={styles.info__icon}></CheckIcon>
                </div>

                <div className={styles.info__buy}>
                  <TiMediaRecord className={styles.info__icon} />
                  <p>Доступ к тестам ПДД на 30 дней</p>
                  <CheckIcon className={styles.info__icon}></CheckIcon>
                </div>
              </div>

              <button className={styles.prices__button}>Kупити</button>
            </div>
          </div>
        </section>

        <section className={styles.partners}>
          <div className={styles.partners__wrap}>
            <div className={styles.partners__title}>
              <span>П</span>АРТНЁРАМ
            </div>
            <div className={styles.partners__content}>
              <div className={cn(styles.partners__text, styles.text)}>
                - Подключение партнёрсткой программы занимает не более 1 минуты
              </div>

              <div className={cn(styles.partners__text, styles.text)}>
                -- Наши тесты максимально похожи на экзаменационные тесты СпецЦОНа
              </div>

              <div className={cn(styles.partners__text, styles.text)}>
                - Минимальный вывод стредств составляет 10.000₸
              </div>
            </div>

            <Button className={styles.button}>Підключити П.П</Button>
          </div>
        </section>

        <section className={styles.about}>
          <div className={styles.about__title}>
            <span>О</span> НАС
          </div>

          <div className={cn(styles.about__text, styles.text)}>
            - Мы молодая команда специалистов, которая специализируется на создании тестов, для
            обучения курсантов в автошколах
          </div>
          <div className={cn(styles.about__text, styles.text)}>
            - Наши тесты максимально похожи на экзаменационные тесты СпецЦОНа
          </div>
          <div className={cn(styles.about__text, styles.text)}>
            - Продукция состоит из: тестов и видеоуроков по автодрому
          </div>
          <div className={cn(styles.about__text, styles.text)}>
            - Все наши тесты имеют авторство и за их распространение предусмотренна уголовная
            ответственность
          </div>
        </section>
      </Container>
    </div>
  );
};
