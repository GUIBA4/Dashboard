import React from 'react';
import { Header } from '../../components';

export const Test: React.FC = () => (
  <>
    <Header
      title="Histórico de eventos"
      selectedText="diário"
      gear
      subTitle="status do dia"
      input
      column
      placeHold="Pesquise"
      downSelected="flex"
    />
  </>
);
