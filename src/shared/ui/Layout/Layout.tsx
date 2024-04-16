import { Container } from '@chakra-ui/react';

import { Outlet } from 'react-router-dom';

import { Header, Footer } from 'shared/ui';

import styles from './layout.module.scss';

export const Layout: React.FC = () => {
  return (
    <Container className={styles.layout}>
      <Header />
      <Container className={styles.layout__page}>
        <Outlet />
      </Container>
      <Footer />
    </Container>
  );
};
