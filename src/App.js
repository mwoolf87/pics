import React from "react";
import SearchBar from "./components/SearchBar";
import searchImages from "./api";

const App = () => {
  const handleSubmit = async term => {
    console.log(term);
    const result = await searchImages(term);
    console.log(result);
  };

  return (
    <div>
      <SearchBar onSubmit={handleSubmit} />
    </div>
  );
};

export default App;
