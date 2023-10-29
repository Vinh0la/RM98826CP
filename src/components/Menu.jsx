import React from 'react';
import { StyledNav, StyledList } from '../styles/Estilos';
import rocket from '../assets/icons/rocket.svg';
import about from '../assets/icons/about.svg';
import contact from '../assets/icons/contact.svg';
import technology from '../assets/icons/technology.svg';

const Menu = () => {
  return (
    <StyledNav>
      <StyledList>
        <li><a href="/"><img src={rocket} alt="Icone de foguete"/></a></li>
        <li><a href="/sobre"><img src={about} alt="Icone de sobre"/></a></li>  
        <li><a href="/Contato"><img src={contact} alt="Icone de contato"/></a></li>    
        <li><a href="/Tecnologia"><img src={technology} alt="Icone de tecnologia"/></a></li>  
      </StyledList>
    </StyledNav>
  );
};
export default Menu;
