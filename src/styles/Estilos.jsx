import {createGlobalStyle, styled } from 'styled-components';


export const StyledNav = styled.nav`
  background: #000026;
  display: flex;
  justify-content: center;
`;

export const StyledFooter = styled.footer`
  position: fixed;
  font-family: helvetica;
  left: 0;
  bottom: 0;
  width: 100%;
  background-color:#000026;
  color: #fff;
  text-align: center;
  padding: 20px 0;
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
  }
`;

export const lightTheme = {
  corFundo: '#fff',
  corTexto: 'black',
};

export const darkTheme = {
  corFundo: '#000026',
  corTexto: 'white',
  corTitulo: '#fffdd0'
};

export const Button = styled.button`
  width: 70px;
  height: 40px;
  background: #000026;
  border-style: none;
  color: #fff;
  font-size: 18px;
  letter-spacing: 2px; 
  font-family: helvetica;
  font-weight: 600;
  outline: none;
  cursor: pointer;
  position: relative;
  padding: 0; 
  overflow: hidden;
  transition: all .5s;
  box-shadow: 0px 1px 2px rgba(0,0,0,.2);
  `;

export const TitlePage = styled.h1`
  font-family: helvetica;
  font-size: 50px;
 `;

export const InformacoesCep = styled.div`
  margin: 20px;
  display: flex;
  flex-direction: column;
`;
export const Section = styled.section`
  font-family: helvetica;
`;

export const CircleImg = styled.div`
  position: absolute;
  width: 200px; 
  height: 200px; 
  border-radius: 50%; 
  overflow: hidden; 
  margin: 20px auto; 
  display: flex;
  justify-content: flex-start;
    
  img {
    width: 100%; 
    height: 100%; 
    object-fit: cover; 
  } 
`;

export const Container = styled.div`
  text-align: left;
  font-family: helvetica;
`;

export const Form = styled.form`
  display: flex;
  font-family: helvetica;
  flex-direction: column;
  align-items: flex-start;

  label {
    margin-bottom: 10px;
  }
`;