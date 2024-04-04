import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionActions from "@mui/material/AccordionActions";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Button from "@mui/material/Button";
import MediaControlCard from "./FoodCart";

export default function AccordionUsage({
  categoryName,
  RestaurantDetails,
  index,
  accInd
}) {
  console.log(accInd);
  return (
    <Accordion
      defaultExpanded={index === accInd}
      sx={{ width: "80rem", marginTop: "1rem", marginBottom: "1rem" }}
    >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1-content"
        id="panel1-header"
      >
        {categoryName} ({RestaurantDetails.length})
      </AccordionSummary>
      <AccordionDetails>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}>
          {RestaurantDetails.map((item) => (
            <MediaControlCard key={item.card.info.id} props={item.card.info} />
          ))}
        </div>
      </AccordionDetails>
    </Accordion>
  );
}
