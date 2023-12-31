import { useState } from "react";
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
  


  {
    imageOk && setTimeout(() => setImageOk(false), 5000);
  }
  

  const handleDrop = (event) => {
    event.preventDefault();
    console.log("event",event)
    const file = event.dataTransfer.files[0];
    setSelectedImage(file);
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  
  return (
    <>
    <div className="App container">
      <nav className="flex">
        <div className="container flex">
          <div>
           
            <Navbar/>
           
          </div>
        </div>
      </nav>
      {imageOk && (
        <div className="  success flex notif">
          <div className="container flex">
            <TickCircle/> <p> Upload successful</p>
          </div>
        </div>
      )}

      <main>
        <section>
          <form>
            <div className="box grid
            "
            onDrop={handleDrop}
            onDragOver={handleDragOver}>
              <label htmlFor="">
                {selectedImage  && (
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

        
            {errors.fileName && <p>invalid image type</p>}

            <label htmlFor="input-two" className="btn">
              Add Photo
            </label>

            {selectedImage ?  (
                <>
                 <label  className="btn">
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

    <img src={fileforUser} alt="" />
    </>
  );
}

export default App;

// photostash logo name color color: #61dafb;
// photostash font
// photostash dark md bg background-color: #282c34;
//import sun icon for darkmode and light mode from icon-sax
