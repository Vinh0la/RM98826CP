import Menu from '../components/Menu';
import Footer from '../components/Rodape';
import {Section, CircleImg } from '../styles/Estilos';
import ReactIcon from '../assets/icons/react.svg'
import SatelieIcon from '../assets/icons/SateliteIcon.svg'
import Dev from '../assets/images/Dev.jpg'

export default () => {
    return (
        <>
            <Menu />
            <Section>
                <h2>Sobre o Projeto</h2>
                <p>O projeto é desenvolvido com a utilização das tecnologias Vite + React, incorporando funcionalidades de modo escuro e claro, integração de API para pesquisa de CEP e a estilização completa feita por meio da ferramenta Styled Components.</p>
                <img src={ReactIcon} alt="Logo do React" />

                <h2>Sobre o Desenvolvedor</h2>
                <p>No início da minha jornada como estudante de Análise e Desenvolvimento de Sistemas, estou explorando o mundo do desenvolvimento web. Este projeto é uma oportunidade para mim crescer e aprimorar minhas habilidades práticas, aplicando os conhecimentos que venho adquirindo na minha universidade!</p>
                <CircleImg><img src={Dev} alt="Retrato do desenvolvedor da página"/></CircleImg>

                <h2>Tema</h2>
                <p>Exploraremos um pouco sobre a Tecnologia espacial que engloba o conjunto de conhecimentos, ferramentas, dispositivos e veículos desenvolvidos para explorar e compreender o espaço!</p>
                <img src={SatelieIcon} alt="Pequeno satelite" />

            </Section>
            <Footer/>
        </>
    );
}