import axios from "axios";

const baseUrl = "https://web-production-f757.up.railway.app/image";
const baseUrlLocalhost = "http://localhost:5000/image";
const getAll = async () => {
  const request = await axios.get(baseUrl);
  return request.data.content;
};

const getOne = async (ID) => {
  const request = await axios.get(baseUrl + "/" + ID);

  return request.data.content;
};

const getRandom = async () => {
  const request = await axios.get(baseUrl + "/random");

  return request.data.content;
};
const create = async (newImage, { token }) => {
  try {
    const form = new FormData();
    for (let key in newImage) {
      form.append(key, newImage[key]);
    }
    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${token}`,
      },
    };

    const request = await axios.post(baseUrl, form, config);
    return request.data;
  } catch (err) {
    // return err.response.data;
    return [];
  }
};
const update = async (ID, body, { token }) => {
  const form = new FormData();
  for (let key in body) {
    form.append(key, body[key]);
  }
  console.log(body);
  if (!body) return false;

  const config = {
    headers: {
      "Content-Type": "multipart/form-data",
      Authorization: `Bearer ${token}`,
    },
  };
  const request = await axios.put(`${baseUrl}/${ID}`, form, config);
  console.log(request);
  return request.data;
};
const eliminate = async (ID, { token }) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const request = await axios.delete(`${baseUrl}/${ID}`, config);
  console.log(request.data);
  return request.data;
};

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  getAll,
  getOne,
  getRandom,
  create,
  eliminate,
  update,
  baseUrl,
};
