import React from 'react';
import '../../css/panel.css';
import PropTypes from 'prop-types';
class Panel extends React.Component{
    render(){
        const style={
            img:{
                width:50,
                height:50,
                textAlign:'center'
            }
        }
        return(
            <div className='Panel'>
            <img src={this.props.img} style={style.img}/>
            <h2>{this.props.title}</h2>
            <p>{this.props.content}</p>
            </div>
        )
    }
} 
Panel.propTypes={
    img:PropTypes.string,
    title:PropTypes.string,
    content:PropTypes.string
}
export default Panel;