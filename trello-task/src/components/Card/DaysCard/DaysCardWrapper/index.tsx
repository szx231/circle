import styles from './DaysCardWrapper.module.scss';

export const DaysCardWrapper = ({ children }) => {
  return <div className={styles.wrapper}>{children}</div>;
};
