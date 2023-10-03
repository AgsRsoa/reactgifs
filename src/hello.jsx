import React, { Component } from 'react';

/*
//props objet qu'on utilise dans le composant
//Le composant renvoie du JSX

const Hello = (props) =>{
    return (<div>Hello {props.name}</div>)
}
*/ 
//Class car changement d'état
class Hello extends Component {

    constructor(props){
        super(props)

        this.state = {
            clicked:false
        }
    }
//avec arrow function this represente le composant
//arrow function quand on veut utiliser this
//setState appelle render si le state change
    handleClick = () => {
        this.setState({
            clicked: !this.state.clicked
        })
    }

    render(){
        return(<div onClick={this.handleClick} className={this.state.clicked?"clicked":null}>Hello {this.props.name}</div>)
    }
}
export default Hello;