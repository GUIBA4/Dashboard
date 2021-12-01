import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: row;
`;

export const ControlPainel = styled.div`
  width: 235px;
  border: 1px solid #EBEBEB;
  padding-left: 23px;
  position: relative;
  p {
    color: #0794B2;
    font-weight: 400;
    font-size:15px;
  }
`;
export const ArrowPainel = styled.div`
  position: absolute;
  width: 15px;
  height: 15px;
  border-radius: 100%;
  background-color: #0794B2;
  display: flex;
  justify-content: center;
  top:86px;
  right: -7px;
`;

export const TextControlPainel = styled.div`
  display: flex;
  flex-direction: row;
  gap:10px;
  margin-top: 111px;
`;

export const Menu = styled.div`
  min-width: 51px;
  background: linear-gradient(180deg, #0DB2D6 8.12%, #4FDA91 71.62%);
`;

export const Burguer = styled.div`
  margin-top: 136px;
  width: 61px;
  height: 61px;
  border-radius: 100%;
  background-color: #FAFAFA;
  position: absolute;
  left: -5.6px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Bar = styled.div`
  width: 20px;
  height: 1.53px;
  background-color: #333333;
  margin-bottom: 3px;
`;

export const Body = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 33px 22px 56px 22px;
  h1{
    font-size: 25px;
    font-weight: 500;
    margin-bottom: 27px;
  }
`;
export const Content = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  @media screen and (max-width: 1340px) {
    flex-direction: column;
  }

`;

export const RightContent = styled.div`
  width:100% ;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media screen and (max-width: 1340px) {
    flex-direction: row-reverse;
    justify-content:flex-end;
    gap:43px;
  }
`;

export const LeftContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-right: 31px;
`;

export const LeftMediumConteiner = styled.div`
  display: flex;
  gap:43px;
  flex-direction: row;
`;
