import axios from "axios";
const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
});
export default instance;



// "https://api.themoviedb.org/3/discover/movie?api_key=50f395426dada1eeb279ce023dc7f737";
//base url,params apikey,will continue

//https://api.themoviedb.org/3/discover/tv?api_key=50f395426dada1eeb279ce023dc7f737&with_networks=213