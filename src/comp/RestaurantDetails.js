import React from "react";
import { useState, useEffect } from "react";
import Animation from "./Skeleton";
import { useParams } from "react-router";
import MediaControlCard from "./FoodCart";
import AccordionUsage from "./Accordion";
export default function RestaurantMenu() {
  const { resId } = useParams();
  const [RestaurantDetails, setRestaurantDetails] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetch(
      `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=21.1947611&lng=72.78624099999999&restaurantId=${resId}&catalog_qa=undefined&submitAction=ENTER`
    );
    const data = await response.json();
    setRestaurantDetails(
      data.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR
    );
  };
  console.log(RestaurantDetails);

  if (RestaurantDetails === null) {
    return <Animation />;
  }
  // RestaurantDetails.cards.map((item) => console.log());
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {RestaurantDetails.cards.map((item) => {
          return item.card.card.hasOwnProperty("itemCards") ? (
            <AccordionUsage
              RestaurantDetails={item.card?.card?.itemCards}
              categoryName={item.card.card.title}
            />
          ) : (
            <></>
          );
        })}
      </div>
    </>
  );
}
{
  /* <>
(item.card.card.hasOwnProperty('itemCards'))?
  <AccordionUsage RestaurantDetails={item.card?.card?.itemCards} categoryName={item.card.card.title} />
:<></>
</> */
}
