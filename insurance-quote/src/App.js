import React, { useState } from 'react';

import Header from './components/Header';
import Formulario from './components/Formulario';
import Resumen from './components/Resumen';

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

  const [ resumen, guardarResumen ] = useState({
    cotizacion: 0,
    datos: {
      marca: '',
      year: '',
      plan: ''
    }
  });

  const { datos } = resumen;

  return (
    <Contendedor>
      <Header 
        titulo='Cotizador de Seguros'
      />
      <ContenedorFormulario>
        <Formulario 
          guardarResumen={guardarResumen}
        />

        <Resumen
          datos={datos}
        />
      </ContenedorFormulario>
    </Contendedor>
  );
}

export default App;
