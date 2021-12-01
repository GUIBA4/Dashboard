import React from 'react';
import {
  Container,
} from './style';

type WithChildren<T = unknown> = T & {
  children?: React.ReactNode,
};

interface CardProps {
  maxWidth:string;
  height:string;
  padding:string;
  children: WithChildren;
  margin:string;
}

export const Card: React.ElementType = ({
  maxWidth,
  height,
  padding,
  children,
  margin,
}: CardProps) => (
  <Container
    maxWidth={maxWidth}
    height={height}
    paddign={padding}
    margin={margin}
  >
    {children}
  </Container>
);

export default Card;
