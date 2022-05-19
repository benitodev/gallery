import axios from "axios";
import { loginSuccess, loginStart, loginFailure } from "../context/AuthActions";

const login = async (credentials, dispatch) => {
  const baseUrl = "https://benitodev-gallery-api.herokuapp.com/login";

  dispatch(loginStart());
  try {
    const response = await axios.post(baseUrl, credentials);
    console.log(response.data);
    dispatch(loginSuccess(response.data));
  } catch (err) {
    dispatch(loginFailure());
  }
};

// eslint-disable-next-line import/no-anonymous-default-export
export default { login };
