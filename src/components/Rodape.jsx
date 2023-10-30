import React from 'react';
import { StyledFooter } from '../styles/Estilos';

const Footer = () => {
    // Componente que representa o rodapé das páginas
    return (
      <StyledFooter>
        <p>&copy; {new Date().getFullYear()} Todos os direitos reservados - Gustavo Vinhola dos Santos</p>
      </StyledFooter>
    );
  };
  
  export default Footer;