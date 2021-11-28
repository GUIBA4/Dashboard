import React from 'react';
import {
  Container,
} from './style';

type WithChildren<T = unknown> = T & {
  children?: React.ReactNode,
};

interface CardProps {
  width:string;
  height:string;
  padding:string;
  children: WithChildren;
}

export const Card: React.ElementType = ({
  width,
  height,
  padding,
  children,
}: CardProps) => (
  <Container
    width={width}
    height={height}
    paddign={padding}
  >
    {children}
  </Container>
);

export default Card;
