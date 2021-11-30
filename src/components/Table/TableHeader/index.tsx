import React from 'react';
import {
  Content, TableColumns,
} from './style';

interface TableProps {
  name:string
  planned:string
  lastUpdate:string
  realized:string
}

export const TableHeader: React.ElementType = ({
  name,
  planned,
  lastUpdate,
  realized,
}: TableProps) => (

  <TableColumns>
    <div>
      {name}
    </div>
    <div style={{ display: 'flex', gap: '30px' }}>
      <Content>
        {planned}
      </Content>
      <Content>
        {realized}
      </Content>
      <div style={{ width: 104, textAlign: 'center' }}>
        {lastUpdate}
      </div>
    </div>
  </TableColumns>

);

export default TableHeader;
