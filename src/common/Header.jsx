import React from "react";

const Header = () => {
  return (
    <div
      className="container-fluid fixed-top"
      style={{
        backgroundColor: "rgb(240 157 13 / 31%)",
        backdropFilter: "blur(35px)",
      }}
    >
      <div className="container">
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container" style={{ padding: "0 75px" }}>
            <a className="navbar-brand" href="#">
              HotDogsListing App
            </a>
            <a href="#">Login</a>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Header;
