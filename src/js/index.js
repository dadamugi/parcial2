import React from "react";
import ReactDOM from 'react-dom';
import Panel from './component/panel.js'
//ReactDOM.render("que voy a rederizar", "donde voy a rederizar");
//const miContenido= <h1> Hola react</h1>;
const Miapp=document.getElementById("app");
ReactDOM.render(
    <div>
<Panel title="Mi componente1" content="Mi contenido"/>
<Panel title="Mi componente2" content="Mi contenido1"/>
<Panel title="Mi componente3" content="Mi contenido2"/>
<Panel title="Mi componente4" content="Mi contenido3"/>
<Panel title="Mi componente4" content="Mi contenido3"/>
</div>
,Miapp);