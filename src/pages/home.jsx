import Menu from '../components/Menu';
import Footer from '../components/Rodape';
import { TitlePage, Section, StyledFooter } from '../styles/Estilos';
import satelite from '../assets/images/satelite.jpg'

export default () => {
    return (
        <>
            <Menu />
            <TitlePage>Home</TitlePage>
            <Section>
                <h2>Seja bem-vindo!</h2>
                <p>Este é um pequeno site sobre tecnologia espacial desenvolvido como projeto universitário!</p>
                <img src={satelite} alt="Satelite orbitando a terra" />
                <StyledFooter>Direitos reservados</StyledFooter>
            </Section>
            <Footer/>
        </>
    );
}
