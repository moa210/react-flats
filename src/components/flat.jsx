import React, {Component} from 'react';
// import {render} from "sass";

export default class Flat extends Component{
    handleClick = () => {
        if (this.props.SelectFlat) {
            this.props.SelectFlat(this.props.name);
        }
    }

    render() {
        // console.log(this.props.name)
        // console.log(this.props.imageUrl)
        const src = `${this.props.imageUrl}`;
        return (
            <img src={src} className="card" onClick={this.handleClick} alt={""}/>
        );
    }
}