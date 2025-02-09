import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const Whatsaapbtn = () => {
  const phoneNumber = "919340610359"; // Replace with your WhatsApp number
  const message = "Hello, I need assistance."; // Optional predefined message

  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 z-60 right-5 bg-green-500 text-white p-2 rounded-full shadow-lg hover:scale-110 transition-transform duration-300 flex items-center justify-center"
    >
      <FaWhatsapp size={32} />
    </a>
  );
};

export default Whatsaapbtn;
