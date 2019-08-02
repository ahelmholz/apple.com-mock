import React from 'react';
import NavBar from '../../components/common/navbar/NavBar';
import BigShowCaseList from './../../components/home/BigShowCaseList';
import iPhoneXRImage from './img/iphone-xr.png';


export default class Home extends React.Component{
  constructor(props){
    super(props);
    this.bigProducts = [
      {
        itemName: "iPhone XR",
        itemDescription: "All-screen design. Longest battery life ever in an iPhone. Fastest performance. Studio-quality photos.",
        learnMoreLink: "",
        buyNowLink: "",
        image: iPhoneXRImage
      },
      {
        itemName: "iPhone XR",
        itemDescription: "All-screen design. Longest battery life ever in an iPhone. Fastest performance. Studio-quality photos.",
        learnMoreLink: "",
        buyNowLink: "",
        image: iPhoneXRImage
      },
      {
        itemName: "iPhone XR",
        itemDescription: "All-screen design. Longest battery life ever in an iPhone. Fastest performance. Studio-quality photos.",
        learnMoreLink: "",
        buyNowLink: "",
        image: iPhoneXRImage
      }
    ];
  }
  render(){
    return(
      <div>
        <NavBar/>
        <BigShowCaseList
          data={this.bigProducts}
        />
      </div>
    );
  }
}