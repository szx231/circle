import { useEffect, useState } from 'react';
import { format } from 'date-fns';
import getDaysInMonth from 'date-fns/getDaysInMonth';
import { useDispatch, useSelector } from 'react-redux';
import { Table } from './components/Table';
import { getLoadingSelector, getUsersSelector, getErrorSelector } from './store/tasks/selectors';
import { fetchUserRequest } from './store/tasks/action';
import { AccordionTask } from './components/Accordion/AccordionTask';

function App() {
  const dispatch = useDispatch();

  const loading = useSelector(getLoadingSelector);
  const users = useSelector(getUsersSelector);
  const error = useSelector(getErrorSelector);

  const MONTH_IN_YEAR = 12;
  const CURRENT_YEAR = 2022;
  const DAY_IN_WEEK = 7;

  const howDaysInMonth = Array.from({ length: 12 }, (_, i) => {
    const curretMonth = new Date(`${CURRENT_YEAR}-${i + 1}`);
    const days = getDaysInMonth(curretMonth);
    return days;
  });

  const monthName = Array.from({ length: MONTH_IN_YEAR }, (_, i) => {
    return format(new Date(2022, i), 'MMM');
  });

  const example = (arr) => {
    return arr.map((el, index) => {
      return Array.from({ length: el }, (_, i) => {
        if (i < 10) {
          const date = String(i + 1);
          return `${date.padStart(2, '0')} ${monthName[index]}`;
        }
        return `${i + 1} ${monthName[index]}`;
      });
    });
  };

  const allDaysInMonth = example(howDaysInMonth).flat(Infinity);
  const startEndDate = (arr) => {
    const res = [];
    for (let i = 1; i <= allDaysInMonth.length; i++) {
      if (i % DAY_IN_WEEK === 0) {
        res.push([allDaysInMonth[i - DAY_IN_WEEK], allDaysInMonth[i - 1]]);
      }
    }
    return res;
  };

  const array = allDaysInMonth.reduce((acc, elem, index) => {
    acc[Math.floor(index / 7)] = [...(acc[Math.floor(index / 7)] || []), elem];
    return acc;
  }, []);

  const res = startEndDate(allDaysInMonth);

  const dispatchUser = () => {
    dispatch(fetchUserRequest());
  };

  useEffect(() => {
    dispatchUser();
  }, []);

  // const show = (arr) => {
  //   return arr.map((el, index) => {
  //     if (Array.isArray(el)) {
  //       if (el.length > 1) {
  //         return (
  //           <div style={{ display: 'flex' }}>
  //             {el.map((el, index) => {
  //               return <AccordionTask index={index} nestingTask={index} textTask={el.title} />;
  //             })}
  //           </div>
  //         );
  //       }
  //       return show(el);
  //     }
  //     return <AccordionTask index={index} nestingTask={index} textTask={el.title} />;
  //   });
  // };

  return <AccordionTask />;
}

export default App;
