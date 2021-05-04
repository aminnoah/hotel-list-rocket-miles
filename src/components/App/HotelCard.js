import React, { useState, useEffect } from "react";
import "./App.style.scss";


const HotelCard = ({hotels}) => {

  const onError = () => {
    if (!hotel.hotelStaticContent.mainImage.url) {
      
    }
  }

  return (
    <div className="hotel-list">
      {hotels.map((hotel) => (
        <div className="hotel-card" key={hotel.id}>
          <div
            className="image"
            style={{
              backgroundImage: `url(${hotel.hotelStaticContent.mainImage.url})`,
            }}
          >
            {/* <img href='${hotel.hotelStaticContent.mainImage.url}'></img> */}
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
      ))}
    </div>
  );
};

export default HotelCard;
