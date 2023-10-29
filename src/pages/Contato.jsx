import { useState } from "react"
import Menu from "../components/Menu"
import Footer from '../components/Rodape';
import {InformacoesCep, TitlePage } from "../styles/Estilos"
import axios from "axios"

function Cep() {
    const [cep, setCep] = useState('')
    const [data, setData] = useState({})
    const [error, setError] = useState(null)

    function handleCepChange(e) {
        setCep(e.target.value)
    }
 
    function pesquisaCEP() {
        axios
            .get(`https://viacep.com.br/ws/${cep}/json`)
            .then(function(response){
                if(response.data && !response.data.error) {
                    setData(response.data)
                    setError(null)
                } else {
                    setData({})
                    setError('CEP NÃO ENCONTRADO')
                }
            })
            .catch(function(error) {
                setData({})
                setError('CEP NÃO ENCONTRADO')
            })
    }
    
    return (
        <>
            <Menu />
            <TitlePage>Contato</TitlePage>
            <h2>Pesquisa CEP</h2>
            <input type="text" placeholder="Digite aqui" value={cep} onChange={handleCepChange} />
            <button onClick={pesquisaCEP}>PESQUISAR</button>
            {error && <p>{error}</p>}
            {data.cep && (
                <InformacoesCep>
                    <p>CEP: {data.cep} </p>
                    <p>Logradouro: {data.logradouro}</p>
                    <p>Complemento: {data.complemento}</p>
                    <p>Bairro: {data.bairro}</p>
                    <p>UF: {data.uf}</p>
                    <p>DDD: {data.ddd}</p>
                </InformacoesCep>
            )}
            <Footer/>
        </>
    )
}

export default Cep;
