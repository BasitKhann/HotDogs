import React, { useState, useEffect } from "react";

const HotdogEditor = ({ onSave, onCancel, hotdog = {} }) => {
  const [name, setName] = useState(hotdog.name || "");
  const [location, setLocation] = useState(hotdog.location || "");
  const [photo, setPhoto] = useState(hotdog.photo || "");
  const [rating, setRating] = useState(hotdog.rating || "");

  return (
    <form>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="location">Location:</label>
            <input
              type="text"
              id="location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
          </div>
        </div>
        <div className="col-md-6">
          <label htmlFor="photo">Photo:</label>
          <input
            type="text"
            id="photo"
            value={photo}
            onChange={(e) => setPhoto(e.target.value)}
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="rating">Rating:</label>
          <input
            type="number"
            id="rating"
            value={rating}
            onChange={(e) => setRating(e.target.value)}
          />
        </div>
      </div>
      <button type="button" onClick={onCancel}>
        Cancel
      </button>
      <button
        type="button"
        onClick={() =>
          onSave({
            name,
            location,
            photo,
            rating: Number(rating),
          })
        }
      >
        Save
      </button>
    </form>
  );
};

export default HotdogEditor;
