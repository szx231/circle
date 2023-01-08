import styles from './Thead.module.scss';
import { Card } from '../../Card';

export const Thead = ({ array }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.thead__leftColumn}>
        <h2 className={styles.thead__title}>Work item</h2>
      </div>
      <div className={styles.thead_rightColumn}>
        <Card array={array} />
      </div>
    </div>
  );
};
