/* eslint-disable react/prop-types */

const Stand = ({ level, topic }) => {
  return (
    <div className="flex flex-row items-center">
      <h4 style={{ color: "#3F3D56" }} className="font-bold text-base mx-3">
        {topic}
      </h4>
      <div className="h-20 w-20 flex justify-center items-center bg-no-repeat bg-contain bg-standgreen">
        <h1
          style={{ fontSize: "32px" }}
          className="mr-2 text-white font-extrabold"
        >
          {level}
        </h1>
      </div>
    </div>
  );
};

export default Stand;
