import React, {Component} from 'react';
import Gif from './gif';

//GifList needs an array of gif ids
class GifList extends Component {
 renderList = () =>{
   return this.props.gifsIds.map(gif => {
        return <Gif id={gif.id} key ={gif.id}/>
     })
}
    render(){
        return(
            <div className='gif-list'>
            {this.renderList()}
            </div>
       
        )
    }
}
export default GifList;