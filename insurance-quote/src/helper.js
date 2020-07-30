//obtiene diferencia de años
export function obtenerDiferenciaYear(year) {
    return new Date().getFullYear() - year;
}

//calcula total a pagar según marcar
export function calculaMarca(marca) {
    let incremento;

    switch(marca) {
        case 'europeo':
            incremento = 1.3;
            break;
        case 'americano':
            incremento = 1.15;
            break;
        case 'asiatico':
            incremento = 1.05;
            break;
        default:
            break;
    }

    return incremento;
}

//calcula tipo de seguro
export function obtenerPlan(plan) {
    return (plan === 'basico') ? 1.2 : 1.5;
}