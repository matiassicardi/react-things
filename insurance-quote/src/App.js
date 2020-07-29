import React from 'react';

import Header from './components/Header';
import Formulario from './components/Formulario';

import styled from '@emotion/styled';

const Contendedor = styled.div `
  max-width: 600px;
  margin: 0 auto;
`;
const ContenedorFormulario = styled.div `
  background-color: #fff;
  padding: 3rem;
`;


function App() {
  return (
    <Contendedor>
      <Header 
        titulo='Cotizador de Seguros'
      />
      <ContenedorFormulario>
        <Formulario />
      </ContenedorFormulario>
    </Contendedor>
  );
}

export default App;
