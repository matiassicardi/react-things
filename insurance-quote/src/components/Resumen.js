import React, {Fragment} from 'react';

// import PropTypes from 'prop-types';

const Resumen = ({datos}) => {

    const {marca, year, plan} = datos;

    if( marca === '' || year === '' || plan=== '' ) return null;

    return (
        <Fragment>
            <h2>Resumen de Cotización</h2>
            <ul>
                <li>Marca: {marca} </li>
                <li>Año: {year}</li>
                <li>Plan de Seguro: {plan}</li>
            </ul>
        </Fragment>
    );
}

// Resumen.propTypes = {
//     presupuesto: PropTypes.number.isRequired,
//     restante: PropTypes.number.isRequired
// }
    
export default Resumen;