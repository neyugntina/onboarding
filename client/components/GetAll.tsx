import axios from "axios";

export const GetAll = async () => {
  const response = await axios.get("http://localhost:3333/api/items");
  return response.data;
};

export const create = async (
  name: { name: string },
  description: { description: string }
) => {
  await axios.post("http://localhost:3333/api/items/create"),
    { name, description };
};
