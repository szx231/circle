import styles from './DaysCard.module.scss';
import { DaysCardWrapper } from './DaysCardWrapper';

export const DaysCard = ({ day }) => {
  return (
    <div className={styles.wrapper}>
      <span className={styles.day}>{day}</span>
    </div>
  );
};
