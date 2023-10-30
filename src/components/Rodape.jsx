import React from 'react';
import { StyledFooter } from '../styles/Estilos';

const Footer = () => {
    return (
      <StyledFooter>
        <p>&copy; {new Date().getFullYear()} Todos os direitos reservados - Gustavo Vinhola dos Santos</p>
      </StyledFooter>
    );
  };
  
  export default Footer;