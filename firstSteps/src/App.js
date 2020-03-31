import React from 'react';
/* import { render } from 'react-dom'; se utilizaría si lo que tenemos es una class en vez de una function */

/* Hacemos el siguiente import de { BrowserRouter as Router, Route, Link} de la librería react-router-dom. Lo que estamos haciendo es importando estos componentes de navegación que se dividen en:
1- BrowserRouter (Router): Este inyecta propiedades a nuestro componente para poder acceder al historial de navegación, realizar redirecciones, etc.
2- Route: Es el componente que utilizamos para crear nuestras rutas a otros páginas (componentes)
3- Link: Este es utilizado para los enlaces (igual como etiquetas <a></a>) */
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

/* importamos los componentes de nuestra páginas */
import Home from "./components/Home"
import Info from "./components/Info"
import Contacto from "./components/Contacto"
import PageNotFound from "./components/PageNotFound"

import './App.css';

function App() {
  return (
    /* Utilizamos un fragment <\> </> en el return del componente para agregar ahi todos los elementos (esto es propio de React) porque JSX solo permite renderizar un solo elemento. Agregamos un contenedor para todos los demás items hijos. */
    <>
    <div className="app s-pxy-2">
    <h1 className="s-center">Hola, soy Matias Sicardi</h1>
    <Router> {/* agregamos el componente Router . Dentro de este componente, creamos el menu y en cada <li> agregamos el componente Link con un destino.*/}
      <ul className="nav-container s-border s-main-center s-pl-0">
        
        <li className="nav-container--item s-mr-2">
        <Link to="/">Home</Link></li>
        
        <li className="nav-container--item s-mr-2">
        <Link to="/info">Info</Link></li>
        
        <li className="nav-container--item">
        <Link to="/contacto">Contact</Link></li>
      </ul>
      <Switch>
        {/* vamos a utilizar el componente Route el cual recibe entre sus principales propiedades un destino (path) y un componente a renderizar (component). Vamos a crear 3 componentes funcionales que son: Inicio, Info, Contacto y luego de crearlos lo utilizamos con Route. Route lo que haces es que cuando se acceda a la dirección /xxx imprima la información de ese componente que se especifica en la propiedad component. */}
        {/* la propiedad exact antes de el path en cada Route hace que no se muestren todos los resultados sino solo el resultado exacto */}
        {/* tenemos que usar el componente Switch de React Router para que intercambie las rutas según el destino y si el usuario llega a una dirección incorrecta, que imprima la información del componente PageNotFound */}
        <Route exact path="/" component={Home}/>
        <Route exact path="/info" component={Info}/>
        <Route exact path="/contacto" component={Contacto}/>
        <Route component={PageNotFound}/> {/* la última ruta no tiene un path definido y recibe como componente nuestro PageNotFound */}
      </Switch>
    </Router>
    </div>
  </>
  );
}

export default App;
