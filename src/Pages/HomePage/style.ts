import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
`;

export const ControlPainel = styled.div`
  width: 15%;
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
  width: 2.5%;
  background: linear-gradient(180deg, #0DB2D6 8.12%, #4FDA91 71.62%);
`;

export const Burguer = styled.div`
  margin-top: 136px;
  width: 61px;
  height: 61px;
  border-radius: 100%;
  background-color: #FAFAFA;
  position: absolute;
  left: -10px;
`;

export const Body = styled.div`
  width: 82.5%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 33px 22px 22px 56px;
  h1{
    font-size: 25px;
    font-weight: 500;
    margin-bottom: 27px;
  }
`;

export const TopContent = styled.div`
  height: 269px;
  width: 100%;
  display: flex;
  flex-direction: row;
  gap:30px;
`;

export const GraficBar = styled.div`
  width: 738px;
  height: 100%;
  display: flex;
  flex-direction: column;
  border: 0.5px solid #E4E4E4;
  border-radius: 5px;
  padding: 13px 16px;
`;

export const GraficCircular = styled.div`
  width: 347px;
  height: 100%;
  display: flex;
  flex-direction: column;
  border: 0.5px solid #E4E4E4;
  border-radius: 5px;
  padding: 13px 16px;
`;

export const BottomContent = styled.div`
  width: 100%;
  height: 670px;
  display: flex;
  flex-direction: row;
  gap:30px
`;

export const Table1 = styled.div`
  width: 347px;
  height: 100%;
  border: 0.5px solid #E4E4E4;
  border-radius: 5px;
  background-color: blue;
`;

export const BottomConteiner = styled.div`
  width: 738px;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap:14px;
`;

export const BottomConteinerTop = styled.div`
  width: 738px;
  height: 269px;
  display: flex;
  gap:22px;
  flex-direction: row;
`;

export const Table2 = styled.div`
  width: 738px;
  height: 328px;
  border: 0.5px solid #E4E4E4;
  border-radius: 5px;
  background-color: blue;
`;
