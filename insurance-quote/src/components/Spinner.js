import React from 'react';
import './Spinner.css';

// import PropTypes from 'prop-types';

const Spinner = () => {
    return (
        <div className="sk-chase">
            <div className="sk-chase-dot"></div>
            <div className="sk-chase-dot"></div>
            <div className="sk-chase-dot"></div>
            <div className="sk-chase-dot"></div>
            <div className="sk-chase-dot"></div>
            <div className="sk-chase-dot"></div>
        </div>
    );
}

// Spinner.propTypes = {
//     presupuesto: PropTypes.number.isRequired,
//     restante: PropTypes.number.isRequired
// }

export default Spinner;