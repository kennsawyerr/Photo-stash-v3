import { useState } from "react";
// import picture from "./nothing-to-see-icon.png";
// import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { TickCircle } from "iconsax-react";
import { EmojiHappy } from "iconsax-react";


import "../styles/styles.css";

import Navbar from "./navbar";


function App() {
  const {
    register,
    setError,
    clearErrors,
    formState: { errors },
  } = useForm();

  const [selectedImage, setSelectedImage] = useState(null);
  const [imageOk, setImageOk] = useState(null);
  const [imageLimit, setImageLimit] = useState(null);
  const [fileforUser, setFileForUser] = useState();
  
  // const {imageUpload , setImageUpload} = useState(null)

  {
    imageOk && setTimeout(() => setImageOk(false), 5000);
  }
  // const [photoFolder, setPhotoFolder] = useState([]);
 const photoFolder = []

  const handleImageUpload = () => {

   photoFolder.push(fileforUser)
    
   
    // const selectedFile = file.target.files[0];
    // setPhotoFolder((prevPhotos) => [...prevPhotos, selectedFile]);
    // alert(photoFolder)
  }
  return (
    <div className="App container">
      <nav className="flex">
        <div className="container flex">
          {/*             
            <NavLink className  to="/another" >Gallery</NavLink>
              <NavLink className  to="/another-route" >Gallery</NavLink> */}
          <div>
           
            <Navbar/>
           
          </div>
        </div>
      </nav>
      {imageOk && (
        <div className="  success flex notif">
          <div className="container flex">
            <TickCircle /> <p> Upload successful</p>
          </div>
        </div>
      )}

      <main>
        <section>
          <form>
            <div className="box grid">
              <label htmlFor="">
                {selectedImage && (
                  <div className="img-cont">
                    <img
                      alt="a nice photo"
                      className="input-img"
                      src={URL.createObjectURL(selectedImage)}
                    />
                    {/* <br />
                    <button onClick={() => setSelectedImage(null)}>
                      Remove
                    </button> */}
                  </div>
                )}
              </label>

              {selectedImage ? null : (
                <>
                  <EmojiHappy />
                  <p className="justify-f-strt">Drag and drop here ;)</p>
                </>
              )}
            </div>

            <input
              name="fileName"
              {...register("fileName", { required: true })}
              type="file"
              accept="image/png, image/jpeg, image/jpg"
              id="input-file"
              className="hide"
            />
            {errors.fileName && <p>invalid image type</p>}

            <label htmlFor="input-two" className="btn">
              Add Photo
            </label>

            {selectedImage ?  (
                <>
                 <label  className="btn" onClick={handleImageUpload}>
              Upload Photo
            </label>
                </>  
              ) : null}
               

            
            <input
              type="file"
              id="input-two"
              className="hide"
              name="myImage"
              {...register("myImage", { required: true })}
              onChange={(event) => {
               
                console.log(event.target.files[0]);
                
                
               
                const fileLimit = 5 * 1024 * 1024; // 5 MB
                // setFileForUser(event.target.files[0])
               const clickedFile = event.target.files[0]
                
              //  console.log("testfile",setFileForUser(clickedFile))
             

                if (clickedFile.size > fileLimit) {
                  setImageLimit("Photo is larger than 5MB");
                } else {
                  if (
                    clickedFile.type != "image/png" &&
                    clickedFile.type != "image/jpeg" &&
                    clickedFile.type != "image/jpg"
                  ) {
                    setError("myImage", {
                      type: "manual",
                      message: "Invalid file type",
                    });
                  } else {
                    setImageOk("Correct");
                    clearErrors("myImage");
                    setSelectedImage(clickedFile);
                    setFileForUser(clickedFile)
                    console.log(fileforUser)
                  }
                }
              }}
            />
            {imageLimit && <p className="red alert"> {imageLimit}</p>}
            {errors.myImage && (
              <p className="red alert">
                only jpeg, png and jpg photos can be uploaded!
              </p>
            )}
          </form>
        </section>
      </main>
    </div>
  );
}

export default App;

// photostash logo name color color: #61dafb;
// photostash font
// photostash dark md bg background-color: #282c34;
//import sun icon for darkmode and light mode from icon-sax
