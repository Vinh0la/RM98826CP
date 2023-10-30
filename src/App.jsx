import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { lightTheme, darkTheme, GlobalStyle, Button } from './styles/Estilos';
import { ThemeProvider } from 'styled-components';
import Casa from './pages/home';
import Sobre from './pages/Sobre';
import Contato from './pages/Contato';
import Tecnologia from './pages/Tecnologia'

function App() {
  // Definição do estado para alternar entre os temas light e dark
  const [theme, setTheme] = useState('light');

  // Função para alternar entre os temas light e dark
  const mudarTheme = () => {
    setTheme(mudar => (mudar === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
       <Button onClick={mudarTheme}>Theme</Button> {/* Botão para alternar o tema */}
      <GlobalStyle /> 
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Casa />} /> {/* Rota para a página inicial */}
          <Route path='/sobre' element={<Sobre />} /> {/* Rota para a página 'Sobre' */}
          <Route path='/Contato' element={<Contato />} /> {/* Rota para a página 'Contato' */}
          <Route path='/Tecnologia' element={<Tecnologia />} /> {/* Rota para a página 'Tecnologia' */}
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
