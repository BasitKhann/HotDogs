import React, { useState } from "react";

const Modal = ({ children, toggleModal, isModalOpen }) => {
  return (
    <>
      {/* <button onClick={toggleModal}>Open Modal</button> */}
      {isModalOpen && (
        <div
          style={{
            position: "fixed",
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            background: "rgba(0,0,0,0.8)",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              background: "#fff",
              padding: "1rem",
            }}
          >
            <div
              className="text-end"
              style={{ cursor: "pointer" }}
              onClick={toggleModal}
            >
              X
            </div>
            {/* <i class="fa-light fa-xmark" onClick={toggleModal}></i> */}
            {children}
            <div
              className="col card-footer"
              style={{ display: "flex", flexDirection: "column" }}
            >
              <button type="submit" class="btn btn btn-outline-info mt-3">
                Submit
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
