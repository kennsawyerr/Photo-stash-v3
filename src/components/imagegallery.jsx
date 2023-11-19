/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */

function Imagegallery({ images }) {
  return (
    <div>
      {images.map((image, index) => (
        <img key={index} src={image} alt={`Image ${index}`} />
      ))}
    </div>
  );
}

export default Imagegallery;