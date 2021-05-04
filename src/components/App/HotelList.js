import React, { useState, useEffect } from "react";
import HotelCard from "./HotelCard";
import "./App.style.scss";
import hotelResultService from "../../services/hotel-result/hotel-result.service";

const HotelList = () => {

  const [hotels, setHotels] = useState([]);
  const [searchTerm, setSearchTerm] = useState([""]);
  const [sortBy, setSortBy] = useState(["recommend"]);
  // const [filteredHotels, setFilteredHotels] = useState([]);


  useEffect(() => {
    hotelResultService.get().then((response) => {
      setHotels(response.results.hotels);
    });
  }, []);
  console.log(hotels)

  // useEffect(() => {
  //   setFilteredHotels(
  //     hotels.filter((hotel) =>
  //       hotel.hotelStaticContent.name.toLowerCase().includes(searchTerm.toString().toLowerCase())
  //     )
  //   );
  // }, [searchTerm, hotels]);

  const sorted = hotels.sort((a, b) => {
    let sortedAB = a.lowestAveragePrice.amount - b.lowestAveragePrice.amount;

    let sortedBA = b.lowestAveragePrice.amount - a.lowestAveragePrice.amount;

    return sortBy === "ascend" ? sortedAB : sortedBA;   
    
  })



  
  return (
    <div className="app-container">
      <div className="content">
        <div>
          <div className="filters">
            <label htmlFor="input"> Hotel name </label>
            <input
              type="text"
              className="input"
              maxLength={25}
              value={searchTerm}
              onChange={e => {

                const test = hotels.filter(hotel => {

                  return hotel.hotelStaticContent.name.toLowerCase().includes(e.target.value.toLowerCase());
                });
                console.log("test: ", test);
      
                // uncomment line below and teams is logged as I want
                setHotels(test);
                setSearchTerm(e.target.value);
              }}
            />
            <label htmlFor="select">Price </label>
            <select name="" className="select" onChange={(e) => setSortBy(e.target.value)}>
              console.log(sortBy)
              <option value="recommend">Recommended</option>
              <option value="ascend">Price low-to-high</option>
              <option value="descend">Price high-to-low</option>
            </select>
            <button className="button">Reset</button>
          </div>
        </div>
        <div className="hotel-list">
            {/* {filteredHotels.map((hotel, idx) => (
            <HotelCard key={idx} hotels={hotels} />
            ))} */}

            {sorted.map((hotel, idx) => (
        <HotelCard key={idx} hotels={hotels} />
      ))}
        </div>
      </div>
    </div>
  );
};

export default HotelList;
