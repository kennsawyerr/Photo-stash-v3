/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
import lorem_picture from "../assets/do-while-loop.jpg";
import Navbar from "./navbar";
// import {Link} from "react-router-dom"
export default function Gallery() {
  return (
    <>
      <div className="container">
        <Navbar />
<div className="grid-container ">
        <div className="card">
          <img src={lorem_picture} alt="" />
          <p>Image 1</p>
        </div>

        <div className="card">
          <img src={lorem_picture} alt="" />
          <p>Image 1</p>
        </div>

        <div className="card">
          <img src={lorem_picture} alt="" />
          <p>Image 1</p>
        </div>

        <div className="card">
          <img src={lorem_picture} alt="" />
          <p>Image 1</p>
        </div>

        <div className="card">
          <img src={lorem_picture} alt="" />
          <p>Image 1</p>
        </div>

        <div className="card">
          <img src={lorem_picture} alt="" />
        </div>

        <div className="card">
          <img src={lorem_picture} alt="" />
        </div>
      </div>
      </div>
    </>
  );
}
