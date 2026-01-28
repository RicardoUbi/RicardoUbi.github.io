import { MantineProvider } from '@mantine/core';
import '@mantine/core/styles.css';
import { theme } from './constants/theme';
import Layout from './components/Layout';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Sobre from './pages/about';
import Portfolio from './pages/portfolio';
import Documentos from './pages/documents';

export default function App() {
  return (
    <MantineProvider theme={theme} defaultColorScheme="dark">
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/documentos" element={<Documentos />} />
          <Route path="*" element={<h1>Página não encontrada</h1>} />
        </Routes>
      </Layout>
    </MantineProvider>
  );
}