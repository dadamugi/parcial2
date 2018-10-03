import React from "react";
import ReactDOM from 'react-dom';
import Panel from './component/panel.js'
//Lista de imagenes

import imagen1 from '../img/icono.png';
import imagen2 from '../img/people.png';
import imagen3 from '../img/world.png';
import imagen4 from '../img/contact.png';
//
//ReactDOM.render("que voy a rederizar", "donde voy a rederizar");
//const miContenido= <h1> Hola react</h1>;
const Miapp=document.getElementById("app");
ReactDOM.render(
    <div>
<Panel title="Programación" content="Enlaces a sitios de programación" img={imagen1}/>
<Panel title="comunidad" content="Mi contenido1" img={imagen2}/>
<Panel title="trabajos" content="Mi contenido2" img={imagen3}/>
<Panel title="conactos" content="Mi contenido3" img={imagen4} />
</div>
,Miapp);