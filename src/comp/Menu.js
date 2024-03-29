import React, { useEffect } from "react";
import { ResData } from "./ResData";
import "../App.css";
import ProductCard from "./ResCard";
import { useState } from "react";
import Button from "@mui/material/Button";
function Menu() {
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [ListOfRestaurants, setListOfRestaurants] = useState(ResData);
  const [Restaurants, setRestaurants] = useState([]);
  
  const getUserLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLatitude(position.coords.latitude);
          setLongitude(position.coords.longitude);
        },
        (error) => {
          console.error('Error getting user location:', error);
        }
      );
    } else {
      console.error('Geolocation is not supported by this browser.');
    }
  };

  // Fetch menu data when latitude and longitude are available
  useEffect(() => {
    if (latitude !== null && longitude !== null) {
      fetchData();
    }
  }, [latitude, longitude]);
  useEffect(() => {
    getUserLocation();
  }, []);
  const fetchData = async () => {
    const response = await fetch(
      `https://www.swiggy.com/dapi/restaurants/list/v5?lat=${latitude}&lng=${longitude}&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING`
    );
    const data = await response.json();
    setListOfRestaurants(
      data.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };
  console.log(ListOfRestaurants);

  return (
    <div className="menu">
      <div className="menuList">
        {Restaurants.map((res) => (
          <ProductCard key={res.info.id} ResData={res} />
        ))}
      </div>
      <Button
        sx={{ marginTop: 5, backgroundColor: "#3f51b5" }}
        variant="contained"
        onClick={() => {
          Restaurants.length === 0
            ? setRestaurants(
                ListOfRestaurants.filter((res) => res.info.avgRating >= 4.5)
              )
            : setRestaurants([]);
        }}
      >
        Click for Top Restaurents
      </Button>
      {/* {Restaurants.map((res) => (
          <ProductCard key={res.info.id} ResData={res} />
        ))} */}
      <div className="menuList">
        {Restaurants &&
          ListOfRestaurants.map((res) => (
            <ProductCard key={res.info.id} ResData={res} />
          ))}
      </div>
    </div>
  );
}

export default Menu;

// {
//   info: {
//     id: "293211",
//     name: "Hotel Venus",
//     cloudinaryImageId: "s8qangtphdyh4delzabz",
//     locality: "Fajalpur Maholla",
//     areaName: "Shiv Nagar",
//     costForTwo: "₹200 for two",
//     cuisines: ["Chinese", "Indian"],
//     avgRating: 4.4,
//     parentId: "103288",
//     avgRatingString: "4.2",
//   },
// },
// {
//   info: {
//     id: "212513",
//     name: "Hotel Amber",
//     cloudinaryImageId: "esd4en7ro5xwsetwcxzp",
//     locality: "Kashipur Bypass Road",
//     areaName: "Rudrapur Locality",
//     costForTwo: "₹350 for two",
//     cuisines: ["North Indian", "Snacks"],
//     avgRating: 4.8,
//     parentId: "97894",
//     avgRatingString: "4.3",
//     totalRatingsString: "1K+",
//   },
// },
// {
//   info: {
//     id: "212516",
//     name: "Hotel Blue lagoons",
//     cloudinaryImageId: "esd4en7ro5xwsetwcxzp",
//     locality: "Kashipur Bypass Road",
//     areaName: "Rudrapur Locality",
//     costForTwo: "₹350 for two",
//     cuisines: ["North Indian", "Snacks"],
//     avgRating: 3.7,
//     parentId: "97894",
//     avgRatingString: "4.9",
//     totalRatingsString: "1K+",
//   },
// },
