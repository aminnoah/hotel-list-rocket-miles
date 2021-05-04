import React, { useState, useEffect } from "react";
// import Filters from "./Filters";
import HotelList from "./HotelList";
import "./App.style.scss";

import hotelResultService from "../../services/hotel-result/hotel-result.service";

const App = () => {
  return (
    <div className="main-container">
      <HotelList />
    </div>
  );
};

export default App;
