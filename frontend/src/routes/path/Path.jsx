/* eslint-disable no-unused-vars */
import { useAuth } from "../../context/UserContext";
import { checkAuthStatus } from "../../helpers/api-communicators";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import SingleStand from "./SingleStand";
import CongratsPopup from "../../components/popups/CongratsPopup";
import axios from "axios";

const Path = () => {
  const auth = useAuth();
  const [userPath, setUserPath] = useState([]);
  const [showPopup, setShowPopup] = useState(false);
  const [userInfo, setUserInfo] = useState(null);
  const params = useParams();
  const [id, setId] = useState(params?.id);

  const toggleShowPopup = () => {
    setShowPopup(!showPopup);
  };

  const Capitalize = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  const navigate = useNavigate();

  const setPath = (UserChoice) => {
    if (UserChoice == "payment") {
      setUserPath(["Payment", "Pricing", "Client", "Portfolio"]);
    }
    if (UserChoice == "price") {
      setUserPath(["Pricing", "Portfolio", "Payment", "Client"]);
    }
    if (UserChoice == "portfolio") {
      setUserPath(["Portfolio", "Client", "Pricing", "Payment"]);
    }
    if (UserChoice == "client") {
      setUserPath(["Client", "Portfolio", "Pricing", "Payment"]);
      console.log(UserChoice, userPath);
    }
  };

  async function checkStatus() {
    const data = await checkAuthStatus();
    console.log(data);
    if (data.isUserLoggedIn) {
      setUserInfo(data.userData);
      console.log(userInfo);
      // setIsLoggedIn(true);

      if (data.userData.role === "admin") {
        navigate("/admin");
      } else {
        if (data.userData.choice === "") {
          navigate("/survey");
        } else {
          navigate(`/path/${data.userData.id}`);
        }
      }
    } else {
      navigate("/");
    }
  }

  useEffect(() => {
    checkStatus();
    if (!auth.user) {
      navigate("/");
    }
    const fetchData = async () => {
      try {
        if (!id) {
          console.error("Missing id parameter");
          return; // Or handle missing id elsewhere
        }

        console.log("params id", id);

        const result = await axios.delete("http://localhost:5555/getuserbyid", {
          data: { id },
        });

        setUserInfo(result.data[0]);
        console.log(userInfo.path);
        console.log(userInfo);

        setPath(userInfo.path);
      } catch (err) {
        console.error("Something went wrong:", err);
      }
    };

    const data = fetchData();
    console.log(data);

    // check if user completed his path
    if (auth.user.current_stand > 3) {
      setShowPopup(true);
    }
  }, []);

  return (
    userInfo && (
      <div
        className={
          "flex flex-col mx-auto w-screen h-screen p-5 max-w-96" +
          (showPopup ? "overflow-hidden" : "")
        }
      >
        {showPopup && (
          <div
            onClick={toggleShowPopup}
            className=" cursor-pointer overflow-hidden flex justify-center top-0 left-0 fixed bg-black bg-opacity-80 w-full h-full "
          >
            <div className=" cursor-default flex justify-center opacity-100 fixed top-72">
              <CongratsPopup />
            </div>
          </div>
        )}
        {/* User Information ID and FullName */}
        <div className="flex flex-col items-start w-full">
          <h1 className="w-fit text-lg font-bold" style={{ color: "#1F2429" }}>
            {auth.user.full_name}
          </h1>
          <h5 className="text-base opacity-70 font-medium">
            ID: {auth.user.id}
          </h5>
        </div>

        {/* Path container */}
        <button onClick={() => console.log(userInfo, userPath)}>
          Get info
        </button>
        <div className="flex flex-col-reverse items-center path w-full mt-6 h-fit ">
          {userPath.map((stand, index) => {
            if (index < auth.user.current_stand) {
              return (
                <div key={index}>
                  <SingleStand isDone={true} />
                </div>
              );
            }
            if (index > auth.user.current_stand) {
              return (
                <div key={index}>
                  <SingleStand isLocked={true} />
                </div>
              );
            }
            if (index === auth.user.current_stand) {
              return (
                <div key={index}>
                  <SingleStand level={index + 1} topic={userPath[index]} />
                </div>
              );
            }
          })}
        </div>
      </div>
    )
  );
};

export default Path;
