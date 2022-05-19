import axios from "axios";

const baseUrl = "https://benitodev-gallery-api.herokuapp.com/user";
const getUser = async (ID) => {
  try {
    const request = await axios(baseUrl + "/" + ID);
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
