import React from "react";
import { MenuList } from "../data/data";
import Layout from "./../components/Layout/Layout";
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

const Menu = () => {
  return (
    <Layout>
      <div className="Adds">
        <div>
          <div className="content contact ">
            <h2>Soups</h2>
          </div>
          <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
            {MenuList.map((menu) => (
              <Card sx={{ maxWidth: "390px", display: "flex", m: 2 }}>
                <CardActionArea>
                  <CardMedia
                    sx={{ minHeight: "300px" }}
                    component={"img"}
                    src={menu.image}
                    alt={menu.name}
                  />
                  <CardContent>
                    <Typography variant="h5" gutterBottom component={"div"}>
                      {menu.name}
                    </Typography>
                    <Typography variant="body2">{menu.description}</Typography>
                    <Typography variant="body3">{menu.price}</Typography>

                  </CardContent>
                </CardActionArea>
              </Card>
            ))}
          </Box>
        </div>
      </div>
    </Layout>
  );
};

export default Menu;
