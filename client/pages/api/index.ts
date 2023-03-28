import axios from "axios";

// axios({
//   method: "get",
//   url: "/api/items",
//   responseType: "stream",
// }).then(function (response) {
//   response.data.pipe(fs.createWriteStream("ada_lovelace.jpg"));
// });

// axios
//   .get("/api/items")
//   .then((response) => {
//     console.log(response.data);
//   })
//   .catch((err) => {
//     console.error(err);
//   });

export const GetAll = async () => {
  try {
    const response = await axios.get("http://localhost:3333/api/items");
    console.log(response.data);
  } catch (err) {
    console.error(err);
  }
};
export const GetOne = async ({ id }) => {
  try {
    const response = await axios.get(
      "http://localhost:3333/api/items/" + `${id}`
    );
    console.log(response.data);
  } catch (err) {
    console.error(err);
  }
};
export const Create = async () => {
  try {
    const response = await axios.get("http://localhost:3333/api/items");
    console.log(response.data);
  } catch (err) {
    console.error(err);
  }
};
export const Edit = async () => {
  try {
    const response = await axios.get("http://localhost:3333/api/items");
    console.log(response.data);
  } catch (err) {
    console.error(err);
  }
};

export const Delete = async () => {
  try {
    const response = await axios.get("http://localhost:3333/api/items");
    console.log(response.data);
  } catch (err) {
    console.error(err);
  }
};
