import React from 'react'

import PropTypes from 'prop-types';


const Gasto = ({gasto}) => (
    <li className="u-full-with gastos-realizados">
        <div className="one-half column">
            <p>{gasto.rubro}</p>
        </div>
        <div className="one-half column monto-gasto">
            <p><span className="gasto">$ {gasto.monto}</span></p>
        </div>
        
    </li>
);

Gasto.propTypes = {
    gasto: PropTypes.object.isRequired
}

export default Gasto; 