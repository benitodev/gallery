import axios from "axios";

const baseUrl = "https://web-production-f757.up.railway.app/user";
//const baseUrlLocalhost = "http://localhost:5000/user";
const getUser = async (ID) => {
  try {
    const request = await axios(baseUrl + "/" + ID);
    console.log(request.data);
    return request.data.content;
  } catch (err) {}
};

const getUsers = async (ID) => {
  try {
    const request = await axios(baseUrl);
    return request.data;
  } catch (err) {}
};

const createUser = async (newUser) => {
  try {
    const request = await axios.post(baseUrl, newUser);
    console.log(request);
    return request.data.message;
  } catch (err) {}
};
// eslint-disable-next-line import/no-anonymous-default-export
export default { getUser, getUsers, createUser };
