import React from 'react';
import './Raffles.css';
const Raffles = () => {


  var RaffleElement=(

    <div className="ItemRaffle">
    <div className="PictureRaffle">
      <img className="ImgRaffle"src="https://t7atgyuys4jsbk3wfc2epxy7mqibxke46babgoexkstlqsij.arweave.net/n8E-zYpiXEyCrdii0R98fZB-AbqJzwQBM4l1SmuEkJw?ext=png"/>
    </div>
    <div className="TitleRaffle">
      YakuzaWars
    </div> 
    <div className="TextRaffle">
      Fuck ya
    </div>

    <div className="StatusRaffle">
      Closed
    </div>

  </div>
  );
  return (
    <div className="Raffle">

      <div className="ContainerRaffle">
        <div className="ContainerGrid">
        {RaffleElement}
        {RaffleElement}        {RaffleElement}        {RaffleElement}        {RaffleElement}        {RaffleElement}
        {RaffleElement}        {RaffleElement}        {RaffleElement}        {RaffleElement}        {RaffleElement}        {RaffleElement}
        {RaffleElement}        {RaffleElement}        {RaffleElement}        {RaffleElement}        {RaffleElement}        {RaffleElement}
        </div>
      </div>
    </div>
  );
};
  
export default Raffles;
