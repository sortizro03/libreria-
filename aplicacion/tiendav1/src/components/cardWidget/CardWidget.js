/*#############################################
                 Importaciones
###############################################*/

//Modulos
//Estilos
import './CardWidget.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCartShopping} from '@fortawesome/free-solid-svg-icons'
//Componentes
//Core

/*#############################################
                 Logica
###############################################*/
const CardWidget = (props) => {//Funcion constructora

    return(
        
        <p >
            <FontAwesomeIcon icon={faCartShopping} /> {props.cantidad}
        </p>
        
    )

}

/*#############################################
                 Exportacion
###############################################*/
export default CardWidget
