import React, { useState } from "react";
import Menu from "../components/Menu";
import Footer from '../components/Rodape';
import {TitlePage, Container, Form } from "../styles/Estilos";
import axios from "axios";

function Cep() {
    // Declaração de estados para armazenar dados dos inputs e mensagens de erro/sucesso
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [cep, setCep] = useState('');
    const [rua, setRua] = useState('');
    const [bairro, setBairro] = useState('');
    const [numero, setNumero] = useState('');
    const [error, setError] = useState(null);
    const [successMessage, setSuccessMessage] = useState('');
  
    // Função para capturar mudanças no input de CEP
    function handleCepChange(e) {
      setCep(e.target.value);
    }
  
    // Função para pesquisar CEP utilizando a API ViaCEP
    function pesquisaCEP() {
      axios
        .get(`https://viacep.com.br/ws/${cep}/json`)
        .then(function (response) {
          if (response.data && !response.data.error) {
            // Se encontrar o CEP, atualiza o estado com informações de endereço
            setRua(response.data.logradouro);
            setBairro(response.data.bairro);
            setError(null);
          } else {
            // Se não encontrar o CEP, exibe mensagem de erro
            setError('CEP NÃO ENCONTRADO');
          }
        })
        .catch(function (error) {
          // Em caso de erro na requisição, exibe mensagem de erro
          setError('CEP NÃO ENCONTRADO');
        });
    }
  
    // Função para simular a ação de salvar as informações
    function salvarInformacoes() {
      // Simulação de mensagem de sucesso ao salvar informações
      setSuccessMessage('Informações salvas com sucesso!');
    }
  
    return (
      <Container>
        <Menu />
        <TitlePage>Contato</TitlePage>
        <h2>Preencha com seus dados para podermos entrar em contato!</h2>
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
