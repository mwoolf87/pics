import axios from "axios";

const searchImages = async ({ searchTerm }) => {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    headers: {
      Authorization: "Client-ID gIYaojQEwvONU9FOTledvZax6HbO4rh4CAOq-4KLTM8"
    },
    params: {
      query: searchTerm
    }
  });

  return response.data.results;
};

export default searchImages;
