import React from 'react';
import BigShowCase from './BigShowCase';

export default class BigShowCaseList extends React.Component{
  constructor(props){
    super(props);
  }
  renderItem({itemName, itemDescription, learnMoreLink, buyNowLink, image}){
    return (
      <BigShowCase
        productName={itemName}
        productDescription={itemDescription}
        learnMoreUrl={learnMoreLink}
        buyUrl={buyNowLink}
        image={image}
      />
    );
  }

  render(){
    return (
      <div>
        {this.props.data.map(x=>this.renderItem(x))}
      </div>
    );
  }
}