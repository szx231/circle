import { DaysCardWrapper } from './DaysCard/DaysCardWrapper';
import { WeekCard } from './WeekCard';
import styles from './Card.module.scss';
import { DaysCard } from './DaysCard';

export const Card = ({ array }) => {
  return (
    <div className={styles.wrapper}>
      {array.map((innerArr) => {
        return (
          <div>
            <WeekCard startDateWeek={innerArr[0]} endDateWeek={innerArr[6]} />
            <DaysCardWrapper>
              {innerArr.map((item: string) => (
                <DaysCard day={parseInt(item.replace(/[a-za-яё,]/gi, ''), 10)} />
              ))}
            </DaysCardWrapper>
          </div>
        );
      })}
    </div>
  );
};
