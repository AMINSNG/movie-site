import axios from "axios";

export async function getMovies() {
  const respons = axios.get("http://localhost:3000/movies",{withCredentials : true});
  return respons;
}
