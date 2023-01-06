import axios from "axios";

const searchImages = async () => {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    headers: {
      Authorization: "Client-ID gIYaojQEwvONU9FOTledvZax6HbO4rh4CAOq-4KLTM8"
    },
    params: {
      query: "cars"
    }
  });
  console.log(response);
  return response;
};

export default searchImages;
