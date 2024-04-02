import React from "react";
import { useState, useEffect } from "react";
import Animation from "./Skeleton";
import { useParams } from "react-router";
import AccordionUsage from "./Accordion";
export default function RestaurantMenu() {
  const { resId } = useParams();
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [RestaurantDetails, setRestaurantDetails] = useState(null);

  const getUserLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLatitude(position.coords.latitude);
          setLongitude(position.coords.longitude);
        },
        (error) => {
          console.error("Error getting user location:", error);
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  };

  // Fetch menu data when latitude and longitude are available
  useEffect(() => {
    if (latitude !== null && longitude !== null) {
      fetchData();
    }
  }, [latitude, longitude, resId]);

  // Get user's location when component mounts
  useEffect(() => {
    getUserLocation();
  }, []);

  const fetchData = async () => {
    const response = await fetch(
      `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=${latitude}&lng=${longitude}&restaurantId=${resId}&catalog_qa=undefined&submitAction=ENTER`
    );
    const data = await response.json();
    setRestaurantDetails(
      data.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR.cards
    );
  };
  console.log(RestaurantDetails);

  if (RestaurantDetails === null) {
    return <Animation />;
  }
  // RestaurantDetails.cards.map((item) => console.log());
  return (
      <div
        style={{
          marginTop: "2rem",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {RestaurantDetails.map((item, index, key) => {
          // console.log(index);
          return item.card.card.hasOwnProperty("itemCards") ? (
            <AccordionUsage
              key={index}
              RestaurantDetails={item.card?.card?.itemCards}
              categoryName={item.card.card.title}
              index={index}
            />
          ) : (
            <></>
          );
        })}
      </div>
  );
}
