import { Link } from 'react-router-dom';

import { FaRoad } from 'react-icons/fa';

import styles from './instructions.module.scss';

export const Instructions: React.FC = () => {
  return (
    <div className={styles.instructions}>
      <div className={styles.instructions__title}>Інструкції</div>
      <div className={styles.instructions__subtitle}>Поради та покрокові рекомендації</div>
      <div className={styles.instructions__items}>
        <Link to="#" className={styles.instructions__item}>
          <span>
            <FaRoad />
          </span>
          <div className={styles.instructions__text}>Обмін посвідчення водія через 2 роки</div>
        </Link>

        <Link to="#" className={styles.instructions__item}>
          <span>
            <FaRoad />
          </span>
          <div className={styles.instructions__text}>Видача посвідчення водія</div>
        </Link>

        <Link to="#" className={styles.instructions__item}>
          <span>
            <FaRoad />
          </span>
          <div className={styles.instructions__text}>Видача посвідчення водія</div>
        </Link>

        <Link to="#" className={styles.instructions__item}>
          <span>
            <FaRoad />
          </span>
          <div className={styles.instructions__text}>
            Відкриття іншої категорії в посвідченні водія
          </div>
        </Link>
      </div>
    </div>
  );
};
