import { useNavigate } from 'react-router-dom';
import { motion, Variants } from 'framer-motion';

import cn from 'classnames';

import { signInWithGoogle } from './firebase';

import { FaGoogle } from 'react-icons/fa';
import { FaApple } from 'react-icons/fa';
import { TiArrowBack } from 'react-icons/ti';
import { FaPeopleGroup } from 'react-icons/fa6';

import styles from './auth.module.scss';
import { useState } from 'react';
import { Spinner } from 'shared/ui/index.ts';

const tabPanelVariants: Variants = {
  hidden: { height: 0 },
  visible: { height: 'auto' }
};

export const Auth: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSignInWithGoogle = async () => {
    setLoading(true);
    try {
      await signInWithGoogle();
      const user = {
        displayName: localStorage.getItem('name') || 'Anonymous',
        email: localStorage.getItem('email') || 'example@example.com',
        photoURL: localStorage.getItem('profilePic') || ''
      };
      console.log('Logged in user:', user);

      // Затримка переходу на головну сторінку
      setTimeout(() => {
        setLoading(false);
        navigate('/main');
      }, 5000);
    } catch (error) {
      console.error('Error signing in:', error);
      setLoading(false); // Скасувати спіннер у випадку помилки
    }
  };

  return (
    <div className={styles.auth}>
      {loading ? (
        <Spinner />
      ) : (
        <div className={cn(styles.auth__content, styles.content)}>
          <motion.div
            variants={tabPanelVariants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.7 }}
          >
            <form>
              <div className={styles.content__icons}>
                <FaPeopleGroup className={styles.content__icon} />
              </div>

              <div className={styles.content__title}>
                <span>У</span>війти <br /> за допомогою
              </div>

              <div onClick={handleSignInWithGoogle} className={styles.content__item}>
                <div className={styles.content__text}>Google</div>
                <span>
                  <FaGoogle />
                </span>
              </div>

              <div className={styles.content__item}>
                <div className={styles.content__text}>Apple</div>
                <span>
                  <FaApple />
                </span>
              </div>

              <hr />

              <div className={styles.content__back} onClick={() => navigate('/')}>
                <span>
                  <TiArrowBack />
                </span>
                <p> Повернутися на головну</p>
              </div>
            </form>
          </motion.div>
        </div>
      )}
    </div>
  );
};
