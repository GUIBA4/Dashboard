import React from 'react';
import {
  Card,
  Footer,
  Header,
  ProgressBar,
  ProgressCicle,

} from '../../components';

export const Test: React.FC = () => (
  <>
    <Footer
      performed="Realizadas - "
      notPerfomed="Em Aberto - "
      opened="Não Realizadas - "
      performedNumber={58.6}
      notPerfomedNumber={34.9}
      openedNumber={6.5}
      time="10 min"
      long="Últimos 30 dias"
      early="Últimos 7 dias "
      today="hoje"
      timeAverage="Média de tempo"
    />
  </>
);
