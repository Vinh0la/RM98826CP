import Menu from '../components/Menu';
import Footer from '../components/Rodape';
import { TitlePage, Section, Center } from '../styles/Estilos';
import modelos from '../assets/images/tecespaciais.jpg'

export default () => {
    return (
        <>
            <Menu />
            <TitlePage>Tecnologia Espacial</TitlePage>
            <Section>
                <h2>O que é?</h2>
                <p>A tecnologia espacial é essencial para a viagem ao espaço, comunicação via satélite, observação astronômica, pesquisa científica, exploração de planetas e galáxias, entre outros. Além disso, muitas das tecnologias utilizadas no espaço têm aplicações práticas aqui na Terra.</p>
                <hr/>
                <h2>Tipos de tecnologias espacias</h2>
                <ul>
                    <li><strong>Veículos Espaciais:</strong> Incluem foguetes, naves espaciais tripuladas e não tripuladas, que são projetados para transportar astronautas, satélites e instrumentos para o espaço.</li>
                    <li><strong>Satélites:</strong> São colocados em órbita ao redor da Terra para comunicação, observação da Terra, pesquisas científicas e muito mais.</li>
                    <li><strong>Sistemas de Propulsão:</strong> São desenvolvidos para impulsionar naves e sondas espaciais, permitindo a exploração e o movimento no espaço.</li>
                    <li><strong>Tecnologias de Observação e Instrumentação:</strong> Incluem telescópios espaciais, sondas de exploração, instrumentos de medição remota e câmeras para coleta de dados.</li>
                    <li><strong>Tecnologia de Comunicação Espacial:</strong> Engloba sistemas de comunicação via satélite que permitem a transmissão de informações de e para o espaço.</li>
                    <li><strong>Tecnologias de Proteção e Suporte à Vida:</strong> Incluem sistemas de suporte à vida, como reciclagem de ar e água, proteção contra radiação e métodos para garantir a sobrevivência de seres humanos no espaço.</li>
                </ul>
                <Center>
                <img src={modelos} height="250px" width="400px "alt="Diversos modelos de tecnologias espaciais" />
                </Center>
                <hr/>
                <p>A tecnologia espacial continua a evoluir, impulsionando inovações e descobertas significativas, moldando o futuro da exploração espacial e contribuindo para a compreensão mais profunda do universo. Ela desempenha um papel vital na busca por respostas a perguntas fundamentais sobre a natureza e a origem do cosmos.</p>
            </Section>
            <Footer />
        </>
    );
}
