import axios from "axios";

const GetItems = async () => {
  return await axios
    .get("http://localhost:8000/api/v1/items")
    .then((response) => response.data)
    .catch((error) => console.error(error));
};

export default GetItems;