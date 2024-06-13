import { Button, Container } from '@chakra-ui/react';

import styles from './header.module.scss';
import cn from 'classnames';
import { useNavigate } from 'react-router-dom';

export const Header: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.header}>
      <Container className={styles.header__container}>
        <div className={styles.header__title}>
          Super <span>PDR</span>
        </div>

        <Button
          onClick={() => navigate('/auth')}
          className={cn(styles.button, styles.button_header)}
        >
          Зайти в профіль
        </Button>
      </Container>
    </div>
  );
};
