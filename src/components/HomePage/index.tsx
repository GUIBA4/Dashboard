import React from 'react';
import { Container } from './style';
import { Logo } from '../../assets';

export const HomePage: React.FC = () => (
  <Container>
    <img src={Logo} alt="" />
    <h1>ReactJS Boilerplate</h1>
  </Container>
);
