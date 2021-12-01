import React from 'react';
import {
  BlueBar,
  Container,
  RedBar,
  PurpleBar,
} from './style';

interface BarProps {
  bluePercentage:string
  redPercentage:string
  purplePercentage:string
}

export const ProgressBar: React.ElementType = ({
  bluePercentage,
  redPercentage,
  purplePercentage,
}: BarProps) => (
  <>
    <Container>
      <BlueBar
        bluePercentage={bluePercentage}
      />
      <RedBar
        redPercentage={redPercentage}
      />
      <PurpleBar
        purplePercentage={purplePercentage}
      />
    </Container>
  </>
);

export default ProgressBar;
