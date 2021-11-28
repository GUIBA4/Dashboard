import React from 'react';
import { Chart } from '../../assets';
import {
  Header,
  Card,
  ProgressBar,
  ProgressCicle,
} from '../../components';
import PercentageBar from '../Mocks/PercentagesBar.json';
import inspections from '../Mocks/ inspections.json';
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
    <div style={{ width: '1200px' }}>
      <Body>
        <h1> Painel de controle </h1>
        <TopContent>
          <Card
            width="738px"
            height="266px"
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
              </Card>
              <Card
                height="323px"
                width="358px"
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
              </Card>
            </BottomConteinerTop>
            <Card
              height="328px"
              width="738px"
            >
              <Header
                title="Inspeções agendadas"
                selected="flex"
                selectedText="diário"
                input
                widthInput="704px"
                placeHold="Pesquise"
                column
              />
            </Card>
          </BottomConteiner>
          <Card
            height="670px"
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
          </Card>
        </BottomContent>
      </Body>
    </div>
  </Container>
);
