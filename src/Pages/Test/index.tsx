import React from 'react';
import {
  Card,
  Footer,
  Header,
  ProgressBar,
  ProgressCicle,
  Table,
  TableUpdate,

} from '../../components';

export const Test: React.FC = () => (
  <>
    <TableUpdate
      name="Nome do plano de ação"
      subtitle="responsável: Bruno Barros"
      lastUpdate="10:45 10/10/10"
      direction
      position
      svg
      column
      color
      exist
    />
  </>
);
