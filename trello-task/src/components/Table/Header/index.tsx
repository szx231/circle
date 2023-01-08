import styles from './Header.module.scss';
import blackArrow from '../../../assets/blackArrow.svg';

export const Header = () => {
  const title = 'DMS 2.0 / 02.09.2022-31.12.2022';

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>{title}</h1>
      <button className={styles.button} type="button">
        <img src={blackArrow} alt={blackArrow} />
        <div className={styles.button__text}>Export</div>
      </button>
    </div>
  );
};
