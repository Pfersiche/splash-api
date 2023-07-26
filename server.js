const express = require("express");
const cors = require("cors");
const axios = require("axios");

require("dotenv").config();

const app = express();

app.use(cors());

const PORT = process.env.PORT || 8092;

app.get <
  ("/",
  (request, response) => {
    response.status(200).json("the test is working");
  });

app.get("/photos", async (request, response) => {
  const API = `https://api.unsplash.com/search/photos/?client_id=${process.env.ACCESS_KEY}&query=goat`;
  const res = await axios.get(API);
  console.log(res.data.results[0]);
  response.status(200).json("hello");
  const photos = res.data.results.map((photo)=>{
    return{
        id: photo.id,
        img_url: photo.urls.regular,
        original_image: photo.links.self,
        photographer: photo.user.name

    }
  }
});

app.listen(PORT, () => console.log(`the app is listening on port ${PORT}`));

// https://api.unsplash.com/search/photos/?client_id=V2zuK-UWO7FDaNgi5V2zKRsoM-02OHtoPL1Q7LMbGKE
