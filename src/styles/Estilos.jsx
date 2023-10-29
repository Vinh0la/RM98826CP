import {createGlobalStyle, styled } from 'styled-components';


export const StyledNav = styled.nav`
  background: #000026;
  display: flex;
  justify-content: center;
`;

export const StyledList = styled.ul`
  list-style: none;
  display: flex;
  gap: 20px;
  align-items: center;
`;

export const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${(props) => props.theme.corFundo};
    color: ${(props) => props.theme.corTexto};
    /* Adicione outros estilos globais, se necessário */
  }
`;

export const lightTheme = {
  corFundo: '#fff',
  corTexto: 'black',
};

export const darkTheme = {
  corFundo: 'black',
  corTexto: 'white',
  corTitulo: '#fffdd0'
};

export const Button = styled.button`
    padding: 10px;
    border: none;
    background-color: #4caf50;
    color: white;
    margin: 10px
  `