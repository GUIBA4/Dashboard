import React from 'react';
import { Chart } from '../../assets';
import {
  Container,
  ControlPainel,
  Menu,
  Body,
  TopContent,
  GraficBar,
  GraficCircular,
  BottomContent,
  Table1,
  BottomConteiner,
  BottomConteinerTop,
  Table2,
  TextControlPainel,
  Burguer,
} from './style';

export const HomePage: React.FC = () => (
  <Container>
    <Menu>
      <Burguer />
    </Menu>
    <ControlPainel>
      <TextControlPainel>
        <Chart />
        <p> Painel de Controle </p>
      </TextControlPainel>
    </ControlPainel>
    <Body>
      <h1> Painel de controle </h1>
      <TopContent>
        <GraficBar />
        <GraficCircular />
      </TopContent>
      <BottomContent>
        <BottomConteiner>
          <BottomConteinerTop>
            <GraficCircular />
            <GraficCircular />
          </BottomConteinerTop>
          <Table2 />
        </BottomConteiner>
        <Table1 />
      </BottomContent>
    </Body>
  </Container>
);
