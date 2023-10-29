import Menu from '../components/Menu';
import Footer from '../components/Rodape';
import { TitlePage } from '../styles/Estilos';

export default () => {
    return (
        <>
            <Menu />
            <TitlePage>Sobre</TitlePage>
            <Footer/>
        </>
    );
}