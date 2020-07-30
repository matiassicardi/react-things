import React, { useState } from 'react';

import styled from '@emotion/styled'

// import PropTypes from 'prop-types';

const color = '#264578';

const Campo = styled.div `
    display: flex;
    margin-bottom: 1rem;
    align-items: center;
`;
const Label = styled.label `
    flex: 0 0 100px;
`;
const Select = styled.select `
    display: block;
    width: 100%;
    padding: 1rem;
    border: 1px solid #e1e1e1;
    -webkit-appearance: none;
`;
const InputRadio = styled.input `
    margin: 0 1rem;
`;
const Button = styled.button `
    background-color: #00838F;
    font-size: 16px;
    width: 100%;
    padding: 1rem;
    color: #fff;
    text-transform: uppercase;
    font-weight: bold;
    border: none;
    margin-top: 2rem;
    transition: background-color .3s ease;

    &:hover {
        /* background-color: #26C6DA; */
        background-color: ${color};
        cursor: pointer;
    }
`;
const TextError = styled.div `
    background-color: red;
    color: white;
    padding: 1rem;
    margin-bottom: 1rem;
    width: 100%;
    text-align: center;
`;

const Formulario = () => {

    const [ datos, guardarDatos ] = useState({
        marca: '',
        year: '',
        plan:''
    });

    //state para el error
    const [ error, guardarError ] = useState(false)

    // extraemos valores del state
    const { marca, year, plan } = datos;

    // leer los datos ingresados en el formulario
    const obtenerInformación = e => {
        guardarDatos ({
            ...datos,
            [e.target.name] : e.target.value
        })
    }

    //al presionar Submit
    const cotizarSeguro = e => {
        e.preventDefault();

        if(marca.trim() === '' || year.trim() === '' || plan.trim() === '') {
            guardarError(true);
            return;
        }

        guardarError(false);

        //obtener la diferencia de años

        //restar 3% por cada año de antiguedad

        //incrementar 15% por Americano

        //incrementar 5% por Asiatico

        //incrementar 30% por Europeo

        //si es básico aumenta 20%

        //si es completo aumenta 50%

        //total
    }

    return (
        <form onSubmit={cotizarSeguro}>
            { error ? <TextError>Todos los campos son obligatorios</TextError> : null}
            <Campo>
                <Label>Marca</Label>
                <Select
                    name="marca"
                    value={marca}
                    onChange={obtenerInformación}
                >
                    <option value="">--- Seleccione ---</option>
                    <option value="americano">Americano</option>
                    <option value="europeo">Europeo</option>
                    <option value="asiatico">Asiático</option>
                </Select>
            </Campo>
            <Campo>
                <Label>Año</Label>
                <Select
                    name="year"
                    value={year}
                    onChange={obtenerInformación}
                >
                    <option value="">--- Seleccione ---</option>
                    <option value="2021">2021</option>
                    <option value="2020">2020</option>
                    <option value="2019">2019</option>
                    <option value="2018">2018</option>
                    <option value="2017">2017</option>
                    <option value="2016">2016</option>
                    <option value="2015">2015</option>
                    <option value="2014">2014</option>
                    <option value="2013">2013</option>
                    <option value="2012">2012</option>
                </Select>
            </Campo>
            <Campo>
                <Label>Plan</Label>
                <InputRadio
                    type="radio"
                    name="plan"
                    value="basico"
                    checked={plan === "basico"}
                    onChange={obtenerInformación}
                />Básico
                <InputRadio
                    type="radio"
                    name="plan"
                    value="completo"
                    checked={plan === "completo"}
                    onChange={obtenerInformación}
                />Completo
            </Campo>
            <Button type="submit">Cotizar</Button>
        </form>
    );
}

// Formulario.propTypes = {
//     presupuesto: PropTypes.number.isRequired,
//     restante: PropTypes.number.isRequired
// }
    
export default Formulario; 