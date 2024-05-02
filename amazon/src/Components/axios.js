import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:5001/challenge-cd848/us-central1/api",
});

export default instance;
