import axios from "axios";
const BASE_URL = "https://youtube-v31.p.rapidapi.com/search";
const options = {
  url: BASE_URL,
  params: {
    maxResults: "50",
  },
  headers: {
    "X-RapidAPI-Key": "c25fb85fb0msh58f863a6ac1826bp1278ccjsnc43739f1ccfe",
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
};
