import React, { useState } from "react";

const Card = ({
  title,
  description,
  detailedDescription,
  isOpen,
  onToggle,
}) => {
  const handleClose = () => {
    if (isOpen) {
      // Only toggle if it's currently open
      onToggle();
    }
  };

  return (
    <div
      className="full-shadow rounded-lg grid lg:block h-fit m-2 p-2 lg:p-4"
      onMouseLeave={handleClose} // Added this line
    >
      <span className="grid text-xl text-hitam">{title}</span>
      <span className="grid py-2 lg:py-4 text-[#667085] text-base">
        {description}
      </span>
      <button
        className="flex justify-center items-center gap-2 bg-[#12B76A] px-3 py-2 rounded-lg"
        onClick={onToggle}
      >
        <span>
          <svg
            width="30px"
            height="30px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
              stroke="#ffffff"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
        <span className="text-white">Lihat details</span>
      </button>
      {isOpen && <p>{detailedDescription}</p>}
    </div>
  );
};

export default Card;
