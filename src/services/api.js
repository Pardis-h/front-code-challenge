import axios from "axios";
const BASE_URL = "http://localhost:3001/users";

// Get Users Data with axios
export const getUsers = async (query) => {
  const res = await axios.get(`${BASE_URL}${query}`);
  console.log(res);
  return res;
};
