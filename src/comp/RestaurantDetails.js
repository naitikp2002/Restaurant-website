import React from 'react'
import { useState, useEffect } from 'react';
import Animation from './Skeleton';
import { useParams } from 'react-router';
export default function RestaurantMenu() {
    const { resId } = useParams();
  const [RestaurantDetails, setRestaurantDetails] = useState(null);

  useEffect(() => {
    fetchData();
  },[]);

  const fetchData = async () => {
    const response = await fetch(
      `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=21.1947611&lng=72.78624099999999&restaurantId=${resId}&catalog_qa=undefined&submitAction=ENTER`
    );
    const data = await response.json();
    setRestaurantDetails(
      data.data?.cards[0]?.card.card.info
    );
  };
  console.log(RestaurantDetails);

  if(RestaurantDetails=== null){
    return (<Animation/>);
  }
  return (
    <div>
        <h1>
          {RestaurantDetails.name}
        </h1>
          {RestaurantDetails.costForTwo/100}
    </div>
  )
}
