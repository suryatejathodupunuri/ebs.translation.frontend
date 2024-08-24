import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="fixed bottom-0 w-full text-1xl font-bold text-black-800 bg-gray-100 border border-gray-300  text-center shadow-lg">
        <small>
          {new Date().getFullYear()} |<a href="https://ebhashasetu.com/" target="_blank" rel="noopener noreferrer"> Ebhasha Setu Language Services Pvt Ltd | All Rights Reserved</a>
        </small>
      </footer>
    </div>
  );
};

export default Footer;