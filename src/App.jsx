import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { lightTheme, darkTheme, GlobalStyle } from './styles/Estilos';
import { ThemeProvider } from 'styled-components';
import Casa from './pages/home';
import Sobre from './pages/Sobre';
import Contato from './pages/Contato';
import Tecnologia from './pages/Tecnologia'

function App() {
  const [theme, setTheme] = useState('light');

  const mudarTheme = () => {
    setTheme(mudar => (mudar === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <button onClick={mudarTheme}>BOTÃO</button>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Casa />} />
          <Route path='/sobre' element={<Sobre />} />
          <Route path='/Contato' element={<Contato />} />
          <Route path='/Tecnologia' element={<Tecnologia />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
