import React from 'react';
import {
  Container, Task, Text, TextTime, Time, RedText,
} from './style';
import { GreenCicle, OrangeCicle, PinkCicle } from '../../assets/index';

interface FooterProps {
  performedNumber:number
  notPerfomedNumber:number
  openedNumber:number
  timeToday:string
  timeSevenAgo:string
  timeLastThirty:string
  display:boolean
  exist:boolean
  text:string
  description:string
  visualize:string
}

export const Footer: React.ElementType = ({
  performedNumber,
  exist,
  notPerfomedNumber,
  openedNumber,
  timeToday,
  timeLastThirty,
  timeSevenAgo,
  display,
  text,
  description,
  visualize,
}: FooterProps) => (
  <Container>
    <Task>
      <Text>
        <GreenCicle />
        {text}
        {performedNumber}
        %
      </Text>
      <Text>
        <OrangeCicle />
        {description}
        {openedNumber}
        %
      </Text>
      <RedText display={display}>
        <PinkCicle />
        Não Realizadas -
        {notPerfomedNumber}
        %
      </RedText>
      <p style={{ fontSize: '14px', fontWeight: 600 }}>
        {visualize}
      </p>
    </Task>
    <Time exist={exist}>
      <div style={{ fontSize: '10px', fontWeight: 400, color: '#B0B0B0' }}>
        Média de tempo
      </div>
      <TextTime>
        <div>
          hoje
        </div>
        {timeToday}
      </TextTime>
      <TextTime>
        <div>
          Últimos 7 dias
        </div>
        {timeSevenAgo}
      </TextTime>
      <TextTime>
        <div>
          Últimos 30 dias
        </div>
        {timeLastThirty}
      </TextTime>
    </Time>
  </Container>
);

export default Footer;
