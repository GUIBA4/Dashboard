import React from 'react';
import { Chart } from 'react-google-charts';
import { Cicle } from './styled';

interface CircleProps {
  greenPercent:number
  orangePercent:number
  pinkPercent:number
}

export const ProgressCicle: React.ElementType = ({
  greenPercent,
  orangePercent,
  pinkPercent,
}: CircleProps) => (
  <>
    <Cicle
      height="100%"
      chartType="PieChart"
      data={[
        ['', ''],
        ['', greenPercent],
        ['', orangePercent],
        ['', pinkPercent],
      ]}
      options={{
        pieHole: 0.8,
        colors: ['#7FC008', '#DB8C28', '#EB5757'],
        legend: { position: 'none', display: 'none' },
        animation: {
          animation: false,
        },
      }}
    />
  </>

);

export default ProgressCicle;
