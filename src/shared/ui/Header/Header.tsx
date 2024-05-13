import { Button, Container } from '@chakra-ui/react';

import styles from './header.module.scss';
import cn from 'classnames';

export const Header: React.FC = () => {
  return (
    <div className={styles.header}>
      <Container className={styles.header__container}>
        <div className={styles.header__title}>
          Super <span>PDR</span>
        </div>

        <Button className={cn(styles.button, styles.button_header)}>Зайти в профіль</Button>
      </Container>
    </div>
  );
};
