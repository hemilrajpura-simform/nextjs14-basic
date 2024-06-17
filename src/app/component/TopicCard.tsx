import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Link from "next/link";

interface TopicCard {
  cardImageLink: string;
  CardHeader: string;
  CardDesc: string;
  CardLink: string;
}

export default function TopicCard({
  cardImageLink,
  CardHeader,
  CardDesc,
  CardLink,
}: TopicCard) {
  return (
    <Link href={CardLink}>
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            width="200"
            image={cardImageLink}
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {CardHeader}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {CardDesc}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Link>
  );
}
