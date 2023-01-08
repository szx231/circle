import styles from './TableWrapper.module.scss';
import { Container } from '../../Container';

export const TableWrapper = ({ children }) => {
  return <div className={styles.wrapper}>{children}</div>;
};
