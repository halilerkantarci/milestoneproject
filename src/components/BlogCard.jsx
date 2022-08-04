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
import placeholder from "../assets/placeholder.png";
import { useNavigate } from "react-router-dom";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import ModeCommentOutlinedIcon from "@mui/icons-material/ModeCommentOutlined";
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

export default function RecipeReviewCard({ title, img, content, email, id }) {
  // const { email } = getInfo();
  const navigate = useNavigate();
  const info = [
    { title: title, img: img, content: content, id: id, email: email },
  ];
  console.log(info);
  const [expanded, setExpanded] = React.useState(false);
  // const { email } = useContext(BlogContext);
  // console.log(email);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ width: 400, m: 3 }} className="card-content">
      {info.map((item) => {
        const { title, img, content, id, email } = item;
        return (
          <>
            <CardHeader />

            <CardMedia
              component="img"
              height="194"
              image={img}
              alt={title}
              onClick={() => navigate(`details/${id}`, { state: item })}
            />

            <CardContent
              onClick={() => navigate(`details/${id}`, { state: item })}
            >
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{
                  fontSize: "1.2rem",
                  color: "black",
                  textTransform: "uppercase",
                  mb: 2,
                }}
              >
                {title}
              </Typography>

              <Typography variant="body2" color="text.secondary">
                {`${content.substring(0, 150)}...`}
              </Typography>

              <Typography
                variant="body2"
                color="text.secondary"
                sx={{
                  fontSize: "1.2rem",
                  color: "black",
                }}
              >
                <AccountCircleRoundedIcon /> {email}
              </Typography>
            </CardContent>
          </>
        );
      })}

      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>{" "}
        0
        <IconButton aria-label="add to favorites">
          <ModeCommentOutlinedIcon />
        </IconButton>{" "}
        0
      </CardActions>
    </Card>
  );
}
