import React, { useState } from 'react'
import shortid from 'shortid';

import Error from './Error';

import PropTypes from 'prop-types';


const Formulario = ({guardarGasto, guardarCrearGasto}) => {// al momento de crear el recorrido de datos le pasamos la función agregarNuevoGasto

    //state para gastos
    const [ rubro, guardarRubro ] = useState('');
    const [ monto, guardarMonto ] = useState(0);
    const [ error, guardarError ] = useState(false);

    //Cuando el usuario agrega un gasto
    const agregarGasto = e => {
        e.preventDefault();

        //Validar
        //condición a cumplir
        if(monto < 1 || isNaN(monto) || rubro.trim() === ''){
            guardarError(true);
            return;
        }
        //eliminación de error al cumlplir la condición
        guardarError(false);

        //construir dato de gasto, para el id instalamos 'npm i shortid'
        const gasto = {
            rubro,
            monto,
            id: shortid.generate()
        }

        //enviar dato de gasto a componente principal. Al momento de la construcción de la funcionalidad utilizamos agregarNuevoGasto, después esa funcionalidad pasó al useEffect en App.js
        // agregarNuevoGasto(gasto);
        guardarGasto(gasto);
        guardarCrearGasto(true)//para dejar de mostrar el componente vacío

        //resetear el form
        guardarRubro('');
        guardarMonto(0);
    }

    return(
        <form
            onSubmit={agregarGasto}
        >
            <h2>Por favor, agrega tus gastos al formulario</h2>

            { error ? <Error mensaje="Los campos deben estar completos y deben contener datos válidos"/> : null}

            <div className="campo">
                <label>Tipo de Gasto</label>
                <input 
                    type="text"
                    className="u-full-width"
                    placeholder="Ej. Transporte"
                    value={rubro}
                    onChange={e => guardarRubro(e.target.value)}
                />
            </div>

            <div className="campo">
                <label>Monto del gasto</label>
                <input 
                    type="number"
                    className="u-full-width"
                    placeholder="Ej. 300"
                    value={monto}
                    onChange={e => guardarMonto( parseInt(e.target.value, 10) )}
                />
            </div>

            <input 
                type="submit"
                className="button-primary u-full-width"
                value="Agregar Gasto"
            />

        </form>

    );
}

Formulario.propTypes = {
    guardarGasto: PropTypes.func.isRequired,
    guardarCrearGasto: PropTypes.func.isRequired
}

export default Formulario; 