import axios from "axios";

const axiosLocal = axios.create({
  // baseURL: "http://localhost:5000",
  baseURL: "https://server-sepia-xi.vercel.app",
});

const useAxiosLocal = () => {
  return axiosLocal;
};

export default useAxiosLocal;
