import React from 'react';
import { ArrowDown, Gear } from '../../assets';
import {
  Container,
  GearIcon,
  Input,
  Selected,
  TopContent,
} from './style';

interface HeaderProps {
  title:string;
  column:boolean
  widthSelected:string
  widthInput:string
  selected:'flex'
  downSelected:'flex'
  input:boolean
  selectedText:string
  gear:boolean
  subTitle:string
  placeHold:string
}

export const Header: React.ElementType = ({
  title,
  column,
  widthSelected,
  selected,
  selectedText,
  gear,
  subTitle,
  placeHold,
  widthInput,
  input,
  downSelected,
}: HeaderProps) => (
  <Container column={column}>
    <TopContent>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        {title}
        <div style={{ fontWeight: 400, fontSize: '12px' }}>
          {subTitle}
        </div>
      </div>
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <Selected
          selected={selected}
          widthSelected={widthSelected}
        >
          {selectedText}
          <ArrowDown />
        </Selected>
        <GearIcon
          gear={gear}
        >
          <Gear />
        </GearIcon>
      </div>
    </TopContent>
    <Input input={input} WidthInput={widthInput}>
      {placeHold}
    </Input>
    <div style={{ marginTop: '20px' }}>
      <Selected
        selected={downSelected}
        widthSelected={widthSelected}
      >
        {selectedText}
        <ArrowDown />
      </Selected>
    </div>
  </Container>
);

export default Header;
