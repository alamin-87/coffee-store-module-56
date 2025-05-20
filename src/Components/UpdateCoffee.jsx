import React from "react";
import { useLoaderData } from "react-router";
import Swal from "sweetalert2";

const UpdateCoffee = () => {
  const { _id, name, chef, supplier, taste, details, photo, price } =
    useLoaderData();

  const handelUpdateCoffee = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const updatedCoffee = Object.fromEntries(formData.entries());
    console.log(updatedCoffee);

    // send updated coffee data
    fetch(`http://localhost:3000/coffees/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Coffee updated",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

  return (
    <>
      <div className="p-24 bg-[#F4F3F0]">
        <div className="flex flex-col justify-center items-center gap-5">
          <h1 className=" text-7xl">Update Coffee</h1>
        </div>
        <form onSubmit={handelUpdateCoffee}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <fieldset className="fieldset border-base-300 rounded-box border p-4">
              <label className="label">Name</label>
              <input
                name="name"
                defaultValue={name}
                type="text"
                className="input w-full"
                placeholder="Enter coffee name"
              />
            </fieldset>
            <fieldset className="fieldset border-base-300 rounded-box border p-4">
              <label className="label">Chef</label>
              <input
                name="chef"
                defaultValue={chef}
                type="text"
                className="input w-full"
                placeholder="Enter coffee chef"
              />
            </fieldset>
            <fieldset className="fieldset border-base-300 rounded-box border p-4">
              <label className="label">Supplier</label>
              <input
                name="supplier"
                defaultValue={supplier}
                type="text"
                className="input w-full"
                placeholder="Enter coffee supplier"
              />
            </fieldset>
            <fieldset className="fieldset border-base-300 rounded-box border p-4">
              <label className="label">Taste</label>
              <input
                name="taste"
                defaultValue={taste}
                type="text"
                className="input w-full"
                placeholder="Enter coffee taste"
              />
            </fieldset>
            <fieldset className="fieldset border-base-300 rounded-box border p-4">
              <label className="label">Price</label>
              <input
                name="price"
                defaultValue={price}
                type="text"
                className="input w-full"
                placeholder="Price per cup"
              />
            </fieldset>
            <fieldset className="fieldset border-base-300 rounded-box border p-4">
              <label className="label">Details</label>
              <input
                name="details"
                defaultValue={details}
                type="text"
                className="input w-full"
                placeholder="Enter coffee details"
              />
            </fieldset>
          </div>
          <fieldset className="fieldset border-base-300 rounded-box border p-4">
            <label className="label">Photo</label>
            <input
              name="photo"
              defaultValue={photo}
              type="text"
              className="input w-full"
              placeholder="Enter photo URL"
            />
          </fieldset>
          <input type="submit" className="btn w-full" value="Update Coffee" />
        </form>
      </div>
    </>
  );
};

export default UpdateCoffee;
