import { useId, useState } from 'react';
import styles from './InitialAccordion.module.scss';
import arrowIcon from '../../../assets/taskIcon/arrowIcon.svg';
import violent from '../../../assets/taskIcon/violent.svg';

export const InitialAccordion = ({ children, toggleActiveItem, title, id, currentId }) => {
  return (
    <div className={styles.task} id={id} onClick={(event) => toggleActiveItem(event, id)}>
      <div className={styles.description}>
        <img src={arrowIcon} alt={arrowIcon} />
        <div className={styles.icon__wrapper}>
          <img src={violent} alt={violent} />
        </div>
        <span className={styles.nesting}>1</span>
        <div>{title}</div>
      </div>
      <div style={{ height: id === currentId ? '0px' : '100%', overflow: 'hidden', transition: 'opacity 0.5s' }}>
        <div>{children}</div>
      </div>
    </div>
  );
};
