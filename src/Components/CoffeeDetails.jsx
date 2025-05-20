import React from "react";
import { Link, useLoaderData } from "react-router";

const CoffeeDetails = () => {
  const coffee = useLoaderData();
  const { _id, photo, name, price, chef } = coffee;
  console.log(coffee);
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
            <Link to="/">
              <button className="btn join-item">Home</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default CoffeeDetails;
