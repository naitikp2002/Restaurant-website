import * as React from "react";
import AspectRatio from "@mui/joy/AspectRatio";
import Button from "@mui/joy/Button";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import CardOverflow from "@mui/joy/CardOverflow";
import Chip from "@mui/joy/Chip";
import Link from "@mui/joy/Link";
import Typography from "@mui/joy/Typography";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import { useNavigate } from "react-router";
export default function ProductCard({ ResData }) {
  const navigate = useNavigate();
  const {
    id,
    name,
    cloudinaryImageId,
    locality,
    areaName,
    avgRatingString,
    costForTwo,
    cuisines,
  } = ResData.info;
  return (
    <Card
     onClick={()=>{
      navigate(`${id}`)
    }}
     sx={{ marginTop: 5, width: 250, maxWidth: "100%", boxShadow: "lg" }}
    >
      <CardOverflow>
        <AspectRatio sx={{ minWidth: 200 }}>
          <img
            src={
              "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
              cloudinaryImageId
            }
            srcSet={
              "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
              cloudinaryImageId
            }
            loading="lazy"
            alt=""
          />
        </AspectRatio>
      </CardOverflow>
      <CardContent>
        <Typography level="body-xs">{locality}</Typography>
        <Link
          //   href="#product-card"
          fontWeight="md"
          color="neutral"
          textColor="text.primary"
          overlay
          //   endDecorator={<ArrowOutwardIcon />}
        >
          {name}
        </Link>

        <Chip
          component="span"
          size="sm"
          variant="soft"
          color="success"
          sx={{
            height: "auto",
            "& .MuiChip-label": {
              display: "block",
              whiteSpace: "normal",
            },
          }}
        >
          {cuisines.join(", ")}
        </Chip>

        <Typography
          level="title-lg"
          sx={{ mt: 1, fontWeight: "xl" }}
          endDecorator={
            <Chip component="span" size="md" variant="soft" color="primary">
              {" "}
              {avgRatingString}
            </Chip>
          }
        >
          {costForTwo}
        </Typography>
        <Typography level="body-sm">
          {/* (Only <b>7</b> left in stock!) */}
        </Typography>
      </CardContent>
      <CardOverflow>
        <Button variant="solid" color="danger" size="lg">
          Click for Menu
        </Button>
      </CardOverflow>
    </Card>
  );
}
