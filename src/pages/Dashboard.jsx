import { Grid } from "@mui/material";
import React from "react";
import BlogCard from "../components/BlogCard";
import Box from "@mui/material/Box";
import { useFetch } from "../helpers/functions";
import { getInfo } from "../helpers/firebase";

const Dashboard = () => {
  const { isLoading, contentList } = useFetch();
  const { email } = getInfo();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <div className="d-flex justify-content-center flex-wrap">
        {isLoading ? (
          <div className="spinner-border text-primary m-5" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        ) : (
          contentList?.map((list, index) => (
            <BlogCard key={index} {...list} email={email} />
          ))
        )}
      </div>

      {/* <Grid container spacing={2}>
        <Grid item xs={8}></Grid>
      </Grid> */}
    </Box>
  );
};

export default Dashboard;
