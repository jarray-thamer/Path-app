import { useState } from "react";
import OtherIssuePopup from "./components/popups/OtherIssuePopup";

const Test = () => {
  const [showPopup, setShowPopup] = useState(true);

  const toggleShowPopup = () => {
    setShowPopup(!showPopup);
  };

  return (
    <div
      style={{ border: "1px solid red" }}
      className="relative flex flex-col items-center h-lvh w-lvw max-w-96 mx-auto"
    >
      Hello this is test page
      {/* Popup container */}
      {showPopup && (
        <div
          onClick={toggleShowPopup}
          className="absolute bg-black bg-opacity-80 w-screen max-w-96 h-lvh"
        >
          <div className=" opacity-100 absolute top-44">
            <OtherIssuePopup toggleShowPopup={toggleShowPopup} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Test;
