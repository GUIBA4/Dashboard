import styled from 'styled-components';

type FooterProps ={

}

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const Task = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: end;
  gap:9px;
`;

export const Text = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 4.9px;
  font-weight: 300;
  font-size: 9px;
`;

export const Time = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap:9px;
`;

export const TextTime = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  font-weight: 300;
  font-size: 9px;
`;
