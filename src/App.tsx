import { ThemeProvider } from 'styled-components';
import { Routes } from './routes';
import { GlobalStyle } from './styles/global';
import { theme } from './styles/theme';
import { DataProvider } from './hooks/context';

export const App: React.FC = () => (
  <ThemeProvider theme={theme}>
    <DataProvider>
      <Routes />
      <GlobalStyle />
    </DataProvider>
  </ThemeProvider>
);
