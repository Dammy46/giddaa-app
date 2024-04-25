import React from "react";
import { ToastContainer } from "react-toastify";

const ToastProvider = ({ children }) => {
  return (
    <>
      {children}
      <ToastContainer />
    </>
  );
};

export default ToastProvider;
