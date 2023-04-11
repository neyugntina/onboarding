import axios from "axios";

export const GetAll = async () => {
  const response = await axios.get("http://localhost:3333/api/items");
  console.log(response.data);
  return response.data;
};

export const create = async (name: string, description: string) => {
  await axios
    .post("http://localhost:3333/api/items/create", {
      name,
      description,
    })
    .then(function (response) {
      console.log(response.data, response.status);
    })
    .catch((err) => console.warn(err));
};

export const getOne = async (id: string) => {
  const response = await axios.get(`http://localhost:3333/api/items/${id}`, {
    params: { id },
  });
  return response.data;
};

export const update = async (name: string, description: string, id: string) => {
  await axios
    .post(
      `http://localhost:3333/api/items/update/${id}`,
      {
        name,
        description,
      },
      { params: { id } }
    )
    .then((response) => response.status)
    .catch((err) => console.warn(err));
};

export const clear = async (id: string) => {
  await axios
    .delete(`http://localhost:3333/api/items/${id}`, {
      params: { id },
    })
    .then(function (response) {
      console.log(response.data, response.status);
    })
    .catch((err) => console.warn(err));
};
