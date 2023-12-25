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

export default function ProductCard({ ResData }) {
  const {
    id,
    name,
    cloudinaryImageId,
    locality,
    areaName,
    costForTwo,
    cuisines,
  } = ResData.info;
  return (
    <Card sx={{marginY: 5, width: 280, maxWidth: "100%", boxShadow: "lg" }}>
      <CardOverflow>
        <AspectRatio sx={{ minWidth: 200 }}>
          <img
            src={
              "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
              cloudinaryImageId
            }
            srcSet="https://images.unsplash.com/photo-1593121925328-369cc8459c08?auto=format&fit=crop&w=286&dpr=2 2x"
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
            height: 'auto',
            '& .MuiChip-label': {
              display: 'block',
              whiteSpace: 'normal',
            },
          }}
        >
          {cuisines.join(", ")}
        </Chip>

        <Typography level="title-lg" sx={{ mt: 1, fontWeight: "xl" }}>
          {costForTwo}
        </Typography>
        <Typography level="body-sm">
          {/* (Only <b>7</b> left in stock!) */}
        </Typography>
      </CardContent>
      <CardOverflow>
        <Button variant="solid" color="danger" size="lg">
          Add to cart
        </Button>
      </CardOverflow>
    </Card>
  );
}
