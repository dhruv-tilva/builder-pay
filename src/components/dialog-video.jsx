import React, { useEffect } from "react";

export const DialogVideo = ({ isOpen, onClose, children }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "visible";
    }

    return () => {
      document.body.style.overflow = "visible";
    };
  }, [isOpen]);
  return (
    <div className={`dialog ${isOpen ? "open-dialog" : ""}`}>
      <div className="overlay" onClick={onClose}></div>
      <div className="content bg-white">{children}</div>
    </div>
  );
};
