import styled from 'styled-components';

type CardProps = {
  maxWidth?:string
  height?:string
  paddign?:string
  margin?:string
}

export const Container = styled.div<CardProps>`
  width: 100%;
  max-width: ${(props: CardProps) => props.maxWidth || '100%'};
  height: ${(props: CardProps) => props.height || '100%'};
  background: #FFFFFF;
  border: 0.5px solid #E4E4E4;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.05);
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: ${(props: CardProps) => props.paddign || '18px 11px'};
  margin-bottom:${(props: CardProps) => props.margin || '10px'};
`;
