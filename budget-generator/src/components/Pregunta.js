import React, { Fragment, useState } from 'react'

const Pregunta = () => {

    //definiendo State. Como vamos a tratar cantidades, lo iniciamos con un 'number', en este caso '0'
    const [ cantidad, guardarCantidad ] = useState(0);

    //definiedo State de 'error'
    const [ error, guardarError ] = useState(false);

    //Función que lee el presupuesto ingresado por el usuario
    const definirPresupuesto = e => {
        guardarCantidad(
            parseInt( //le pasamos este método para transformar a número porque lo que devuelve el 'input' es un string
                e.target.value,
                10 //esta es la base elegida
                )
            )
    }

    //Submit que define presupuesto
    const agregarPresupuesto = e => {
        e.preventDefault();

        //Validación
        if(cantidad < 1 || isNaN(cantidad)) {
            guardarError(true);
            return;
        }

        guardarError(false)

        //Acciones
    }

    return (
        <Fragment>
            <h2>¿Cuál es tu presupuesto?</h2>

            <form
                onSubmit={agregarPresupuesto}
            >
                <input
                    type="number"
                    className="u-full-width"
                    placeholder="Escribe tu presupuesto"
                    onChange={definirPresupuesto} //creamos la función que va a leer el presupuesto del usuario
                />
                <input
                    type="submit"
                    className="button-primary u-full-width"
                    value="Definir Presupuesto"
                />
            </form>
        </Fragment>
    );
}

export default Pregunta;