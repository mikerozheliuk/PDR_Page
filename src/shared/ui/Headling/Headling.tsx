import cn from 'classnames';
import styles from './headling.module.scss';
import { HeadlingProps } from './Headling.props';
import { FaBell } from 'react-icons/fa';

export const Headling: React.FC<HeadlingProps> = ({ children, className, ...props }) => {
  return (
    <div className={cn(className, styles.header)} {...props}>
      <h2>{children}</h2>
      <FaBell className={styles.fabel} />
    </div>
  );
};
