import React from "react";

export default function AddProduct() {
  return (
    <div>
      <div className="w-auto h-auto border mx-5 my-1 shadow-md shadow-gray-500">
        <h1 className="flex justify-center text-md px-3 py-3">Add Item</h1>
        <hr></hr>

        <form className="w-2xl mx-3 my-5">
          <div className="grid grid-cols-2 gap-8">
            <div className="relative z-0 w-full mb-5">
              <input
                type="text"
                name="sku"
                id="sku"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=""
                required
                // onChange={handleChange}
                // value={productData.sku}
              />
              <label
                htmlFor="sku"
                className="peer-focus:font-medium absolute text-sm text-gray-500 transform -translate-y-6 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 duration-300"
              >
                Product Name
              </label>
            </div>

            <div className="relative z-0 w-full mb-5">
              <input
                type="text"
                name="handleTime"
                id="handleTime"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=""
                required
                // value={productData.handleTime}
                // onChange={handleChange}
              />
              <label
                htmlFor="handleTime"
                className="peer-focus:font-medium absolute text-sm text-gray-500 transform -translate-y-6 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 duration-300"
              >
                Description
              </label>
            </div>
            <div className="relative z-0 w-full mb-5">
              <input
                type="text"
                name="handleTime"
                id="handleTime"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=""
                required
                // value={productData.handleTime}
                // onChange={handleChange}
              />
              <label
                htmlFor="handleTime"
                className="peer-focus:font-medium absolute text-sm text-gray-500 transform -translate-y-6 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 duration-300"
              >
                Price
              </label>
            </div>

            <div className="relative z-0 w-full mb-5">
              <input
                type="text"
                name="shipCost"
                id="shipCost"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=""
                required
                // onChange={handleChange}
                // value={productData.shipCost}
              />
              <label
                htmlFor="shipCost"
                className="peer-focus:font-medium absolute text-sm text-gray-500 transform -translate-y-6 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 duration-300"
              >
                Brand
              </label>
            </div>
            <div className="relative z-0 w-full mb-5">
              <input
                type="text"
                name="shipCost"
                id="shipCost"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=""
                required
                // onChange={handleChange}
                // value={productData.shipCost}
              />
              <label
                htmlFor="shipCost"
                className="peer-focus:font-medium absolute text-sm text-gray-500 transform -translate-y-6 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 duration-300"
              >
                Tag
              </label>
            </div>
          </div>

          <div className="flex justify-center m-5">
            <button
              type="button"
              //   onClick={handleSubmit}
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
