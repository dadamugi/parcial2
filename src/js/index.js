import React from "react";
import ReactDOM from 'react-dom';
import Menu from './component/menu.js'
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Header from './component/header.js'

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
          <Paper ><Menu/></Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper>xs=12 sm=6</Paper>
        </Grid>       
      </Grid>





  




    </div>
    , Miapp);