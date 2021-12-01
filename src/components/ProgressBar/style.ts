import styled from 'styled-components';

type BarProps = {
  bluePercentage?:string
  redPercentage?:string
  purplePercentage?:string
}

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  gap:4px;
  width: 50px;
  height: 160px;
  margin-right: 12px;
  transform: rotateX(180deg);
`;

export const BlueBar = styled.div<BarProps>`
  width: 13px;
  height: ${(props: BarProps) => props.bluePercentage || '100%'};
  background-color: #4B9EEA;
`;

export const RedBar = styled.div<BarProps>`
  width: 13px;
  height: ${(props: BarProps) => props.redPercentage || '100%'};
  background-color: #C00808;
`;

export const PurpleBar = styled.div<BarProps>`
  width: 13px;
  height: ${(props: BarProps) => props.purplePercentage || '100%'};
  background-color: #A91B79;
`;
