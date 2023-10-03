import React, {Component} from 'react';

class Gif extends Component {
handleClick = () =>{
    if(this.props.selectGif){
        this.props.selectGif(this.props.id)
    }

}
    render(){
     
        const src = `https://media.giphy.com/media/${this.props.id}/giphy-downsized-large.gif`;
        return(         
            <img src={src} className='selected-gif' alt='gif' onClick = {this.handleClick}/>
        )
    }
}
export default Gif;

