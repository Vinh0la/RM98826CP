import React, { useState } from "react";
import Menu from "../components/Menu";
import Footer from '../components/Rodape';
import {TitlePage, Container, Form } from "../styles/Estilos";
import axios from "axios";

function Cep() {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [cep, setCep] = useState('');
    const [rua, setRua] = useState('');
    const [bairro, setBairro] = useState('');
    const [numero, setNumero] = useState('');
    const [error, setError] = useState(null);
    const [successMessage, setSuccessMessage] = useState('');
  
    function handleCepChange(e) {
      setCep(e.target.value);
    }
  
    function pesquisaCEP() {
      axios
        .get(`https://viacep.com.br/ws/${cep}/json`)
        .then(function (response) {
          if (response.data && !response.data.error) {
            setRua(response.data.logradouro);
            setBairro(response.data.bairro);
            setError(null);
          } else {
            setError('CEP NÃO ENCONTRADO');
          }
        })
        .catch(function (error) {
          setError('CEP NÃO ENCONTRADO');
        });
    }
  
    function salvarInformacoes() {
      setSuccessMessage('Informações salvas com sucesso!');
    }
  
    return (
      <Container>
        <Menu />
        <TitlePage>Contato</TitlePage>
        <h2>Preenchimento de dados</h2>
        <Form>
          <label>
            CEP:
            <input type="text" value={cep} onChange={handleCepChange} />
            <button type="button" onClick={pesquisaCEP}>Consultar CEP</button>
          </label>
          <label>
            Nome:
            <input type="text" value={nome} onChange={(e) => setNome(e.target.value)} />
          </label>
          <label>
            Email:
            <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
          </label>
          <label>
            Rua:
            <input type="text" value={rua} onChange={(e) => setRua(e.target.value)} />
          </label>
          <label>
            Bairro:
            <input type="text" value={bairro} onChange={(e) => setBairro(e.target.value)} />
          </label>
          <label>
            Número:
            <input type="text" value={numero} onChange={(e) => setNumero(e.target.value)} />
          </label>
          <button type="button" onClick={salvarInformacoes}>Salvar Informações</button>
        </Form>
        {error && <p>{error}</p>}
        {successMessage && <p>{successMessage}</p>}
        <Footer />
      </Container>
    );
  }
  
  export default Cep;