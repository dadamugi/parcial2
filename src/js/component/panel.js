import React from 'react';
import '../../css/panel.css';
import imagen1 from '../../img/icono.png';
class Panel extends React.Component{
    render(){
        return(
            <div className='Panel'>
            <img src={imagen1}/>
            <h2>{this.props.title}</h2>
            <p>{this.props.content}</p>
            </div>
        )
    }
} 
export default Panel;