import axios from "axios";
const BASE_URL = "https://youtube-v31.p.rapidapi.com";
const options = {
  url: BASE_URL,
  params: {
    maxResults: "50",
    // q: "music",
    // part: "snippet,id",
    // regionCode: "US",
    // order: "date",
  },
  headers: {
    "X-RapidAPI-Key": process.env.REACT_APP_API_KEY,

    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
};
export const fetchFromAPI = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);
  return data;
};

// const testFetch = () => {
//   const axios = require("axios");
//
//   const options = {
// method: "GET",
// url: "https://youtube-v31.p.rapidapi.com/search",
// params: {
//   relatedToVideoId: "7ghhRHRP6t4",
//   part: "id,snippet",
//   type: "video",
//   maxResults: "50",
// },
// headers: {
// //   "X-RapidAPI-Key": "c25fb85fb0msh58f863a6ac1826bp1278ccjsnc43739f1ccfe",
//   "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
// },
//   };
//
//   axios
// .request(options)
// .then(function (response) {
//   console.log(response.data);
// })
// .catch(function (error) {
//   console.error(error);
// });
// };
//
// export { testFetch };
//
