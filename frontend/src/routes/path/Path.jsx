/* eslint-disable no-unused-vars */
import LockStand from "./LockStand";
import Stand from "./Stand";
import DoneStand from "./DoneStand";

const path = () => {
  return (
    <div
      style={{ border: "3px red solid" }}
      className="flex flex-col h-lvh w-lvw max-w-96 mx-auto p-4"
    >
      {/* User Information ID and FullName */}
      <div
        style={{ border: "3px green solid" }}
        className="flex flex-col items-start w-full"
      >
        <h1 className="w-fit text-lg font-bold" style={{ color: "#1F2429" }}>
          Thamer jarray
        </h1>
        <h5 className="text-base opacity-70 font-medium">ID: 1236</h5>
      </div>
      {/* Path container */}
      <div
        className="flex flex-col w-full mt-6 justify-between h-full"
        style={{ border: "3px blue solid" }}
      >
        <div
          className="flex justify-center ml-8"
          style={{ border: "3px pink solid" }}
        >
          <LockStand />
        </div>
        <div
          className="flex justify-start"
          style={{ border: "3px purple solid" }}
        >
          <LockStand />
        </div>
        <div
          className="flex justify-end "
          style={{ border: "3px orange solid" }}
        >
          <Stand level={"2"} topic={"Client"} />
        </div>
        <div
          className="flex justify-center mr-8 "
          style={{ border: "3px darkgreen solid" }}
        >
          <DoneStand />
        </div>
      </div>
    </div>
  );
};

export default path;
