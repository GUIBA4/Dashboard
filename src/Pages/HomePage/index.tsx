import React from 'react';
import { Chart } from '../../assets/index';
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
import PercentageBar from '../Mocks/PercentagesBar.json';
import inspections from '../Mocks/ inspections.json';
import table from '../Mocks/table.json';
import tableUpdate from '../Mocks/tableUpdate.json';
import {
  Container,
  ControlPainel,
  Menu,
  Body,
  TopContent,
  BottomContent,
  BottomConteiner,
  BottomConteinerTop,
  TextControlPainel,
  Burguer,
  Bar,
} from './style';

export const HomePage: React.FC = () => (
  <Container>
    <Menu>
      <Burguer>
        <Bar />
        <Bar />
        <Bar />
      </Burguer>
    </Menu>
    <ControlPainel>
      <TextControlPainel>
        <Chart />
        <p> Painel de Controle </p>
      </TextControlPainel>
    </ControlPainel>
    <div style={{ width: '1200px' }}>
      <Body>
        <h1> Painel de controle </h1>
        <TopContent>
          <Card
            width="738px"
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
              {PercentageBar.map((
                percentage:
                {
                bluePercentage:string,
                redPercentage:string,
                purplePercentage:string
              },
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
                performed="Inspeções realizadas"
                opened="Planos de ação criados"
              />
            </div>
          </Card>
          <Card
            height="266px"
          >
            <Header
              title="Planos de ação"
              subTitle="visão geral"
              gear
            />
            {inspections.map((
              percent:{
                greenPercentage:number,
                orangePercentage:number,
                pinkPercentage:number
              },
            ) => (
              <ProgressCicle
                greenPercent={percent.greenPercentage}
                orangePercent={percent.orangePercentage}
                pinkPercent={percent.pinkPercentage}
              />
            ))}

          </Card>
        </TopContent>
        <BottomContent>
          <BottomConteiner>
            <BottomConteinerTop>
              <Card
                height="328px"
                width="345px"
                padding="11px 14px"
              >
                <Header
                  title="Inpseções"
                  subTitle="status do dia"
                  gear
                />
                {inspections.map((
                  percent:{
                greenPercentage:number,
                orangePercentage:number,
                pinkPercentage:number
              },
                ) => (
                  <ProgressCicle
                    greenPercent={percent.greenPercentage}
                    orangePercent={percent.orangePercentage}
                    pinkPercent={percent.pinkPercentage}
                  />
                ))}
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
                  display="flex"
                />
              </Card>
              <Card
                height="323px"
                width="358px"
                padding="6px 12px"
              >
                <Header
                  title="Planos de ação"
                  subTitle="status do dia"
                  gear
                />
                {inspections.map((
                  percent:{
                greenPercentage:number,
                orangePercentage:number,
                pinkPercentage:number
              },
                ) => (
                  <ProgressCicle
                    greenPercent={percent.greenPercentage}
                    orangePercent={percent.orangePercentage}
                    pinkPercent={percent.pinkPercentage}
                  />
                ))}
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
                  display="flex"
                />
              </Card>
            </BottomConteinerTop>
            <Card
              height="328px"
              width="738px"
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
              <TableHeader
                name="NAME"
                planned="PLANEJADO"
                realized="REALIZADO"
                lastUpdate="ÚLTIMA ATUALIZAÇÃO"
              />
              {table.map((
                informations:{
                  name:string,
                  planned:string,
                  realized:string,
                  lastUpdate:string
                },
              ) => (
                <Table
                  name={informations.name}
                  planned={informations.planned}
                  realized={informations.realized}
                  lastUpdate={informations.lastUpdate}
                />
              ))}

            </Card>
          </BottomConteiner>
          <Card
            height="670px"
            padding="7px 13px 38px 13px"
          >
            <Header
              title="Planos de ação"
              subTitle="atualizações"
              downSelected="flex"
              selectedText="pendente"
              input
              column
              gear
            />
            {tableUpdate.map((
              information:{
                name:string,
                subTitle:string,
                lastUpdate:string,
                svg:boolean
              },
            ) => (
              <TableUpdate
                name={information.name}
                subTitle={information.subTitle}
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
        </BottomContent>
      </Body>
    </div>
  </Container>
);
