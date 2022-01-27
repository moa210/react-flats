import {Component} from "react";
import flats from '../data/flats';
import Flat from './flat';
import  SimpleMap from './map';
import '../assets/App.scss';

class App  extends Component {
    
  constructor(props) {
      super(props);
      this.state = {
          selectedFlat: {
              name: flats[0].name,
              id: flats[0].name,
              imageUrl: flats[0].imageUrl,
              price: flats[0].price,
              currency: flats[0].currency,
              lat: flats[0].lat,
              long: flats[0].long,
              active: false
          }}
  }
  
    PopulateFlats = () =>{
      let flatsCollection = [];
      for (let i = 0; i < flats.length; i ++) {
          this.state = {
              name: flats[i].name,
              id: flats[i].name,
              imageUrl: flats[i].imageUrl,
              price: flats[i].price,
              currency: flats[i].priceCurrency,
              lat: flats[i].lat,
              long: flats[i].long,
              active: false
          }
          flatsCollection.push(<Flat  active = {this.state.active} name={this.state.name} imageUrl={this.state.imageUrl} price={this.state.price} currency={this.state.currency}/>)
      }
      return flatsCollection;
  }

  render(){
    return (
        <div >
            <div className="left-scene">
              <div className="flat-list">
                  {this.PopulateFlats()}
              </div>
            </div>
            <div className="right-scene">
                {/*<p>HELLO RIGHT</p>*/}
              <div className="map-container">
                <SimpleMap/>
              </div>
            </div>
        </div>
        
    );
  }
}

export default App;
