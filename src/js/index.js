import React from "react";
import ReactDOM from 'react-dom';
import Panel from './component/panel.js'
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Header from './component/header.js'
//Lista de imagenes

import imagen1 from '../img/icono.png';
import imagen2 from '../img/people.png';
import imagen3 from '../img/world.png';
import imagen4 from '../img/contact.png';
//
//ReactDOM.render("que voy a rederizar", "donde voy a rederizar");
//const miContenido= <h1> Hola react</h1>;
const Miapp = document.getElementById("app");
ReactDOM.render(
    <div>

 <Grid container spacing={24}>
        <Grid item xs={12}>
          <Paper><Header/></Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper >xs=12 sm=6</Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper>xs=12 sm=6</Paper>
        </Grid>       
      </Grid>





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




    </div>
    , Miapp);