import React from "react";
import "./ImageList.css";
import ImageShow from "./ImageShow";

const ImageList = ({ images }) => {
  const renderedImages = images.map(image => {
    return (
      <div key={image.id}>
        <ImageShow image={image} />
      </div>
    );
  });

  return <div className="image-list">{renderedImages}</div>;
};

export default ImageList;
