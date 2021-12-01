import styled from 'styled-components';

type TableProps = {
  width?:string;
  gap?:boolean;
  direction?:boolean;
  position?:boolean;
  column?:boolean;
  color?:string;
  exist?:boolean;
  svg?:boolean;
}

export const Container = styled.div<TableProps>`
  width: ${(props: TableProps) => props.width || '100%'};
  display: flex;
  flex-direction:column;
`;

export const TableContent = styled.div<TableProps>`
  display:flex;
  justify-content: space-between;
  flex-direction: row;
  font-weight: 500;
  font-size: 12px;
  border-bottom: 1px solid #EBEBEB;
  line-height: 21px;
`;

export const Content = styled.div<TableProps>`
  width: 32.5px;
  text-align: center;
  font-size: 10px;
  font-weight: 400;
  svg{
    display:${(props) => (props.exist ? 'flex' : 'none')};
  }
`;

export const TableInformations = styled.div<TableProps>`
  width: ${(props) => (props.column ? 'none' : '300px')};
  justify-content:end;
  display: flex;
  gap:${(props) => (props.gap ? '30px' : 'none')};
  flex-direction:${(props) => (props.direction ? 'column' : 'row')};;
`;

export const TableLastUpdate = styled.div<TableProps>`
  width: 104px;
  text-align:${(props) => (props.position ? 'end' : 'center')};
  font-size: 10px;
  align-items: flex-end;
  font-weight: 400;
  color:${(props) => (props.color ? '#BDBDBD' : '#333333')};
  margin-left:50px;
`;

export const ContentPlanned = styled.div<TableProps>`
  width: 85px;
  text-align: center;
  font-size: 10px;
  font-weight: 400;
  gap:6px;
  display: flex;
  flex-direction: row;
  svg{
    display:${(props) => (props.svg ? 'flex' : 'none')};
  }
`;
