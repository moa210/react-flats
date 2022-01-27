import React, {Component} from 'react';
import flats from "../data/flats";

export default class Flat extends Component{
    
    chosenCard = "";

    selectFlat(name) {
        this.chosenCard = this.props.name;
        console.log(this.chosenCard)
        // const currentState = this.state.active;
        // this.props.active = !currentState;
    }
    
    handleClick = () => {
        console.log(!!(this.chosenCard = (this.props.name).toString()))
        console.log("clicked");
        // this.setState(this.props);
        // console.log(this.selectedFlat)
        console.log(this.chosenCard)
        // console.log(this.props.name)
        const currentState = this.state.active;
        this.selectFlat(this.props.name);
        this.setState({ active: !currentState});
        // this.forceUpdate();
    }
    
    render() {
        if (this.chosenCard === ""){
            this.chosenCard = "Charm at the Steps of the Sacre Coeur/Montmartre"
        }
        console.log(this.chosenCard);
        // console.log(this.props.name)
        // console.log(this.props.imageUrl)
        const src = `${this.props.imageUrl}`;
        return (
                <div className ={((this.props.name).toString()) === this.chosenCard? "card active" : "card"}>
                    <img src={src} onClick={this.handleClick} alt={""}/>
                    <div className="card-category">{this.props.price} {this.props.currency}</div>
                    <div className="card-description">
                        <h2>{this.props.name}</h2>
                    </div>
                </div>
        );
    }
}
