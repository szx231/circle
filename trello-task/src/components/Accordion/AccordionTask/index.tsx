import { useId, useState } from 'react';
import { AccordionCard } from '../AccordionCard';
import { InitialAccordion } from '../InitialAccordion';
import violent from '../../../assets/taskIcon/violent.svg';
import green from '../../../assets/taskIcon/green.svg';
import red from '../../../assets/taskIcon/red.svg';
import yellow from '../../../assets/taskIcon/yellow.svg';
import violentLighting from '../../../assets/taskIcon/violentLighting.svg';
import arrowIcon from '../../../assets/taskIcon/arrowIcon.svg';
import styles from './Accordion.module.scss';
import uuid from 'react-uuid';

const icons = [green, yellow, red, violentLighting, violentLighting];

const data = {
  project: 'DMS 2.0',
  period: '02.09.2022-31.12.2022',
  chart: {
    id: 1,
    title: 'Marketing Launch',
    period_start: '2022-09-02',
    period_end: '2022-09-08',
    sub: [
      {
        id: 2,
        title: 'Banners for social networks',
        period_start: '2022-09-02',
        period_end: '2022-09-07',
        sub: [
          {
            id: 3,
            title: 'Choosing a platform for ads',
            period_start: '2022-09-02',
            period_end: '2022-09-06',
            sub: [
              {
                id: 4,
                title: 'Custom issue level #4',
                period_start: '2022-09-03',
                period_end: '2022-09-05',
                sub: [
                  {
                    id: 5,
                    title: 'Custom issue level #5',
                    period_start: '2022-09-04',
                    period_end: '2022-09-05',
                  },
                  {
                    id: 6,
                    title: 'Custom task',
                    period_start: '2022-09-05',
                    period_end: '2022-09-05',
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
};

export const AccordionTask = () => {
  const [currentId, setCurrentId] = useState();
  const { title } = data.chart;
  let score = 0;

  const toggleActiveItem = (event, id) => {
    setCurrentId(id);
    if (id === currentId) {
      setCurrentId(null);
    }
    event.stopPropagation();
  };

  const isChild = (array) => {
    if (array.length > 1) {
      return (
        <div>
          {array.map((el, index, arr) => {
            return drawCard(el, arr);
          })}
        </div>
      );
    }
    return array.map((el, index, arr) => {
      return drawCard(el, arr);
    });
  };

  const drawCard = (el, arr) => {
    console.log(el.sub);
    score++;
    return (
      <AccordionCard
        index={score - 1}
        description={el.title}
        subArray={el.sub}
        id={el.title}
        toggleActiveItem={toggleActiveItem}
        arrowIcon={arrowIcon}
        icons={icons}
        currentId={currentId}
        isChild={isChild}
        nesting={el.sub ? el.sub.length : 0}
      />
    );
  };

  return (
    <InitialAccordion toggleActiveItem={toggleActiveItem} title={title} id={title} currentId={currentId}>
      {data.chart.sub.map((el, index, arr) => drawCard(el, arr))}
    </InitialAccordion>
  );
};
