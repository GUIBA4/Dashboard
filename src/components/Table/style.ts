import styled from 'styled-components';

type TableProps = {
  width?:string;
  height?:string;
  display?:boolean;
}

export const Container = styled.div<TableProps>`
  width: ${(props: TableProps) => props.width || '100%'};
  height: ${(props: TableProps) => props.height || '100%'};
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

export const Content = styled.div`
  width: 32.5px;
  text-align: center;
  font-size: 10px;
  font-weight: 400;
`;
