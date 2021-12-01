import React from 'react';
import {
  Container, Content, TableContent, TableInformations, TableLastUpdate, ContentPlanned,
} from './style';
import { Realized, NotRealized, ArrowRight } from '../../../assets/index';

interface TableProps {
  name:string;
  planned:string;
  lastUpdate:string;
  realized:string;
  subtitle:string;
  gap:boolean;
  direction:boolean;
  position:boolean;
  column:boolean;
  color:string;
  exist:boolean;
  svg:boolean;
}

export const TableUpdate: React.ElementType = ({
  name,
  planned,
  lastUpdate,
  realized,
  subtitle,
  gap,
  direction,
  position,
  column,
  color,
  exist,
  svg,
}: TableProps) => (

  <Container>
    <TableContent>
      <div>
        <div>
          {name}
        </div>
        <div
          style={{
            fontSize: 12,
            fontWeight: 400,
            color: '#B0B0B0',
          }}
        >
          {subtitle}
        </div>
      </div>

      <TableInformations
        gap={gap}
        direction={direction}
        position={position}
        column={column}
      >
        <div style={{ display: 'flex', flexDirection: 'row' }}>
          <ContentPlanned svg={svg}>
            {planned}
            <NotRealized />
            <ArrowRight />
          </ContentPlanned>

          <Content exist={exist}>
            {realized}
            <Realized />
          </Content>
        </div>
        <TableLastUpdate
          color={color}
        >
          {lastUpdate}
        </TableLastUpdate>
      </TableInformations>
    </TableContent>
  </Container>

);

export default TableUpdate;
