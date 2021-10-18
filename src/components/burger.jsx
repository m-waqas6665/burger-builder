import React, { Component } from 'react';
class Burger extends Component {
  styles = {
    overflowY : "scroll",
    height: "490px",
    width: "35%",
    margin: "2% 0% 2% 32%",
    justifyContent: "center",
    alignItems: "center",

    img: {
      height: "25%",
      width: "90%"
    }
  }
  render() {
    return (
         <div style={this.styles}>
            < img src="/images/upperBread.png" alt="Bread" style={this.styles.img} />
            {this.props.lettuce.map(()=> < img src="/images/lettuce.png" alt="ingredient"/> )}
            {this.props.bacon.map(()=> < img src="/images/bacon.png" alt="ingredient"/> )}
            {this.props.cheese.map(()=> < img src="/images/cheese.png" alt="ingredient"/> )}
            {this.props.meat.map(()=> < img src="/images/meat.png" alt="ingredient"/> )}
            < img src="/images/lowerBread.png" alt="Bread" style={this.styles.img} />
         </div>
    );
  }
}

export default Burger;
