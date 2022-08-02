import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Container, dividerClasses } from "@mui/material";
import { alignPropType } from "react-bootstrap/esm/types";
import MarkChatReadIcon from "@mui/icons-material/MarkChatRead";
import { getInfo, signIn } from "../helpers/firebase";
import { BlogContext } from "../contexts/BlogContext";
import { useContext } from "react";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function RecipeReviewCard({ title, img, content, email }) {
  // const { email } = getInfo();

  const [expanded, setExpanded] = React.useState(false);
  // const { email } = useContext(BlogContext);
  // console.log(email);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ width: 400, m: 3 }}>
      <CardHeader />
      <CardMedia component="img" height="194" image={img} alt="Paella dish" />
      <CardContent style={{ backgroundColor: "#E7E6F5" }}>
        <Typography variant="body2" color="text.secondary">
          {title}
        </Typography>

        <Typography variant="body2" color="text.secondary">
          {content}
        </Typography>
      </CardContent>
      <Typography variant="body2" color="text.secondary">
        {email}
      </Typography>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon /> 0
        </IconButton>

        <IconButton aria-label="add to favorites">
          <MarkChatReadIcon /> 0
        </IconButton>
      </CardActions>
    </Card>
  );
}
