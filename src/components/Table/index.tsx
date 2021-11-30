import React from 'react';
import {
  Container, Content, TableContent,
} from './style';

interface TableProps {
  name:string
  planned:string
  lastUpdate:string
  realized:string
}

export const Table: React.ElementType = ({
  name,
  planned,
  lastUpdate,
  realized,
}: TableProps) => (
  <Container>
    <TableContent>
      <div>
        {name}
      </div>
      <div style={{
        display: 'flex', gap: '30px', width: 300, justifyContent: 'end',
      }}
      >
        <Content>
          {planned}
        </Content>
        <Content>
          {realized}
        </Content>
        <div style={{
          width: 104, textAlign: 'center', fontSize: 10, fontWeight: 400,
        }}
        >
          {lastUpdate}
        </div>
      </div>
    </TableContent>
  </Container>

);

export default Table;
