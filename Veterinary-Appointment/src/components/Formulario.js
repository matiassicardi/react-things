import React, { Fragment, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'; //https://www.npmjs.com/package/uuid genera id para ser usados por React como 'key'
import PropTypes from 'prop-types'

const Formulario = ({crearCita}) => { //traemos la función crearCita() como una prop desde App.js

    //Crear State de Citas
    const [cita, actualizarCita] = useState ({
        mascota: '',
        propietario: '',
        fecha: '',
        hora: '',
        sintomas: ''
    })

    //Crear el State de los errores, el useState inicia en 'false" porque al principio no hay errores
    const [ error, actualizarError] = useState(false)

    //Función que se ejecuta cada vez que el usuario escribe un caracter en el input
    const actualizarState = (e) => {
        actualizarCita({//dentro de la función traigo el setState
            ...cita,//me traigo una copia del useState para guardar todos los cambios
            [e.target.name]: e.target.value//si el 'name' de mi input es igual al key dentro del array useState, puedo unirlos así
        })
    }

    //Extraer los valores que están en 'cita', de esta manera podemos llamarlos a cada uno sin tener que repetir 'cita.mascota' o 'cita.propietario' 
    const { mascota, propietario, fecha, hora, sintomas } = cita;

    //Función para enviar formulario
    const submitCita = e => { //el parámetro 'e' marca que le estamos pasando el evento (en este caso 'onChange') como disparador
        e.preventDefault();
        
        
        //Validar Form, con el método trim() eliminamos los espacios vacíos, validando que el contenido no sea la barra espaciadora
        if(mascota.trim() === '' || propietario.trim() === '' || fecha.trim() === '' || hora.trim() === '' || sintomas.trim() === '' ) {
            actualizarError(true);
            return;//se le agrega el return para que si no se cumple la condición no avance en el formulario
        }

        //Eliminar mensaje de error, si lo hubiera
        actualizarError(false);

        //Asignar ID, que viene de la librería 'uuid' instalada e importada
        cita.id = uuidv4();

        //Crear Cita
        crearCita(cita);

        //Reiniciar el Form
        actualizarCita({
            mascota: '',
            propietario: '',
            fecha: '',
            hora: '',
            sintomas: ''
        })
    }

    return (
        <Fragment>
            <h2>Crear Cita</h2>

            { error ? <p className="alerta-error">Todos los campos son obligatorios</p> : null}

            <form onSubmit={submitCita}>
                <label>Nombre de la mascota</label>
                <input 
                    type="text"
                    name="mascota"
                    className="u-full-width"
                    placeholder="Nombre de la Mascota"
                    onChange={actualizarState}
                    value={mascota}
                />
                <label>Nombre del Dueño</label>
                <input 
                    type="text"
                    name="propietario"
                    className="u-full-width"
                    placeholder="Nombre del dueño"
                    onChange={actualizarState}
                    value={propietario}
                />
                <label>Fecha de Alta</label>
                <input 
                    type="date"
                    name="fecha"
                    className="u-full-width"
                    onChange={actualizarState}
                    value={fecha}
                />
                <label>Hora de Alta</label>
                <input 
                    type="time"
                    name="hora"
                    className="u-full-width"
                    onChange={actualizarState}
                    value={hora}
                />
                <label>Síntomas</label>
                <textarea
                    className="u-full-width"
                    name="sintomas"
                    placeholder="Describa los síntomas"
                    onChange={actualizarState}
                    value={sintomas}
                ></textarea>
                <button
                    type="submit"
                    className="u-full-width button-primary"
                >Agregar Cita</button>
            </form>
        </Fragment>
    ) 
}

Formulario.propTypes = {
    crearCita: PropTypes.func.isRequired
}

export default Formulario;