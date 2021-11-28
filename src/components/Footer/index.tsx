import React from 'react';
import {
  Container, Task, Text, TextTime, Time,
} from './style';
import { GreenCicle, OrangeCicle, PinkCicle } from '../../assets/index';

interface FooterProps {
  performed:string
  notPerfomed:string
  opened:string
  performedNumber:number
  notPerfomedNumber:number
  openedNumber:number
  time:string
  today:string
  early:string
  long:string
  timeAverage:string
}

export const Footer: React.ElementType = ({
  performed,
  notPerfomed,
  opened,
  performedNumber,
  notPerfomedNumber,
  openedNumber,
  time,
  long,
  early,
  today,
  timeAverage,
}: FooterProps) => (
  <Container>
    <Task>
      <Text>
        <GreenCicle />
        {performed}
        {performedNumber}
        %
      </Text>
      <Text>
        <OrangeCicle />
        {opened}
        {openedNumber}
        %
      </Text>
      <Text>
        <PinkCicle />
        {notPerfomed}
        {notPerfomedNumber}
        %
      </Text>
    </Task>
    <Time>
      <div style={{ fontSize: '10px', fontWeight: 400, color: '#B0B0B0' }}>
        {timeAverage}
      </div>
      <TextTime>
        {today}
        {time}
      </TextTime>
      <TextTime>
        {early}
        {time}
      </TextTime>
      <TextTime>
        {long}
        {time}
      </TextTime>
    </Time>
  </Container>
);

export default Footer;
