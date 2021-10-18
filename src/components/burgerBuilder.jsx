import React, { Component } from 'react';
import Burger from './burger';
class BurgerBuilder extends Component {
  state = {
    lettuce: [""],
    bacon: [""],
    cheese: [""],
    meat: [""],
  }

  styles = {

    row: {
      height: "25%",
      width: "90%",
      flexDirection: "row",
      paddingLeft: "6%"
    },

    builder: {
      height: "330px",
      width: "100%",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#b8860b",
      padding: "2%",
    },

    h4:{
      margin: "1%",
      fontSize: "24px",

    },

    less:{
      margin: "0.5%",
      width: "80px",
      height: "35px",
      color: "white",
      backgroundColor: "#daa520",
    },

    more:{
      margin: "0.5%",
      width: "80px",
      height: "35px",
      color: "white",
      backgroundColor: "#a52a2a",
    }
  }

  calculatePrice = function(){
      let price = 0.0;
      price += this.state.lettuce.length*2;
      price += this.state.bacon.length*3.5;
      price += this.state.cheese.length*4.5;
      price += this.state.meat.length*5;
      return price;
  }

  increment = function(ingredient){
    return ingredient.concat("");
  }

  decrement = function(ingredient){
    return ingredient.splice(1);
  }

  render() {
    return (
         <div >
            <Burger
              lettuce={this.state.lettuce}
              bacon={this.state.bacon}
              cheese={this.state.cheese}
              meat={this.state.meat}
            />

            <div className="builder" style={this.styles.builder}>
              <h5>Current Price : <b>$ {this.calculatePrice()}</b> </h5>
              <div style={this.styles.row}>
                <label style={this.styles.h4}>Lettuce:</label>
                <button style={this.styles.less} onClick={()=>{this.setState({lettuce: this.decrement(this.state.lettuce)})}}> Less</button>
                <button style={this.styles.more} onClick={()=>{this.setState({lettuce: this.increment(this.state.lettuce)})}}> More</button>
              </div>
              <div style={this.styles.row}>
                <label style={this.styles.h4}> Bacon :</label>
                <button style={this.styles.less} onClick={()=>{this.setState({bacon: this.decrement(this.state.bacon)})}}> Less</button>
                <button style={this.styles.more} onClick={()=>{this.setState({bacon: this.increment(this.state.bacon)})}}> More</button>
              </div>
              <div style={this.styles.row}>
                <label style={this.styles.h4}>Cheese:</label>
                <button style={this.styles.less} onClick={()=>{this.setState({cheese: this.decrement(this.state.cheese)})}}> Less</button>
                <button style={this.styles.more} onClick={()=>{this.setState({cheese: this.increment(this.state.cheese)})}}> More</button>
              </div>
              <div style={this.styles.row}>
                <label style={this.styles.h4}>Meat :</label>
                <button style={this.styles.less} onClick={()=>{this.setState({meat: this.decrement(this.state.meat)})}}> Less</button>
                <button style={this.styles.more} onClick={()=>{this.setState({meat: this.increment(this.state.meat)})}}> More</button>
              </div>
            </div>
         </div>
    );
  }
}

export default BurgerBuilder;
