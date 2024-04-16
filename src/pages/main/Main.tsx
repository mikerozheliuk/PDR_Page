import { Headling } from 'shared/ui';
import styles from './main.module.scss';
import { PiMotorcycleFill } from 'react-icons/pi';
import { Link } from 'react-router-dom';

export const Main: React.FC = () => {
  return (
    <div className={styles.main}>
      <Headling>Головна</Headling>
      <div className={styles.main__tests}>
        <h2 className={styles.tests__title}>Тести</h2>
        <div className={styles.tests__wrapper}>
          <div className={styles.tests__descr}>
            На нашій платформі ви зможете підготуватися до ПДД тестів СпецЦОНа. Структура тестів
            включає 40 питань, на які виділяється 40 хвилин на українську мову.
          </div>
          <div className={styles.tests__choseCategory}>Виберіть потрібну категорію:</div>
          <div className={styles.tests__categoryList}>
            <Link to="#" className={styles.tests__categoryItem}>
              <PiMotorcycleFill size="20" color="black" />
              <div className="tests__category">Категорії А, А1</div>
            </Link>
            <Link to="#" className={styles.tests__categoryItem}>
              <PiMotorcycleFill size="20" color="black" />
              <div className="tests__category">Категорії А, А1</div>
            </Link>
            <Link to="#" className={styles.tests__categoryItem}>
              <PiMotorcycleFill size="20" color="black" />
              <div className="tests__category">Категорії А, А1</div>
            </Link>
            <Link to="#" className={styles.tests__categoryItem}>
              <PiMotorcycleFill size="20" color="black" />
              <div className="tests__category">Категорії А, А1</div>
            </Link>
            <Link to="#" className={styles.tests__categoryItem}>
              <PiMotorcycleFill size="20" color="black" />
              <div className="tests__category">Категорії А, А1</div>
            </Link>
            <Link to="#" className={styles.tests__categoryItem}>
              <PiMotorcycleFill size="20" color="black" />
              <div className="tests__category">Категорії А, А1</div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
