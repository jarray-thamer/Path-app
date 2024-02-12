import React from "react";

const DoneStand = () => {
  return (
    <div className="h-20 w-20 flex justify-center items-center bg-no-repeat bg-contain bg-standpurple">
      <h1
        style={{ fontSize: "32px" }}
        className="mr-2 text-white font-extrabold"
      >
        <svg
          width="30"
          height="28"
          viewBox="0 0 30 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3 15.25L10.4286 24L27 3"
            stroke="white"
            strokeWidth="5"
            strokeLinecap="round"
          />
        </svg>
      </h1>
    </div>
  );
};

export default DoneStand;
