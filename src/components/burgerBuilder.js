import React, { Component } from 'react';
import Burger from './burger';
import burgerBuilder from './burgerBuilder.css';
class BurgerBuilder extends Component {
  state = {
    lettuce: [""],
    bacon: [""],
    cheese: [""],
    meat: [""],
  }

  calculatePrice = ()=>{
      const {lettuce, bacon, cheese, meat}= this.state;
      let price = 0.0;
      price += lettuce.length*2;
      price += bacon.length*3.5;
      price += cheese.length*4.5;
      price += meat.length*5;
      return price;
  }

  increment = (ingredient)=> ingredient.concat("");

  decrement = (ingredient)=> ingredient.splice(1);


  render() {

    const {lettuce, bacon, cheese, meat}= this.state;

    return (
         <div >
            <Burger
              lettuce={lettuce}
              bacon={bacon}
              cheese={cheese}
              meat={meat}
            />

            <div className="builder">
              <h5>Current Price : <b>$ {this.calculatePrice()}</b> </h5>
              <div className="row">
                <label>Lettuce:</label>
                <button className="less" onClick={()=>{this.setState({lettuce: this.decrement(lettuce)})}}> Less</button>
                <button className="more" onClick={()=>{this.setState({lettuce: this.increment(lettuce)})}}> More</button>
              </div>
              <div className="row">
                <label > Bacon :</label>
                <button className="less" onClick={()=>{this.setState({bacon: this.decrement(bacon)})}}> Less</button>
                <button className="more" onClick={()=>{this.setState({bacon: this.increment(bacon)})}}> More</button>
              </div>
              <div className="row">
                <label >Cheese:</label>
                <button className="less" onClick={()=>{this.setState({cheese: this.decrement(cheese)})}}> Less</button>
                <button className="more" onClick={()=>{this.setState({cheese: this.increment(cheese)})}}> More</button>
              </div>
              <div className="row">
                <label >Meat :</label>
                <button className="less" onClick={()=>{this.setState({meat: this.decrement(meat)})}}> Less</button>
                <button className="more" onClick={()=>{this.setState({meat: this.increment(meat)})}}> More</button>
              </div>
            </div>
         </div>
    );
  }
}

export default BurgerBuilder;
