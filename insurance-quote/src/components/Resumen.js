import React from 'react';
import { uppercasing } from '../helper';
import styled from '@emotion/styled'

import PropTypes from 'prop-types';

const ContendorResumen = styled.div `
    padding: 1rem;
    text-align: center;
    background-color: #00838F;
    color: #FFF;
    margin-top: 1rem;
`;

const Resumen = ({datos}) => {

    //Extrayendo datos
    const {marca, year, plan} = datos;

    //Mostrando datos si esos datos no están vacíos
    if( marca === '' || year === '' || plan=== '' ) return null;


    return (
        <ContendorResumen>
            <h2>Resumen de Cotización</h2>
            <ul>
                <li>Marca: { uppercasing(marca) } </li>
                <li>Año: { year }</li>
                <li>Plan de Seguro: { uppercasing(plan) }</li>
            </ul>
        </ContendorResumen>
    );
}

Resumen.propTypes = {
    datos: PropTypes.object.isRequired
    // restante: PropTypes.number.isRequired
}

export default Resumen;