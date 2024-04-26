"use client";
import ApiUrl from "@/app/url-lib/api-url";
import axios from "axios";
import React, { useEffect, useState } from "react";

export default function AddProduct() {
  const [message, setMessage] = useState(null);
  const [user, setUser] = useState(null)

  useEffect(() => {
    if (typeof window !== "undefined") {
      let username = localStorage.getItem("username");
      setUser(username)
    }
  }, []);

  const [productData, setProductData] = useState({
    product_name: "",
    description: "",
    price: "",
    brand: "",
    tag: "",
  });

  const handleChange = (event) => {
    setProductData({
      ...productData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const _formData2 = new FormData();
    _formData2.append("product_name", productData.product_name);
    _formData2.append("description", productData.description);
    _formData2.append("price", productData.price);
    _formData2.append("brand", productData.brand);
    _formData2.append("tag", productData.tag);
    _formData2.append("username", user);
    try {
      axios.post(ApiUrl.AddItem, _formData2).then((response) => {
        console.log(response);
        if (response.status === 201) {
          setMessage(response.data["message"]);
          setTimeout(() => {
            // window.location.reload();
            window.location.href = "/product";
          }, 3000);
        }
      });
      // console.log(_formData)
    } catch (err) {
      console.log("error in add item ", err);
    }
  };

  return (
    <div>
      {message && (
        <div className="flex justify-center px-2 py-2 text-green-600">
          Item added successfully
        </div>
      )}
      <div className="w-auto h-auto border mx-5 my-1 shadow-md shadow-gray-500">
        <h1 className="flex justify-center text-md px-3 py-3">Add Item</h1>
        <hr></hr>

        <form className="w-2xl mx-3 my-5">
          <div className="grid grid-cols-2 gap-8">
            <div className="relative z-0 w-full mb-5">
              <input
                type="text"
                name="product_name"
                id="product_name"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=""
                required
                onChange={handleChange}
                value={productData.product_name}
              />
              <label
                htmlFor="product_name"
                className="peer-focus:font-medium absolute text-sm text-gray-500 transform -translate-y-6 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 duration-300"
              >
                Product Name
              </label>
            </div>

            <div className="relative z-0 w-full mb-5">
              <input
                type="text"
                name="description"
                id="description"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=""
                required
                value={productData.description}
                onChange={handleChange}
              />
              <label
                htmlFor="description"
                className="peer-focus:font-medium absolute text-sm text-gray-500 transform -translate-y-6 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 duration-300"
              >
                Description
              </label>
            </div>
            <div className="relative z-0 w-full mb-5">
              <input
                type="text"
                name="price"
                id="price"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=""
                required
                value={productData.price}
                onChange={handleChange}
              />
              <label
                htmlFor="price"
                className="peer-focus:font-medium absolute text-sm text-gray-500 transform -translate-y-6 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 duration-300"
              >
                Price
              </label>
            </div>

            <div className="relative z-0 w-full mb-5">
              <input
                type="text"
                name="brand"
                id="brand"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=""
                required
                onChange={handleChange}
                value={productData.brand}
              />
              <label
                htmlFor="brand"
                className="peer-focus:font-medium absolute text-sm text-gray-500 transform -translate-y-6 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 duration-300"
              >
                Brand
              </label>
            </div>
            <div className="relative z-0 w-full mb-5">
              <input
                type="text"
                name="tag"
                id="tag"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=""
                required
                onChange={handleChange}
                value={productData.tag}
              />
              <label
                htmlFor="tag"
                className="peer-focus:font-medium absolute text-sm text-gray-500 transform -translate-y-6 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 duration-300"
              >
                Tag
              </label>
            </div>
          </div>

          <div className="flex justify-center m-5">
            <button
              type="button"
                onClick={handleSubmit}
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-28 px-5 py-2 text-center"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
