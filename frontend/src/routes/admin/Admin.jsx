/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { useAuth } from "../../context/UserContext";
import axios from "axios";
import { Link } from "react-router-dom";

const Admin = () => {
  const auth = useAuth();
  const [userData, setUSerData] = useState([]);
  const clientPath = ["Client", "Portfolio", "Pricing", "Payment", "done"];
  const portfolioPath = ["Portfolio", "Client", "Pricing", "Payment", "done"];
  const pricePath = ["Pricing", "Portfolio", "Payment", "Client", "done"];
  const paymentPath = ["Payment", "Pricing", "Client", "Portfolio", "done"];

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const result = await axios("http://localhost:5555/get-all-users");
      //console.log(result.data);
      setUSerData(result.data);
    } catch (err) {
      console.log("something Wrong");
    }
  };

  const deleteUser = (userId) => {
    console.log(userId);
    axios.delete("http://localhost:5555/delete", userId);
  };

  return (
    <div className="container mx-auto px-4 mt-8">
      <table className="table-auto min-w-full border-collapse font-sans">
        <thead>
          <tr className="bg-gray-200 border-b text-center text-gray-600 dark:bg-gray-700 dark:text-gray-400">
            <th className="px-4 py-3">Id</th>
            <th className="px-4 py-3">Full Name</th>
            <th className="px-4 py-3">Email</th>
            <th className="px-4 py-3">Role </th>
            <th className="px-4 py-3">Path </th>
            <th className="px-4 py-3">Current Stand</th>
            <th className="px-4 py-3">Edit</th>
          </tr>
        </thead>
        <tbody>
          {userData.map((user, i) => (
            <tr
              key={i}
              className="border-b text-center text-gray-600 dark:bg-gray-800 dark:text-gray-400"
            >
              <td>{user.id}</td>
              <td>{user.full_name} </td>
              <td>{user.email} </td>
              <td>{user.role} </td>
              <td>{user.path} </td>
              <td>
                {user.path === "client"
                  ? clientPath[user.current_stand]
                  : user.path === "portfolio"
                  ? portfolioPath[user.current_stand]
                  : user.path === "payment"
                  ? paymentPath[user.current_stand]
                  : pricePath[user.current_stand]}
              </td>
              <td>
                <button
                  onClick={async () => {
                    const id = user.id;
                    await axios.delete("http://localhost:5555/delete", {
                      data: { id },
                    });
                    fetchData();
                  }}
                  style={{ border: "1px solid red" }}
                  className="my-3 text-red-500 font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-opacity-50 hover:bg-red-700"
                >
                  Delete User
                </button>
                <button
                  onClick={async () => {
                    const id = user.id;
                    console.log(id);
                    await axios.put("http://localhost:5555/updatetoadmin", {
                      data: { id },
                    });
                    fetchData();
                  }}
                  style={{ border: "3px solid #00FFFF" }}
                  className="mx-5 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50 hover:bg-blue-700"
                >
                  Set Admin
                </button>
                <button
                  onClick={async () => {
                    const id = user.id;
                    console.log(id);
                    await axios.put("http://localhost:5555/nextstand", {
                      id,
                    });
                    fetchData();
                  }}
                  className="  bg-green-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-opacity-50 hover:bg-green-700"
                >
                  Next stand
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Admin;
