import styles from './profile.module.scss';

import cn from 'classnames';

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  Button,
  useDisclosure
} from '@chakra-ui/react';

import React, { useState } from 'react';
import { FaCar } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export const StatisticModal: React.FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const OverlayStatistic = () => (
    <ModalOverlay bg="none" backdropFilter="auto" backdropBlur="3px" />
  );

  const [overlayStatistic, setOverlayStatistic] = useState(<OverlayStatistic />);

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    const clickedElement = event.currentTarget;

    const isActive = clickedElement.classList.contains(styles.active);

    if (isActive) {
      clickedElement.classList.remove(styles.active);
    } else {
      clickedElement.classList.add(styles.active);
    }
  };

  return (
    <div>
      <Link
        to="#"
        onClick={() => {
          setOverlayStatistic(<OverlayStatistic />);
          onOpen();
        }}
        className={cn(styles.content__item, styles.item)}
      >
        <span>
          <FaCar />
        </span>
        <div className={styles.item__descr}>
          <h4 className={styles.item__title}>Категорія:</h4>
          <div className={styles.item__text}>B</div>
        </div>
      </Link>

      <Modal isOpen={isOpen} onClose={onClose} isCentered size={'xl'}>
        {overlayStatistic}
        <ModalContent className={styles.modal}>
          <ModalHeader className={styles.modal__header}>Оберіть категорії навчання:</ModalHeader>
          <ModalBody className={styles.modal__body}>
            <div className={styles.modal__list}>
              <div className={styles.modal__item}></div>
              <div className={styles.modal__item}>
                <div className={styles.modal__category} onClick={handleClick}>
                  BE
                </div>
              </div>
              <div className={styles.modal__item}>
                <div className={styles.modal__category} onClick={handleClick}>
                  CE
                </div>
              </div>
              <div className={styles.modal__item}>
                <div className={styles.modal__category} onClick={handleClick}>
                  DE
                </div>
              </div>
            </div>
            <div className={styles.modal__list}>
              <div className={styles.modal__item}>
                <div className={styles.modal__category} onClick={handleClick}>
                  A
                </div>
              </div>
              <div className={styles.modal__item}>
                <div className={styles.modal__category} onClick={handleClick}>
                  B
                </div>
              </div>
              <div className={styles.modal__item}>
                <div className={styles.modal__category} onClick={handleClick}>
                  C
                </div>
              </div>
              <div className={styles.modal__item}>
                <div className={styles.modal__category} onClick={handleClick}>
                  D
                </div>
              </div>
              <div className={styles.modal__item}>
                <div className={styles.modal__category} onClick={handleClick}>
                  T
                </div>
              </div>
            </div>
            <div className={styles.modal__list}>
              <div className={styles.modal__item}>
                <div className={styles.modal__category} onClick={handleClick}>
                  A1
                </div>
              </div>
              <div className={styles.modal__item}>
                <div className={styles.modal__category} onClick={handleClick}>
                  B1
                </div>
              </div>
              <div className={styles.modal__item}>
                <div className={styles.modal__category} onClick={handleClick}>
                  C1
                </div>
              </div>
              <div className={styles.modal__item}>
                <div className={styles.modal__category} onClick={handleClick}>
                  D1
                </div>
              </div>
            </div>
            <div className={styles.modal__list}>
              <div className={styles.modal__item}></div>
              <div className={styles.modal__item}></div>
              <div className={styles.modal__item}>
                <div className={styles.modal__category} onClick={handleClick}>
                  C1E
                </div>
              </div>
              <div className={styles.modal__item}>
                <div className={styles.modal__category} onClick={handleClick}>
                  D1E
                </div>
              </div>
            </div>
          </ModalBody>

          <ModalFooter className={styles.modal__footer}>
            <Button className={styles.modal__button}>Обрати</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
};
