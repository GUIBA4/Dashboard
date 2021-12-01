import React from 'react';
import { ArrowLeft, Chart } from '../../assets/index';
import {
  Header,
  Card,
  ProgressBar,
  ProgressCicle,
  Footer,
  Table,
  TableHeader,
  TableUpdate,
} from '../../components';
import { useData } from '../../hooks/context';
import {
  Container,
  ControlPainel,
  Menu,
  Body,
  RightContent,
  LeftContent,
  LeftMediumConteiner,
  TextControlPainel,
  Burguer,
  Bar,
  Content,
  ArrowPainel,
} from './style';

type inspectionsProps ={
  greenPercentage:number
  orangePercentage:number
  pinkPercentage:number
  today:string
  sevenAgo:string
  lastThirty:string
}

type percentagesBarProps ={
  bluePercentage:string
  redPercentage:string
  purplePercentage:string
}

type tableProps ={
  name:string
  realized:string
  planned:string
  lastUpdate:string
}

type tableUpdateProps ={
  name:string
  subtitle:string
  svg:boolean
  lastUpdate:string
}

export const HomePage: React.FC = () => {
  const {
    tableData,
    inspectionsData,
    tableUpdateData,
    percentagesBarData,
  } = useData();
  return (
    <Container>
      <Menu>
        <Burguer>
          <Bar />
          <Bar />
          <Bar />
        </Burguer>
      </Menu>
      <ControlPainel>
        <ArrowPainel>
          <ArrowLeft />
        </ArrowPainel>
        <TextControlPainel>
          <Chart />
          <p> Painel de Controle </p>
        </TextControlPainel>
      </ControlPainel>

      <Body>
        <h1> Painel de controle </h1>
        <Content>

          <LeftContent>

            <Card
              maxWidth="738px"
              height="266px"
              padding="11px 16px"
            >
              <Header
                title="Histórico de eventos"
                selected="flex"
                selectedText="diário"
                gear
              />
              <div style={{ paddingLeft: '71px', display: 'flex', flexDirection: 'row' }}>
                {percentagesBarData.map((
                  percentage:percentagesBarProps,
                ) => (
                  <ProgressBar
                    bluePercentage={percentage.bluePercentage}
                    redPercentage={percentage.redPercentage}
                    purplePercentage={percentage.purplePercentage}
                  />
                ))}
              </div>
              <div style={{ paddingLeft: '71px' }}>
                <Footer
                  text="Inspeções realizadas"
                  description="Planos de ação criados"
                />
              </div>
            </Card>
            <LeftMediumConteiner>
              <Card
                height="323px"
                maxWidth="347px"
                padding="11px 14px"
              >
                <Header
                  title="Inpseções"
                  subtitle="status do dia"
                  gear
                />
                {inspectionsData.map((
                  percent:inspectionsProps,
                ) => (
                  <ProgressCicle
                    greenPercent={percent.greenPercentage}
                    orangePercent={percent.orangePercentage}
                    pinkPercent={percent.pinkPercentage}
                  />
                ))}
                {inspectionsData.map((
                  percent:inspectionsProps,
                ) => (
                  <Footer
                    performedNumber={percent.greenPercentage}
                    notPerfomedNumber={percent.pinkPercentage}
                    openedNumber={percent.orangePercentage}
                    timeToday={percent.today}
                    timeSevenAgo={percent.sevenAgo}
                    timeLastThirty={percent.lastThirty}
                    display
                    exist
                    text="Realizadas - "
                    description="Em Aberto - "
                  />
                ))}
              </Card>
              <Card
                height="323px"
                maxWidth="347px"
                padding="11px 14px"
              >
                <Header
                  title="Planos de ação"
                  subtitle="status do dia"
                  gear
                />
                {inspectionsData.map((
                  percent:inspectionsProps,
                ) => (
                  <ProgressCicle
                    greenPercent={percent.greenPercentage}
                    orangePercent={percent.orangePercentage}
                    pinkPercent={percent.pinkPercentage}
                  />
                ))}
                {inspectionsData.map((
                  percent:inspectionsProps,
                ) => (
                  <Footer
                    performedNumber={percent.greenPercentage}
                    notPerfomedNumber={percent.pinkPercentage}
                    openedNumber={percent.orangePercentage}
                    timeToday={percent.today}
                    timeSevenAgo={percent.sevenAgo}
                    timeLastThirty={percent.lastThirty}
                    display
                    exist
                    text="Realizadas - "
                    description="Em Aberto - "
                    visualize="visualizar detalhes"
                  />
                ))}

              </Card>
            </LeftMediumConteiner>
            <Card
              height="328px"
              maxWidth="738px"
              padding="19px 32px 32px 23px"

            >
              <Header
                selectedText="diário"
                title="Inspeções agendadas"
                selected="flex"
                widthInput="704px"
                input
                placeHold="Pesquise"
                column
              />
              <TableHeader />
              {tableData.map((
                informations:tableProps,
              ) => (
                <Table
                  name={informations.name}
                  planned={informations.planned}
                  realized={informations.realized}
                  lastUpdate={informations.lastUpdate}
                />
              ))}

            </Card>

          </LeftContent>
          <RightContent>

            <Card
              maxWidth="347px"
              height="256px"
              padding="11px 14px"
            >
              <Header
                title="Planos de ação"
                subtitle="visão geral"
                gear
              />
              {inspectionsData.map((
                percent:inspectionsProps,
              ) => (
                <ProgressCicle
                  greenPercent={percent.greenPercentage}
                  orangePercent={percent.orangePercentage}
                  pinkPercent={percent.pinkPercentage}
                />
              ))}
              <div />
            </Card>
            <Card
              maxWidth="347px"
              height="670px"
              padding="7px 13px 38px 13px"
            >
              <Header
                title="Planos de ação"
                subtitle="atualizações"
                downSelected="flex"
                selectedText="pendente"
                input
                column
                gear
              />
              {tableUpdateData.map((
                information:tableUpdateProps,
              ) => (
                <TableUpdate
                  name={information.name}
                  subtitle={information.subtitle}
                  lastUpdate={information.lastUpdate}
                  direction
                  position
                  svg={information.svg}
                  column
                  color
                  exist
                />
              ))}

            </Card>
          </RightContent>
        </Content>
      </Body>

    </Container>
  );
};
