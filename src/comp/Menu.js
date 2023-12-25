import React from "react";
import { Data } from "./data";
import { ResData } from "./ResData";
import "../App.css";
import ActionAreaCard from "./Mcard";
import ProductCard from "./ResCard";
function Menu() {
  return (
    <div className="menu">
      <div className="menuList">
        {ResData.map((res) => (
          <ProductCard key={res.info.id} ResData={res} />
        ))}
        {/* {Data.map((items, key) => {
          return (
            <ActionAreaCard
              key={key}
              image={items.image}
              name={items.name}
              price={items.price}
            />
          );
        })} */}
      </div>
    </div>
  );
}

export default Menu;
