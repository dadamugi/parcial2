import React from 'react';
import '../../css/panel.css'
class Panel extends React.Component{
    render(){
        return(
            <div>
            <h2>{this.props.title}</h2>
            <p>{this.props.content}</p>
            </div>
        )
    }
} 
export default Panel;