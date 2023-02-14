import React, { useState, useEffect } from "react";
import "./HotdogListing.css";

const HotdogListing = ({ name, location, photo, rating, onEdit, onDelete }) => {
  return (
    <div className="card">
      <img className="card-img-top" src={photo} alt={name} />
      <div className="card-body">
        <div className="card--header">
          <h5 className="card-title">{name}</h5>

          <div>
            <span className="location">Location: </span>
            <span className="card-text">{location}</span>
          </div>
        </div>
        <div className="rating"></div>
      </div>
      <div className="card-footer">
        {onEdit && (
          <button className="btn btn-sm btn-outline-info mb-2" onClick={onEdit}>
            Edit
          </button>
        )}
        {onDelete && (
          <button className="btn btn-sm btn-outline-danger" onClick={onDelete}>
            Delete
          </button>
        )}
      </div>
    </div>
  );
};

export default HotdogListing;
