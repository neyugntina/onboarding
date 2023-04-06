import axios from "axios";

export const GetAll = async () => {
  const response = await axios.get("http://localhost:3333/api/items");
  console.log(response.data);
  return response.data;
};

export const create = async (name: string, description: string) => {
  await axios.post("http://localhost:3333/api/items/create", {
    name,
    description,
  });
};

export const update = async (name: string, description: string, id: string) => {
  await axios
    .post(
      "http://localhost:3333/api/items/update/:id",
      {
        name,
        description,
      },
      { params: { id } }
    )
    .then((response) => response.status)
    .catch((err) => console.warn(err));
};
