const OtherIssuePopup = () => {
  return (
    <div className="fixed max-w-96 mx-4 rounded-xl bg-white items-center flex flex-col p-4">
      <img
        src="featuredIcon.png"
        className=" mb-3"
        width={"45px"}
        height={"44px"}
      />
      <img src="x-close.png" className="absolute right-5 cursor-pointer" />
      <h3
        className="text-center font-bold text-xl"
        style={{ color: "#101828" }}
      >
        Got another issue?
      </h3>
      <p
        style={{ color: "#2F2E41" }}
        className="text-center font-normal text-base"
      >
        Since your problem isn’t mentioned in the list, find the “1 to 1” stand
        and go have a chat with our friend there. They’ll help you.
      </p>
    </div>
  );
};

export default OtherIssuePopup;
