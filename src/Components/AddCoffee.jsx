import React from "react";
import Swal from "sweetalert2";

const AddCoffee = () => {
  const handelAddCoffee = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const newCoffee = Object.fromEntries(formData.entries());
    console.log(newCoffee);
    // const name = form.name.value;
    // const chef = form.chef.value;
    // const supplier = form.supplier.value;
    // const taste = form.taste.value;
    // const category = form.category.value;
    // const details = form.details.value;
    // const photo = form.photo.value;

    // send coffee data to db
    fetch("http://localhost:3000/coffees", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            title: " Coffee Added Successfully!",
            icon: "success",
            draggable: true,
          });
          // form.reset();
        }
      });
  };
  return (
    <>
      <div className="p-24 bg-[#F4F3F0]">
        <div className="flex flex-col justify-center items-center gap-5">
          <h1 className=" text-7xl">Add New Coffee</h1>
          <p className="w-[700px] text-center">
            It is a long established fact that a reader will be distraceted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using Content here.
          </p>
        </div>
        <form onSubmit={handelAddCoffee}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <fieldset className="fieldset border-base-300 rounded-box border p-4">
              <label className="label">Name</label>
              <input
                name="name"
                type="text"
                className="input w-full"
                placeholder="Enter coffee name"
              />
            </fieldset>
            <fieldset className="fieldset border-base-300 rounded-box border p-4">
              <label className="label">Chef</label>
              <input
                name="chef"
                type="text"
                className="input w-full"
                placeholder="Enter coffee chef"
              />
            </fieldset>
            <fieldset className="fieldset border-base-300 rounded-box border p-4">
              <label className="label">Supplier</label>
              <input
                name="supplier"
                type="text"
                className="input w-full"
                placeholder="Enter coffee supplier"
              />
            </fieldset>
            <fieldset className="fieldset border-base-300 rounded-box border p-4">
              <label className="label">Taste</label>
              <input
                name="taste"
                type="text"
                className="input w-full"
                placeholder="Enter coffee taste"
              />
            </fieldset>
            <fieldset className="fieldset border-base-300 rounded-box border p-4">
              <label className="label">Price</label>
              <input
                name="price"
                type="text"
                className="input w-full"
                placeholder="Price per cup"
              />
            </fieldset>
            <fieldset className="fieldset border-base-300 rounded-box border p-4">
              <label className="label">Details</label>
              <input
                name="details"
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
              type="text"
              className="input w-full"
              placeholder="Enter photo URL"
            />
          </fieldset>
          <input type="submit" className="btn w-full" value="Add Coffee" />
        </form>
      </div>
    </>
  );
};

export default AddCoffee;
