import { useState } from 'react';

import { NavLink, useLocation } from 'react-router-dom';

import styles from './sidebar.module.scss';

import cn from 'classnames';

import Profile from 'assets/profile.png';

import { FaRoad } from 'react-icons/fa';
import { FaHome } from 'react-icons/fa';
import { FaUser } from 'react-icons/fa6';
import { IoMdExit } from 'react-icons/io';
import { MdPeopleAlt } from 'react-icons/md';
import { IoMdSettings } from 'react-icons/io';
import { HiSpeakerphone } from 'react-icons/hi';

export const Sidebar: React.FC = () => {
  const location = useLocation();

  const [closeMenu, setCloseMenu] = useState(false);

  const handleCloseMenu = () => {
    setCloseMenu(!closeMenu);
  };

  return (
    <div className={cn(styles.sidebar, { [styles.active]: closeMenu })}>
      <div className={cn(styles.sidebar__logo, styles.logo, { [styles.active]: closeMenu })}>
        <div className={styles.logo__image}>
          <FaRoad />
        </div>

        <h2 className={styles.logo__title}> PDR </h2>
      </div>

      <div
        className={cn(styles.sidebar__burger, styles.burger, {
          [styles.active]: closeMenu
        })}
      >
        <div
          className={styles.burger__trigger}
          onClick={() => {
            handleCloseMenu();
          }}
        ></div>
        <div className={styles.burger__menu}></div>
      </div>

      <div
        className={cn(styles.sidebar__profile, styles.profile, {
          [styles.active]: closeMenu
        })}
      >
        <img src={Profile} alt="profile" />
        <div className={styles.profile__contents}>
          <p className={styles.profile__name}>Hello, John👋</p>
          <p className={styles.profile__email}>johnsmith@gmail.com</p>
        </div>
      </div>

      <div
        className={cn(styles.sidebar__contents, styles.contents, {
          [styles.active]: closeMenu
        })}
      >
        <NavLink
          to="/"
          className={cn(styles.contents__item, {
            [styles.active]: location.pathname === '/'
          })}
        >
          <div className={styles.contents__logo}>
            <FaHome />
          </div>
          <span className={styles.contents__text}>Головна</span>
        </NavLink>

        <NavLink
          to="/main"
          className={cn(styles.contents__item, {
            [styles.active]: location.pathname === '/main'
          })}
        >
          <div className={styles.contents__logo}>
            <HiSpeakerphone />
          </div>
          <span className={styles.contents__text}>Новини</span>
        </NavLink>

        <NavLink
          to="/performance"
          className={cn(styles.contents__item, {
            [styles.active]: location.pathname === '/performance'
          })}
        >
          <div className={styles.contents__logo}>
            <FaUser />
          </div>
          <span className={styles.contents__text}>профіль</span>
        </NavLink>

        <NavLink
          to="/settings"
          className={cn(styles.contents__item, {
            [styles.active]: location.pathname === '/settings'
          })}
        >
          <div className={styles.contents__logo}>
            <IoMdSettings />
          </div>
          <span className={styles.contents__text}>settings</span>
        </NavLink>

        <NavLink
          to="/support"
          className={cn(styles.contents__item, {
            [styles.active]: location.pathname === '/support'
          })}
        >
          <div className={styles.contents__logo}>
            <MdPeopleAlt />
          </div>
          <span className={styles.contents__text}>support</span>
        </NavLink>

        <NavLink
          to="/support"
          className={cn(styles.contents__item, {
            [styles.active]: location.pathname === '/support'
          })}
        >
          <div className={styles.contents__logo}>
            <IoMdExit />
          </div>
          <span className={styles.contents__text}>вихід</span>
        </NavLink>
      </div>
    </div>
  );
};
