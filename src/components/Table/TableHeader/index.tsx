import React from 'react';
import {
  Content, TableColumns,
} from './style';

export const TableHeader: React.ElementType = () => (

  <TableColumns>
    <div>
      NOME
    </div>
    <div style={{ display: 'flex', gap: '30px' }}>
      <Content>
        PLANEJADO
      </Content>
      <Content>
        REALIZADO
      </Content>
      <div style={{ width: 104, textAlign: 'center' }}>
        ÚLTIMA ATUALIZAÇÃO
      </div>
    </div>
  </TableColumns>

);

export default TableHeader;
