import HotdogExplorer from "./components/HotdogExplorer";
import React, { useState, useEffect, useRef } from "react";
import HotdogEditor from "./components/HotdogEditor";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import heroImage from "./images/heroImage.png";
import Navbar from "./common/Header";
import Login from "./common/Login";
import Hero from "./common/HeroSection";
import getListing from "./fakeHotdogListing";
import Modal from "./common/Modal";
import Header from "./common/Header";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";

const App = () => {
  const [hotdogListings, setHotdogListings] = useState(getListing());
  const [isEditing, setIsEditing] = useState(false);
  const [editingHotdog, setEditingHotdog] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = (event) => {
    event.preventDefault();
    console.log("Toggle Modal clicked");
    setIsModalOpen(!isModalOpen);
  };
  useEffect(() => {
    // Fetch the hotdog listings from a real API
  }, []);

  const myRef = useRef(document.getElementById("hero-container"));

  const handleScroll = () => {
    myRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  const startEditing = (hotdog) => {
    console.log(hotdog);
    setIsEditing(true);
    setEditingHotdog(hotdog);
  };

  const cancelEditing = () => {
    setIsEditing(false);
    setEditingHotdog({});
  };

  const saveHotdog = (hotdog) => {
    // Replace the old hotdog with the new hotdog if it already exists
    const index = hotdogListings.findIndex(
      (listing) => listing.name === hotdog.name
    );
    if (index !== -1) {
      setHotdogListings([
        ...hotdogListings.slice(0, index),
        hotdog,
        ...hotdogListings.slice(index + 1),
      ]);
    } else {
      // Otherwise, add the new hotdog to the list
      setHotdogListings([...hotdogListings, hotdog]);
    }
    setIsEditing(false);
    setEditingHotdog({});
  };

  const deleteHotdog = (hotdog) => {
    setHotdogListings(
      hotdogListings.filter((listing) => listing.name !== hotdog.name)
    );
  };

  return (
    <div className="main-wrapper">
      <Header />
      <Hero image={heroImage} handleScroll={handleScroll} ref={myRef} />
      <HotdogExplorer
        hotdogListings={hotdogListings}
        toggleModal={toggleModal}
        onDelete={deleteHotdog}
      />
      <Modal toggleModal={toggleModal} isModalOpen={isModalOpen}>
        <form>
          <div className="form-group mb-3">
            <label>Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Name"
            />
          </div>
          <div className="form-group mb-3">
            <label>Location</label>
            <input
              style={{ display: "inline-block" }}
              type="text"
              className="form-control"
              placeholder="Enter Location"
            />
          </div>
          <div className="form-group">
            <label>Rating</label>
            <input
              type="number"
              max={5}
              min={0}
              className="form-control"
              placeholder="Enter Name"
            />
          </div>
        </form>
      </Modal>
      {/* {isEditing ? (
        <HotdogEditor
          hotdog={editingHotdog}
          onSave={saveHotdog}
          onCancel={cancelEditing}
        />
      ) : (
        <HotdogExplorer
          hotdogListings={hotdogListings}
          onEdit={startEditing}
          onDelete={deleteHotdog}
        />
      )} */}
    </div>
  );
};

export default App;
