import React from 'react';
import {
  Container, Task, Text, TextTime, Time, RedText,
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
  display:boolean
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
  display,
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
      <RedText display={display}>
        <PinkCicle />
        {notPerfomed}
        {notPerfomedNumber}
        %
      </RedText>
    </Task>
    <Time>
      <div style={{ fontSize: '10px', fontWeight: 400, color: '#B0B0B0' }}>
        {timeAverage}
      </div>
      <TextTime>
        <div>
          {today}
        </div>
        {time}
      </TextTime>
      <TextTime>
        <div>
          {early}
        </div>
        {time}
      </TextTime>
      <TextTime>
        <div>
          {long}
        </div>
        {time}
      </TextTime>
    </Time>
  </Container>
);

export default Footer;
