import axios from "axios";

const robotClient = axios.create({
  baseURL: "http://localhost:8081/",
  json: true,
});

export default robotClient;
