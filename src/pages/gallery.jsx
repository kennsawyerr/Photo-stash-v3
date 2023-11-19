/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
import Home from "./home"
import  Imagegallery from "../components/imagegallery"
import Navbar from "./navbar";


export default function Gallery() {
  return (
    <div>
      <Navbar/>
      <Home />
      <Imagegallery images={bigArray}/>
    </div>
  );
}
