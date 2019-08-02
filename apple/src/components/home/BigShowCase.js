import React from 'react';
import './BigShowCase.css'


export default class BigShowCase extends React.Component{
  render(){
    return (
      <div id="product-box">
      <div class="product-box-inset">
        <p>
          <span class="item-name">{this.props.productName}</span>
          <br/>
          <p class="item-description">{this.props.productDescription}</p>
          <p class="product-action"><a href={this.props.learnMoreUrl} id="no-underline">Learn more ></a>   <a href={this.props.buyUrl} id="no-underline">Buy ></a></p>
        </p>
        <img src={this.props.image} class="product-image"/>
      </div> 
    </div>
    );
  }
}