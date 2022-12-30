/*#############################################
                 Importaciones
###############################################*/

//Modulos
//Estilos
import './NavBar.css'
import CardWidget from '../cardWidget/CardWidget.js'


//Componentes
//Core

/*#############################################
                 Logica
###############################################*/
const NavBar = (props) => {//Funcion constructora


    return(
        
        <header id='Header'>
            <p id='TituloHeader'>LIBRERIA VIRTUAL</p>
            <CardWidget cantidad="10"/>
        </header>
        
    )

}

/*#############################################
                 Exportacion
###############################################*/
export default NavBar
