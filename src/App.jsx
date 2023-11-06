import { Route, Routes } from "react-router-dom";
import Gallery from "./pages/gallery";
import "./styles/styles.css";
import Home from "./pages/home";
// import Signin from './pages/signin'

function App() {
  return (
    <>
      <Routes>
        <Route path="/gallery" element={<Gallery />}></Route>
        <Route path="/" element={<Home />}></Route>
        {/* <Route path="/sign-in" element={<Signin/>}></Route> */}
        <Route path="*" element={<h1>No Match</h1>} />
      </Routes>
    </>
  );
}
export default App;
