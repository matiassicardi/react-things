import React, {Fragment, useState, useEffect} from 'react';
import Formulario from './components/Formulario'
import Cita from './components/Cita'

function App() {

  //Agregando Citas en Local Storage, Local Storage solamente almacena 'string', esa es la razón por la que le pasamos el método JSON.parse y lo convertimos en 'array'. El método JSON.parse() analiza una cadena de texto como JSON, transformando opcionalmente  el valor producido por el análisis.
  let citasIniciales = JSON.parse(localStorage.getItem('citas'));
  if(!citasIniciales) {
    citasIniciales = [];
  }

  //State para citas. El nombre será 'citas' en plural para diferenciarlo de 'cita' en singular, que es como se llama el State para cada cita en Formulario.js
  //const [citas, guardarCitas] = useState([citas]) así es antes de tener preparado el localStorage
  let [citas, guardarCitas] = useState(citasIniciales)

  //UseEffect para realizar cambios cada vez que el componente renderiza, siempre es una arrow function
  useEffect( () => {
    //El método JSON.stringify() convierte un objeto o valor de JavaScript en una cadena de texto JSON
    if(citasIniciales) {
      localStorage.setItem('citas', JSON.stringify(citas))
    } else {
      localStorage.setItem('citas', JSON.stringify([]));
    }
  }, [citas, citasIniciales] ); // el objeto que se le pasa al final es la 'dependencia', y es el disparador del useEffect. Si no hay una dependencia definida se debe dejar un objeto vacío para decirle que se renderice solo una vez, caso contrario, al consultar una API se va a ciclar sin fin

  //Función que toma las citas actuales y le agrega la última
  const crearCita = cita => {
    guardarCitas([
      ...citas,
      cita
    ]);
  }

  //Función que quita las citas del listado
  const eliminarCita = id => {
    const citasDepuradas = citas.filter(cita => cita.id !== id) //le pedimos que filtre todos los elementos que tengan un 'id' distinto ('!==') al 'id' que le pasamos
    guardarCitas(citasDepuradas);
  }

  //Mensaje condicional

  const titulo = citas.length === 0 ? 'No hay Citas' : 'Administrar Citas';

  return (
    <Fragment>
      <h1>Administrador de veterinaria</h1>
      <div className="container">
        <div className="row">
          <div className="one-half column">
            <Formulario 
            crearCita={crearCita}
            />
          </div>
          <div className="one-half column">
            <h2>{titulo}</h2>
            {citas.map(cita => (
              <Cita 
                key={cita.id}
                cita={cita}
                eliminarCita={eliminarCita}
              />
            ))}
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
