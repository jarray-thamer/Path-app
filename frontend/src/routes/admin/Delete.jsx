/* eslint-disable react/prop-types */
import { useState } from "react";
import { useParams } from "react-router-dom";

const DeleteUser = () => {
  const [showConfirm, setShowConfirm] = useState(false);
  const params = useParams();
  const [userId, setUserID] = useState();
  setUserID(params.id);

  const handleDelete = async () => {
    if (window.confirm(`Are you sure you want to delete user ${userId}?`)) {
      // Replace with your actual API call implementation
      const response = await fetch(
        `http://localhost:5555/delete/users/${userId}`,
        {
          method: "DELETE",
        }
      );

      if (response.ok) {
        // Handle successful deletion, e.g., update state or UI
        alert(`User ${userId} deleted successfully.`);
      } else {
        // Handle error, e.g., display error message
        alert(`Error deleting user: ${response.statusText}`);
      }
    }
  };

  return (
    <>
      {!showConfirm && (
        <button
          onClick={() => setShowConfirm(true)}
          className="bg-red-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-opacity-50 hover:bg-red-700"
        >
          Delete User
        </button>
      )}
      {showConfirm && (
        <div className="flex justify-center items-center">
          <button
            onClick={handleDelete}
            className="bg-red-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-opacity-50 hover:bg-red-700"
          >
            Confirm Delete
          </button>
          <button
            onClick={() => setShowConfirm(false)}
            className="bg-gray-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-gray-600 focus:ring-opacity-50 hover:bg-gray-700 ml-2"
          >
            Cancel
          </button>
        </div>
      )}
    </>
  );
};

export default DeleteUser;
