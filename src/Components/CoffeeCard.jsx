import React from "react";
import { Link } from "react-router";
import Swal from "sweetalert2";

const CoffeeCard = ({ coffee, coffees, setCoffees }) => {
  console.log(coffee);
  const { _id, photo, name, price, chef } = coffee;

  const handelDelete = (_id) => {
    console.log(_id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        // start deleting coffee
        fetch(`http://localhost:3000/coffees/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) {
              Swal.fire({
                title: "Deleted!",
                text: "Your Coffee has been deleted.",
                icon: "success",
              });
              // remove the coffee from the state
              const remainCoffees = coffees.filter((cof) => cof._id !== _id);
              setCoffees(remainCoffees);
            }
          });
      }
    });
  };
  return (
    <>
      <div className="card card-side bg-base-100 shadow-sm">
        <figure>
          <img src={photo} alt="Movie" />
        </figure>
        <div className="flex gap-30 items-center">
          <div>
            <h2 className="card-title">Name: {name}</h2>
            <p className="font-semibold">Chef: {chef} </p>
            <p className="font-semibold">Price: {price} </p>
          </div>
          <div className="join join-vertical space-y-3">
            <Link to={`/coffeeDetails/${_id}`}>
              <button className="btn join-item">View</button>
            </Link>
            <Link to={`/updateCoffee/${_id}`}>
              <button className="btn join-item">Edit</button>
            </Link>
            <button onClick={() => handelDelete(_id)} className="btn join-item">
              Delete
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CoffeeCard;
