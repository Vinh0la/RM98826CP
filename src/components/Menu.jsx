import { StyledNav, StyledLink } from '../styles/Estilos';
import rocket from '../assets/rocket.svg';
import about from '../assets/about.svg';
import contact from '../assets/contact.svg';
import technology from '../assets/technology.svg';



const Menu = () => {
  return (
    <StyledNav>
      <ul style={{ display: 'flex', listStyle: 'none' }}>
        <li><a href="/"><img src={rocket} alt="" /></a></li>
        <li><a href="/a"><img src={about} alt="" /></a></li>
        <li></li>
        <li></li>
      </ul>
    </StyledNav>
  );
};

export default Menu;
