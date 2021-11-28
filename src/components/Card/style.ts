import styled from 'styled-components';

type CardProps = {
  width?:string
  height?:string
  paddign?:string
}

export const Container = styled.div<CardProps>`
  width: ${(props: CardProps) => props.width || '347px'};
  height: ${(props: CardProps) => props.height || '244px'};
  background: #FFFFFF;
  border: 0.5px solid #E4E4E4;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.05);
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: ${(props: CardProps) => props.paddign || '18px 11px'};
`;
