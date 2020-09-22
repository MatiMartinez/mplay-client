import Axios from "axios";

const clientAxios = Axios.create({
  baseURL: process.env.REACT_APP_SERVER_URL,
});

export default clientAxios;
