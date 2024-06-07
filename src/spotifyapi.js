import axios from "axios";


const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize?"
const CLIENT_ID= "e175af4851574e0f856c3504fbb41c78";
const REDIRECT_URI ="http://localhost:5173/";
const SCOPES = ["user-library-read", "user-read-private"];

export const loginEndpoint = `${AUTH_ENDPOINT}client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&scope=${SCOPES.join(
    "%20"
  )}&response_type=token&show_dialog=true`;
  
  const apiClient = axios.create({
    baseURL: "https://api.spotify.com/v1/",
  });
  
  export const setClientToken = (token) => {
    apiClient.interceptors.request.use(async function (config) {
      config.headers.Authorization = "Bearer " + token;
      return config;
    });
  };
  
  export default apiClient;