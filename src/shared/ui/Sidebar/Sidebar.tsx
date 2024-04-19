import { useState } from 'react';

import { NavLink, useLocation } from 'react-router-dom';

import styles from './sidebar.module.scss';

import cn from 'classnames';

import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure
} from '@chakra-ui/react';

import Profile from 'assets/profile.png';

import { FaRoad } from 'react-icons/fa';
import { FaHome } from 'react-icons/fa';
import { FaUser } from 'react-icons/fa6';
import { IoMdExit } from 'react-icons/io';
import { MdPeopleAlt } from 'react-icons/md';

import { HiSpeakerphone } from 'react-icons/hi';
import { PiCurrencyDollarSimpleFill } from 'react-icons/pi';

export const Sidebar: React.FC = () => {
  const location = useLocation();

  const [closeMenu, setCloseMenu] = useState(false);

  const handleCloseMenu = () => {
    setCloseMenu(!closeMenu);
  };

  const Overlay = () => (
    <ModalOverlay bg="none" backdropFilter="auto" backdropInvert="80%" backdropBlur="2px" />
  );

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [overlay, setOverlay] = useState(<Overlay />);

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
          to="/main"
          className={cn(styles.contents__item, {
            [styles.active]: location.pathname === '/main'
          })}
        >
          <div className={styles.contents__logo}>
            <FaHome />
          </div>
          <span className={styles.contents__text}>Головна</span>
        </NavLink>

        <NavLink
          to="/mainns"
          className={cn(styles.contents__item, {
            [styles.active]: location.pathname === '/mainns'
          })}
        >
          <div className={styles.contents__logo}>
            <HiSpeakerphone />
          </div>
          <span className={styles.contents__text}>Новини</span>
        </NavLink>

        <NavLink
          to="/profile"
          className={cn(styles.contents__item, {
            [styles.active]: location.pathname === '/profile'
          })}
        >
          <div className={styles.contents__logo}>
            <FaUser />
          </div>
          <span className={styles.contents__text}>профіль</span>
        </NavLink>

        <NavLink
          to="/tariffs"
          className={cn(styles.contents__item, {
            [styles.active]: location.pathname === '/tariffs'
          })}
        >
          <div className={styles.contents__logo}>
            <PiCurrencyDollarSimpleFill />
          </div>
          <span className={styles.contents__text}>Тарифи</span>
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

        <div
          className={styles.contents__item}
          onClick={() => {
            setOverlay(<Overlay />);
            onOpen();
          }}
        >
          <div className={styles.contents__logo}>
            <IoMdExit />
          </div>

          <span className={styles.contents__text}>вихід</span>
        </div>

        <Modal isCentered isOpen={isOpen} onClose={onClose}>
          {overlay}
          <ModalContent className={styles.modal}>
            <ModalHeader className={styles.modal__header}>Вийти</ModalHeader>

            <ModalBody className={styles.modal__body}>Ви дійсно хочете вийти</ModalBody>
            <ModalFooter className={styles.modal__footer}>
              <Button className={styles.modal__button} onClick={onClose}>
                Відміна
              </Button>
              <Button className={cn(styles.modal__button, styles.modal__button_red)}>Вийти</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </div>
    </div>
  );
};
