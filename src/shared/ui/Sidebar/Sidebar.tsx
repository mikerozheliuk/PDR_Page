import { useState } from 'react';

import { NavLink, useLocation, useNavigate } from 'react-router-dom';

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

import { FaRoad } from 'react-icons/fa';
import { FaHome } from 'react-icons/fa';
import { FaUser } from 'react-icons/fa6';
import { IoMdExit } from 'react-icons/io';
import { MdPeopleAlt } from 'react-icons/md';
import { MdOutlineIntegrationInstructions } from 'react-icons/md';

import { HiSpeakerphone } from 'react-icons/hi';
import { PiCurrencyDollarSimpleFill } from 'react-icons/pi';

import styles from './sidebar.module.scss';

export const Sidebar: React.FC = () => {
  const location = useLocation();

  const navigate = useNavigate();

  const [closeMenu, setCloseMenu] = useState(false);

  const handleCloseMenu = () => {
    setCloseMenu(!closeMenu);
  };

  const profilePic = localStorage.getItem('profilePic');
  const imageUrl = profilePic ? profilePic : 'default-profile-pic-url';

  const Overlay = () => <ModalOverlay bg="none" backdropFilter="auto" backdropBlur="3px" />;

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
        <div className={styles.profile__image}>
          <img src={imageUrl} alt="profile" />
        </div>
        <div className={styles.profile__contents}>
          <p className={styles.profile__name}>{localStorage.getItem('name')}</p>
          <p className={styles.profile__email}>{localStorage.getItem('email')}</p>
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
          to="/theory"
          className={cn(styles.contents__item, {
            [styles.active]: location.pathname === '/theory'
          })}
        >
          <div className={styles.contents__logo}>
            <HiSpeakerphone />
          </div>
          <span className={styles.contents__text}>Теорія ПДР</span>
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
          <span className={styles.contents__text}>Профіль</span>
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
          to="/instructions"
          className={cn(styles.contents__item, {
            [styles.active]: location.pathname === '/instructions'
          })}
        >
          <div className={styles.contents__logo}>
            <MdOutlineIntegrationInstructions />
          </div>
          <span className={styles.contents__text}>Інструкції</span>
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
          <span className={styles.contents__text}>Підтримка</span>
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

          <span className={styles.contents__text}>Вихід</span>
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
              <Button
                className={cn(styles.modal__button, styles.modal__button_red)}
                onClick={() => navigate('/auth')}
              >
                Вийти
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </div>
    </div>
  );
};
