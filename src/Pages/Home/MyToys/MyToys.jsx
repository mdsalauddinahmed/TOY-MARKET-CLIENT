import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import SingleToy from "../../AllToys/SingleToy";
import MySingleToysROw from "./MySingleToysROw";

const MyToys = () => {
  const { user } = useContext(AuthContext);
  const [toys, setToys] = useState([]);
  const url = `http://localhost:5000/myToys?email=${user?.email}`;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setToys(data));
  }, [url]);
  const handleDelete = (id) => {
    const proceed = confirm("Are you sure you want to delete");
    if (proceed) {
      fetch(`http://localhost:5000/myToys/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount > 0) {
            alert("deleted successful");
            const remaining = toys.filter((toy) => toy._id !== id);
            setToys(remaining);
          }
        });
    }
  };

  return (
    <div className="bg-indigo-800 py-5">
      <div className="max-w-7xl mx-auto bg-indigo-800 py-5">
        <h1 className="text-4xl text-center text-white font-bold my-12">
          Hello, {user?.displayName}.This your Doll Toy Shop
        </h1>

        <div className="overflow-x-auto w-full">
          <table className="table w-full">
            {/* head */}
            <thead>
              <tr>
                <th>Delete</th>
                <th>Picture</th>
                <th>Toy Name</th>
                <th>Sub-category</th>
                <th>Price</th>
                <th>Available Quantity</th>
                <th>Seller Name</th>
                <th>Update</th>
                <th>See Details</th>
              </tr>
            </thead>
            <tbody>
              {toys.map((toy) => (
                <MySingleToysROw
                  handleDelete={handleDelete}
                  toy={toy}
                  key={toy._id}
                ></MySingleToysROw>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyToys;
