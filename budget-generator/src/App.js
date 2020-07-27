import React, { useState, useEffect } from 'react';
import Pregunta from './components/Pregunta';
import Formulario from './components/Formulario';
import Listado from './components/Listado';
import Control from './components/Control'


function App() {

  //Creamos los States para el presupuesto y el restante de gastos, y para mostrar y ocultar componentes
  const [ presupuesto, guardarPresupuesto ] = useState(0);
  const [ restante, guardarRestante ] = useState(0);
  const [ mostrarPregunta, actualizarPregunta ] = useState(true);
  const [ gastos, guardarGastos ] = useState([]);

  const [ gasto, guardarGasto] = useState({});
  const [ crearGasto, guardarCrearGasto ] = useState(false);

  //UseEffect para disparar actualización de datos
  useEffect(() => {
    //agrega el nuevo gasto
    if(crearGasto) {
      guardarGastos([
        ...gastos,
        gasto
      ]);
      //resta del presupuesto
      const presupuestoRestante = restante - gasto.monto;
      guardarRestante(presupuestoRestante);
      //resetear crearGasto a false
      guardarCrearGasto(false);
    }
  },[gasto, crearGasto, gastos, restante]);

  //Función que se ejecuta cuando agregamos un nuevo gasto. Se utiliza mientras se arma el proyecto, después su contenido pasa al UseEffect de actuaización de datos
  // const agregarNuevoGasto = gasto => {
  //   guardarGastos([
  //     ...gastos,
  //     gasto
  //   ])
  // }

  return (
    <div className="container">
      <header>
        <h1>Gasto Semanal</h1>

        <div className="contenido-principal contenido">
          
          { //Carga condicional de componente
            mostrarPregunta ? 
            (
              <Pregunta 
              guardarPresupuesto={guardarPresupuesto}
              guardarRestante={guardarRestante}
              actualizarPregunta={actualizarPregunta}
              />
            ) : (
              <div className="row">
                <div className="one-half column">
                  <Formulario
                    // agregarNuevoGasto={agregarNuevoGasto}
                    guardarGasto={guardarGasto}
                    guardarCrearGasto={guardarCrearGasto}
                  />
                </div>
                <div className="one-half column">
                  <Listado 
                    gastos={gastos}
                  />
                  <Control 
                    presupuesto={presupuesto}
                    restante={restante}
                  />
                </div>
              </div>
            ) 
          }
          

          
        </div>

      </header>
    </div>
  );
}

export default App;
