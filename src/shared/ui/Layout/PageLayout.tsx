import { Outlet } from 'react-router-dom';

import { Sidebar } from '../Sidebar';

import styles from './layout.module.scss';

export const PageLayout: React.FC = () => {
  return (
    <div className={styles.pageLayout}>
      <Sidebar />

      <div className={styles.pageLayout__content}>
        <Outlet />
      </div>
    </div>
  );
};
