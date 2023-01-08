import styles from './WeekCard.module.scss';

export const WeekCard = ({ startDateWeek, endDateWeek }) => {
  return (
    <div className={styles.wrapp}>
      <div className={styles.week}>{startDateWeek}</div>
      <div>-</div>
      <div className={styles.week}>{endDateWeek}</div>
    </div>
  );
};
