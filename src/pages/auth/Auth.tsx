import { Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react';
import cn from 'classnames';

import { TiArrowBack } from 'react-icons/ti';
import { MdLockPerson } from 'react-icons/md';
import { FaPeopleGroup } from 'react-icons/fa6';
import { IoPersonSharp } from 'react-icons/io5';
import { MdOutlineLocalPostOffice } from 'react-icons/md';

import styles from './auth.module.scss';
import { useNavigate } from 'react-router-dom';

export const Auth: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.auth}>
      <Tabs>
        <TabList className={styles.auth__container}>
          <Tab className={styles.auth__button}>Реєстрація</Tab>
          <Tab className={styles.auth__button}>Вхід</Tab>
        </TabList>

        <TabPanels className={cn(styles.auth__content, styles.content)}>
          <TabPanel className={styles.content__wrap}>
            <div className={styles.content__icons}>
              <FaPeopleGroup className={styles.content__icon} />
            </div>

            <div className={styles.content__name}>
              <span>Р</span>еєстрація
            </div>

            <div className={styles.content__filed}>
              <IoPersonSharp className={styles.filed_icon} />

              <input placeholder="Логін" className={styles.content__input} type="text" />
            </div>

            <div className={styles.content__filed}>
              <MdOutlineLocalPostOffice className={styles.filed_icon} />

              <input placeholder="Пошта" className={styles.content__input} type="post" />
            </div>

            <div className={styles.content__filed}>
              <MdLockPerson className={styles.filed_icon} />

              <input placeholder="Пароль" className={styles.content__input} type="password" />
            </div>

            <button className={styles.content__button}>Реєстрація</button>

            <hr />

            <div className={styles.content__back} onClick={() => navigate('/')}>
              <span>
                <TiArrowBack />
              </span>
              <p> Повернутися на головну</p>
            </div>
          </TabPanel>

          <TabPanel className={styles.content__wrap}>
            <div className={styles.content__icons}>
              <FaPeopleGroup className={styles.content__icon} />
            </div>

            <div className={styles.content__name}>
              <span>В</span>хід
            </div>

            <div className={styles.content__filed}>
              <IoPersonSharp className={styles.filed_icon} />

              <input placeholder="Логін" className={styles.content__input} type="text" />
            </div>

            <div className={styles.content__filed}>
              <MdLockPerson className={styles.filed_icon} />

              <input placeholder="Пароль" className={styles.content__input} type="password" />
            </div>

            <button className={styles.content__button}>Реєстрація</button>

            <hr />

            <div className={styles.content__back} onClick={() => navigate('/')}>
              <span>
                <TiArrowBack />
              </span>
              <p> Повернутися на головну</p>
            </div>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </div>
  );
};
