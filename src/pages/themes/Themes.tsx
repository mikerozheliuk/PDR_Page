import { Link } from 'react-router-dom';
import themes from '../../../themes.json';
import styles from './themes.module.scss';
export const Themes: React.FC = () => {
  return (
    <div className={styles.themes}>
      <div className={styles.themes__title}>Вчити по темах</div>
      <div className={styles.themes__subtitle}>Запитання зруповані по темах</div>
      <div className={styles.themes__lists}>
        {themes.map((item) => (
          <Link to="#" className={styles.themes__item} key={item.id}>
            <div className={styles.themes__number}>{item.id}</div>
            <div className={styles.themes__wrap}>
              <div className={styles.themes__name}>{item.name.uk}</div>
              <div className={styles.themes__allquestion}>{item.countQuestions} запитань</div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};
