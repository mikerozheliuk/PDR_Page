import { Headling } from 'shared/ui';

import styles from './profile.module.scss';

import cn from 'classnames';

import { Link } from 'react-router-dom';
import { FaHandHoldingHeart, FaClipboardList } from 'react-icons/fa';
import { BsPeopleFill } from 'react-icons/bs';
import React from 'react';
import { StatisticModal } from './StatisticModal';
import { ResetModal } from './ResetModal';
import { UserAgreementModal } from './UserAgreementModal';

export const Profile: React.FC = () => {
  return (
    <div className={styles.profile}>
      <Headling>Головна</Headling>
      <h2 className={styles.profile__title}>Мій профіль</h2>
      <div className={styles.profile__subtitle}>Особисті дані</div>
      <div className={cn(styles.profile__data, styles.data)}>
        <div className={styles.data__content}>
          <Link to="/support" className={cn(styles.content__item, styles.item)}>
            <span>
              <FaHandHoldingHeart />
            </span>
            <div className={styles.item__descr}>
              <h4 className={styles.item__title}>Підтримка</h4>
              <div className={styles.item__text}>Вiдповiдi на вашi питання</div>
            </div>
          </Link>

          <StatisticModal />

          <Link to="#" className={cn(styles.content__item, styles.item)}>
            <span>
              <BsPeopleFill />
            </span>
            <div className={styles.item__descr}>
              <h4 className={styles.item__title}>Моя Група:</h4>
              <div className={styles.item__text}>
                <Link to="#" className={styles.item__link}>
                  Доступно в Преміум версії
                </Link>
              </div>
            </div>
          </Link>

          <ResetModal />

          <UserAgreementModal />
        </div>
        <div className={cn(styles.data__statistic, styles.statistic)}>
          <div className={styles.statistic__user}>
            <div className={styles.statistic__name}>Olya Oryschak</div>
            <Link to="#" className={styles.statistic__correct}>
              Редагувати профіль
            </Link>
          </div>
          <div className={cn(styles.statistic__info, styles.info)}>
            <div className={styles.info__progres}>
              <label className={styles.info__label}>
                <div className={styles.info__text}>Загальний прогрес по темах:</div>
                <div className={styles.info__line}></div>
              </label>
              <div className={styles.info__value}>10%</div>
            </div>
            <div className={styles.info__exams}>
              <div className={styles.info__done}>
                0<span>/4</span>
                <div className={styles.info__descrp}>Зданих іспитів</div>
              </div>
              <div className={styles.info__average}>
                2<span>/20</span>
                <div className={styles.info__descrp}>Середній рахунок іспиту</div>
              </div>
            </div>
            <div className={styles.info__results}>
              <div className={styles.info__item}>
                30
                <div className={styles.info__descrp}>Середній рахунок іспиту</div>
              </div>
              <div className={cn(styles.info__item, styles.info__item_red)}>
                14
                <div className={styles.info__descrp}>Невірних відповідей</div>
              </div>
              <div className={cn(styles.info__item, styles.info__item_blue)}>
                16
                <div className={styles.info__descrp}>Правильних відповідей</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
