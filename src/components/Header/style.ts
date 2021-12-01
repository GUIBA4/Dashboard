import styled from 'styled-components';

type HeaderProps = {
  column?:boolean
  widthSelected?:string
  WidthInput?:string
  selected?:string
  gear?:boolean
  input?:boolean
}

export const Container = styled.div<HeaderProps>`
  width: 100%;
  display:flex ;
  font-size: 14px;
  font-weight: 600;
  flex-direction: ${(props) => (props.column ? 'column' : 'row')};
`;

export const TopContent = styled.div`
  width: 100%;
  display:flex ;
  justify-content: space-between;
`;

export const Selected = styled.div<HeaderProps>`
  display: ${(props) => (props.selected || 'none')};
  justify-content: space-between;
  align-items: center;
  width: ${(props: HeaderProps) => props.widthSelected || '244px'};
  height: 28px;
  background-color: #C4C4C4;
  border-radius:100px;
  padding: 4px 16px;
`;

export const GearIcon = styled.div<HeaderProps>`
  margin-left: 11px;
  display: ${(props) => (props.gear ? 'gear' : 'none')};
  align-items: center;
`;

export const Input = styled.div<HeaderProps>`
  display: ${(props) => (props.input ? 'input' : 'none')};
  width: ${(props: HeaderProps) => props.WidthInput || '312px'};
  height: 34px;
  border: 1px solid #EBEBEB;
  border-radius:100px;
  padding: 7px 20px;
  font-size: 12px;
  font-weight: 500;
  margin-top: 12px;
`;
