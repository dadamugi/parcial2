import React from 'react';
import Panel from './panel.js';
//Lista de imagenes

import imagen1 from '../../img/icono.png';
import imagen2 from '../../img/people.png';
import imagen3 from '../../img/world.png';
import imagen4 from '../../img/contact.png';
class Menu extends React.Component{
    render(){
        return(
            <div className='grid-container'>
            <div className='a'>
                <Panel title={"Programación"} content="Enlaces a sitios de programación" img={imagen1} />
            </div>
            <div className='b'>
                <Panel title="comunidad" content="Mi contenido1" img={imagen2} />
            </div>
            <div className='c'>
                <Panel title="trabajos" content="Mi contenido2" img={imagen3} />
            </div>
            <div className='d'>
                <Panel title="conactos" content="Mi contenido3" img={imagen4} />
            </div>
        </div>
        )
    }
}
export default Menu;