import React, { useState, useEffect } from "react";
import "./App.style.scss";



const HotelCard = ({hotel}) => {

  

  // const onError = () => {
  //   fet
  //   let imageUrl = ""
  //   if (hotel.hotelStaticContent.mainImage.url) {
  //     imageUrl = hotel.hotelStaticContent.mainImage.url

      
  //   }
  // }

  return (
    <div className="hotel-list">
        <div className="hotel-card" key={hotel.id}>
          <div
            className="image"
            style={{
              backgroundImage: `url(${hotel.hotelStaticContent.mainImage.url})`,
            }}
          >
          </div>
          <div className="hotel-details">
            <div className="hotel-name">{hotel.hotelStaticContent.name}</div>
            <div className="location">
              {hotel.hotelStaticContent.neighborhoodName}
            </div>
          </div>
          <div className="price-details">
            <span className="price">
              <span
                dangerouslySetInnerHTML={{
                  __html: hotel.lowestAveragePrice.symbol,
                }}
              ></span>
              {hotel.lowestAveragePrice.amount}
            </span>
            <span className="rewards">{hotel.rewards.miles} miles</span>
            <button className="button">Select</button>
          </div>
        </div>
      ))
    </div>
  );
};

export default HotelCard;
