import React, { Component } from 'react';
import burger from './burger.css';
class Burger extends Component {

  render() {
    const {lettuce, bacon, cheese, meat } = this.props;
    return (
      <div className="burger">
          < img src="/images/upperBread.png" alt="Bread" />
          {lettuce.map(()=> < img src="/images/lettuce.png" alt="ingredient"/> )}
          {bacon.map(()=> < img src="/images/bacon.png" alt="ingredient"/> )}
          {cheese.map(()=> < img src="/images/cheese.png" alt="ingredient"/> )}
          {meat.map(()=> < img src="/images/meat.png" alt="ingredient"/> )}
          < img src="/images/lowerBread.png" alt="Bread" />
      </div>
    );
  }
}

export default Burger;


