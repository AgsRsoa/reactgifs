import React, {Component} from 'react';
import './App.css';
import SearchBar from './search_bar';
import Gif from './gif';
import GifList from './gif_list';
//import GiphyFetch from '@giphy/js-fetch-api';
import giphy from 'giphy-api';


class App extends Component {

constructor(props){
  super(props);
  this.state = {
    gifs:[],
    selectedGifId:"MDa6dnB0CABmv9N1X4",
  };

  //this.search('homer')

}

selectGif =  (id) =>{
  this.setState({selectedGifId:id})
}

search = (query) => {
  giphy('your api key').search({
    q: query,
    rating: 'g',
    limit:2
}, (error, result) => {
    // Res contains gif data!
  this.setState({gifs: result.data}) 
});
}


  render(){
    return (<>
  
      <div>
        <div className="left-scene">
        <SearchBar  searchFunction={this.search}/>
        <div className='selected-gif'>
          <Gif id={this.state.selectedGifId} />
        </div>
        </div>
      </div>
         <div className="right-scene">
          <GifList gifsIds = {this.state.gifs} selectGif = {this.selectGif}/>
         </div>
         </>
    )
  }
}
/*function App() {
  return (
    <div className="App">
      <Hello name="John" />
    </div>
  );
}*/

export default App;
