import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
`;

export const ControlPainel = styled.div`
  width: 235px;
  border: 1px solid #EBEBEB;
  padding-left: 23px;
  p {
    color: #0794B2;
    font-weight: 400;
    font-size:15px;
  }
`;

export const TextControlPainel = styled.div`
  display: flex;
  flex-direction: row;
  gap:10px;
  margin-top: 111px;
`;

export const Menu = styled.div`
  width: 51px;
  background: linear-gradient(180deg, #0DB2D6 8.12%, #4FDA91 71.62%);
`;

export const Burguer = styled.div`
  margin-top: 136px;
  width: 61px;
  height: 61px;
  border-radius: 100%;
  background-color: #FAFAFA;
  position: absolute;
  left: -5.5px;
`;

export const Body = styled.div`
  width: 100%;
  height: 1088px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 33px 22px 22px 56px;
  h1{
    font-size: 25px;
    font-weight: 500;
    margin-bottom: 27px;
  }
`;

export const TopContent = styled.div`
  width:100% ;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const BottomContent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const BottomConteiner = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const BottomConteinerTop = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
`;
