import React, { useState } from 'react';

import Header from './components/Header';
import Formulario from './components/Formulario';
import Resumen from './components/Resumen';
import Resultado from './components/Resultado';
import Spinner from './components/Spinner';

import styled from '@emotion/styled';

const Contendedor = styled.div `
  max-width: 600px;
  margin: 0 auto;
`;
const ContenedorFormulario = styled.div `
  background-color: #fff;
  padding: 3rem;
  text-align: center;
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

  const [ cargando, guardarCargando ] = useState(false)

  const { cotizacion, datos } = resumen;

  return (
    <Contendedor>
      <Header
        titulo='Cotizador de Seguros'
      />
      <ContenedorFormulario>
        <Formulario
          guardarResumen={guardarResumen}
          guardarCargando={guardarCargando}
        />

        {cargando ? <Spinner /> : null}

        { !cargando ?
          <Resumen
          datos={datos}
          guardarCargando={guardarCargando}
          />
        : null}

        {/* <Resumen
          datos={datos}
          guardarCargando={guardarCargando}
        /> */}

        <Resultado
          cotizacion={cotizacion}
        />

      </ContenedorFormulario>
    </Contendedor>
  );
}

export default App;
