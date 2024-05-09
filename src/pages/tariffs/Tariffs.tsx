import cn from 'classnames';

import styles from './tariffs.module.scss';

export const Tariffs: React.FC = () => {
  return (
    <div className={styles.tariffs}>
      <div className={styles.tariffs__title}>Виберіть послугу</div>

      <div className={cn(styles.tariffs__cards, styles.cards)}>
        <div className={styles.cards__item}>
          <div>
            <div className={styles.cards__title}>Стартовий</div>
            <div className={styles.cards__price}>
              400 грн <span> / 1місяць</span>
            </div>
          </div>

          <div className={styles.cards__wrapper}>
            <ul className={styles.cards__list}>
              <li>Повний доступ до запитань за темами на 1 місяць</li>
              <li>Вирішення запитань по білетам (як на іспиті в МВС)</li>
              <li>Пояснення до запитань</li>
              <li>Доступ до розділу “Популярні помилки”</li>
              <li>Особистий кабінет з прогресом навчання</li>
            </ul>

            <button className={styles.cards__btn}>Choose Plan</button>
          </div>
        </div>

        <div className={styles.cards__item}>
          <div>
            <div className={styles.cards__title}>Середній</div>
            <div className={styles.cards__price}>
              600 грн <span>/3 місяці</span>
            </div>
          </div>

          <div className={styles.cards__wrapper}>
            <ul className={styles.cards__list}>
              <li>Повний доступ до запитань за темами на 3 місяць</li>
              <li>Вирішення запитань по білетам (як на іспиті в МВС)</li>
              <li>Пояснення до запитань</li>
              <li>Доступ до розділу “Популярні помилки”</li>
              <li>Особистий кабінет з прогресом навчання</li>
            </ul>

            <button className={styles.cards__btn}>Choose Plan</button>
          </div>
        </div>

        <div className={styles.cards__item}>
          <div>
            <div className={styles.cards__title}>Продвинутий</div>
            <div className={styles.cards__price}>
              900 грн <span>/6 місяців</span>
            </div>
          </div>

          <div className={styles.cards__wrapper}>
            <ul className={styles.cards__list}>
              <li>Повний доступ до запитань за темами на 6 місяць</li>
              <li>Вирішення запитань по білетам (як на іспиті в МВС)</li>
              <li>Пояснення до запитань</li>
              <li>Доступ до розділу “Популярні помилки”</li>
              <li>Особистий кабінет з прогресом навчання</li>
              <li>Доступ до відеолекцій в розділі ПДР</li>
            </ul>
            <button className={styles.cards__btn}>Choose Plan</button>
          </div>
        </div>
      </div>
    </div>
  );
};
