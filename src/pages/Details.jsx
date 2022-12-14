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
import { Box, Container, dividerClasses } from "@mui/material";
import { alignPropType } from "react-bootstrap/esm/types";
import MarkChatReadIcon from "@mui/icons-material/MarkChatRead";
import { getInfo, signIn } from "../helpers/firebase";
import { BlogContext } from "../contexts/BlogContext";
import { useContext } from "react";
import placeholder from "../assets/placeholder.png";
import { useNavigate, useParams, useLocation } from "react-router-dom";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import ModeCommentOutlinedIcon from "@mui/icons-material/ModeCommentOutlined";
import Button from "@mui/material/Button";
import { AuthContext } from "../contexts/AuthContext";
import { DeleteUser } from "../helpers/functions";

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

export default function RecipeReviewCard({}) {
  const navigate = useNavigate();
  const { currentUser } = useContext(AuthContext);
  console.log(currentUser.email);

  // const { info } = useParams();
  // console.log(info);
  const { state } = useLocation();
  console.log(state);
  const arraystate = [state];
  console.log(arraystate);
  // const { email } = getInfo();
  const [expanded, setExpanded] = React.useState(false);
  // const { email } = useContext(BlogContext);
  // console.log(email);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Box>
      {arraystate.map((item) => {
        const { title, content, email, img, id } = item;
        return (
          <>
            <Card sx={{ m: 3 }} className="card-content">
              <CardHeader />

              <CardMedia
                component="img"
                height="594"
                image={img}
                alt=""
                className="detailsImg"
              />

              <CardContent sx={{}}>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{
                    color: "black",
                    textTransform: "uppercase",
                    mb: 2,
                    textAlign: "center",
                    fontSize: "2rem",
                  }}
                >
                  {title}
                </Typography>

                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{
                    color: "black",
                    mb: 2,
                    fontSize: "1.3rem",
                    fontWeight: "300",
                  }}
                >
                  {content}
                </Typography>

                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{
                    fontSize: "1.2rem",
                    color: "black",
                    mt: 2,
                  }}
                >
                  <AccountCircleRoundedIcon /> {email}
                </Typography>
              </CardContent>

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
            {currentUser.email == state.email && (
              <Box sx={{ display: "flex", justifyContent: "center" }}>
                <Button
                  variant="contained"
                  color="error"
                  sx={{
                    width: 25,
                    height: 55,
                    padding: "2.5rem",
                    paddingRight: "3rem",
                    paddingLeft: "3rem",
                  }}
                  onClick={() => {
                    DeleteUser(state.id);
                    navigate("/");
                  }}
                >
                  Delete
                </Button>
                <Button
                  variant="contained"
                  sx={{
                    width: 25,
                    height: 55,
                    padding: "2.5rem",
                    paddingRight: "3rem",
                    paddingLeft: "3rem",
                    marginLeft: "3rem",
                  }}
                  onClick={() => navigate("/updateblog", { state: item })}
                >
                  Update
                </Button>
              </Box>
            )}
          </>
        );
      })}
    </Box>
  );
}
