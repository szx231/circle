import styles from './AccordionCard.module.scss';

export const AccordionCard = ({
  description,
  subArray,
  id,
  toggleActiveItem,
  arrowIcon,
  icons,
  currentId,
  isChild,
  index,
  nesting,
}) => {
  return (
    <div className={styles.task} id={id} onClick={(event) => toggleActiveItem(event, id)}>
      <div className={styles.description}>
        <img src={arrowIcon} alt={arrowIcon} />
        <div className={styles.icon__wrapper}>
          <img src={icons[index]} alt="icon" />
        </div>
        <span className={styles.nesting}>{nesting}</span>
        <div>{description}</div>
      </div>
      <div style={{ height: id === currentId ? '0px' : '100%', overflow: 'hidden', transition: 'opacity 0.5s' }}>
        <div>{subArray && isChild(subArray)}</div>
      </div>
    </div>
  );
};
