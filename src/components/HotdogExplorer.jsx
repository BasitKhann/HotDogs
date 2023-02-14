import HotdogListing from "./HotdogListing";
import "./HotdogExplorer.css";
import { useEffect, useState } from "react";

const API_KEY = "qBqtnlW5HMm2XGQO29k-UFiCAHhhRODngMW69Kha640";

const HotdogExplorer = ({ hotdogListings, toggleModal, onDelete }) => {
  const [url, setUrl] = useState("");
  // const [image, setImage] = useState(getListing());

  // useEffect(() => {
  //   fetch(
  //     `https://api.unsplash.com/photos/random?query=hotdog&client_id=${API_KEY}`
  //   )
  //     .then((response) => response.json())
  //     .then((data) => {
  //       console.log(data);
  //       setImage(data.urls.regular);
  //     });
  // }, []);

  // console.log(image);

  // useEffect(() => {
  //   async function getRandomImage() {
  //     const response = await fetch(
  //       `https://source.unsplash.com/hot-dog/100x100`
  //     );

  //     console.log(response);
  //     const imageUrl = response.url;
  //     setUrl(imageUrl);
  //   }
  //   getRandomImage();
  // }, []);
  return (
    <div className="container explorer">
      <div className="row">
        <div className="col explorer--title">
          <p className="text-center pt-3">Explore Listing</p>
        </div>
      </div>
      <div className="row mt-4" id="hero-container" style={{ rowGap: 45 }}>
        {hotdogListings.map((hotdog) => (
          <div className="col-md-3">
            <HotdogListing
              key={hotdog.name}
              name={hotdog.name}
              location={hotdog.location}
              photo={hotdog.image}
              rating={hotdog.rating}
              onEdit={toggleModal}
              toggleModal={toggleModal}
              onDelete={() => onDelete(hotdog)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default HotdogExplorer;
