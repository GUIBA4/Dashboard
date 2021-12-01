import {
  createContext,
  useContext,
  useState,
} from 'react';
import PercentageBarMock from '../Mocks/PercentagesBar.json';
import inspectionsMock from '../Mocks/ inspections.json';
import tableMock from '../Mocks/table.json';
import tableUpdateMock from '../Mocks/tableUpdate.json';

const DataContext = createContext<DataContextProps>({} as DataContextProps);

type inspectionsProps ={
  greenPercentage:number
  orangePercentage:number
  pinkPercentage:number
  today:string
  sevenAgo:string
  lastThirty:string
}

type percentagesBarProps ={
  bluePercentage:string
  redPercentage:string
  purplePercentage:string
}

type tableProps ={
  name:string
  realized:string
  planned:string
  lastUpdate:string
}

type tableUpdateProps ={
  name:string
  subtitle:string
  svg:boolean
  lastUpdate:string
}

interface DataContextProps {
    tableData:tableProps[]
    tableUpdateData:tableUpdateProps[]
    percentagesBarData:percentagesBarProps[]
    inspectionsData:inspectionsProps[]
}

export const DataProvider: React.FC = ({ children }) => {
  const [inspections] = useState<inspectionsProps[]>(inspectionsMock);
  const [percentagesBar] = useState<percentagesBarProps[]>(PercentageBarMock);
  const [table] = useState<tableProps[]>(tableMock);
  const [tableUpdate] = useState<tableUpdateProps[]>(tableUpdateMock);
  return (

    <DataContext.Provider value={{
      inspectionsData: inspections,
      percentagesBarData: percentagesBar,
      tableData: table,
      tableUpdateData: tableUpdate,
    }}
    >
      {children}
    </DataContext.Provider>
  );
};

export const useData = (): DataContextProps => {
  const context = useContext(DataContext);

  return context;
};
