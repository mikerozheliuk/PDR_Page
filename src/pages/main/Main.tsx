import { Link } from 'react-router-dom';

import cn from 'classnames';

import { Headling } from 'shared/ui';

import { TbClipboardList } from 'react-icons/tb';
import { PiListChecksFill } from 'react-icons/pi';
import { LuMonitorX, LuScrollText, LuClipboardX } from 'react-icons/lu';

import styles from './main.module.scss';

export const Main: React.FC = () => {
  return (
    <div className={styles.main}>
      <Headling>Головна</Headling>

      <h2 className={styles.main__title}>Тести</h2>

      <div className={cn(styles.main__tests, styles.tests)}>
        <div className={styles.tests__descr}>Оберіть режим навчання:</div>

        <div className={styles.tests__list}>
          <Link to="#" className={styles.tests__item}>
            <span>
              <TbClipboardList />
            </span>
            <div className={styles.tests__wrap}>
              <div className={styles.tests__title}>Іспит як в СЦ</div>
              <div className={styles.tests__text}>20 запитань, 20 хвилин, максимум дві помилки</div>
            </div>
          </Link>

          <Link to="#" className={styles.tests__item}>
            <span>
              <PiListChecksFill />
            </span>
            <div className={styles.tests__wrap}>
              <div className={styles.tests__title}>Вчити по білетах</div>
              <div className={styles.tests__text}>20 випадкових запитань, без обмежень</div>
            </div>
          </Link>

          <Link to="/main/themes" className={styles.tests__item}>
            <span>
              <LuScrollText />
            </span>
            <div className={styles.tests__wrap}>
              <div className={styles.tests__title}>Вчити по темах </div>
              <div className={styles.tests__text}>Запитання згруповані по темах</div>
            </div>
          </Link>

          <Link to="#" className={styles.tests__item}>
            <span>
              <LuClipboardX />
            </span>
            <div className={styles.tests__wrap}>
              <div className={styles.tests__title}>Мої помилки</div>
              <div className={styles.tests__text}>
                Запитання, де були допущені помилки, з можливістю їх пройти ще раз
              </div>
            </div>
          </Link>

          <Link to="#" className={styles.tests__item}>
            <span>
              <LuMonitorX />
            </span>
            <div className={styles.tests__wrap}>
              <div className={styles.tests__title}>Часті помилки</div>
              <div className={styles.tests__text}>
                100 найбільш складних запитань в іспиті, де більшість користувачів помиляється
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};
