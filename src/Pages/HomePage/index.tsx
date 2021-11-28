import React from 'react';
import { Chart } from '../../assets';
import { Header } from '../../components';
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
        <GraficBar>
          <Header
            title="Histórico de eventos"
            selected="flex"
            selectedText="diário"
            gear
          />
        </GraficBar>
        <GraficCircular>
          <Header
            title="Planos de ação"
            subTitle="visão geral"
            gear
          />
        </GraficCircular>
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
