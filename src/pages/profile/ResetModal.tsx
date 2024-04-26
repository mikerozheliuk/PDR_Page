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
import { Link } from 'react-router-dom';
import { GiReturnArrow } from 'react-icons/gi';

export const ResetModal: React.FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const OverlayReset = () => <ModalOverlay bg="none" backdropFilter="auto" backdropBlur="3px" />;

  const [overlayReset, setOverlayReset] = useState(<OverlayReset />);

  return (
    <div>
      <Link
        to="#"
        onClick={() => {
          setOverlayReset(<OverlayReset />);
          onOpen();
        }}
        className={cn(styles.content__item, styles.item)}
      >
        <span>
          <GiReturnArrow />
        </span>
        <div className={styles.item__descr}>
          <h4 className={styles.item__title}>Скинути статистику</h4>
          <div className={styles.item__text}>Повернути все як було раніше</div>
        </div>
      </Link>

      <Modal isOpen={isOpen} onClose={onClose} isCentered size={'xl'}>
        {overlayReset}
        <ModalContent className={styles.modal}>
          <ModalHeader className={styles.modal__header}>Скинути статистику</ModalHeader>
          <ModalBody className={styles.modal__body}>
            <div className={styles.modal__text}>Весь прогрес буде втрачено</div>
          </ModalBody>

          <ModalFooter className={styles.modal__footer}>
            <Button className={styles.modal__button}>Продовжити</Button>
            <Button
              onClick={onClose}
              className={cn(styles.modal__button, styles.modal__button_red)}
            >
              Вихід
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
};
