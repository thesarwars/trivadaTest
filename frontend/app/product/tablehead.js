import React from "react";

export default function Tablehead() {
  return (
    <tr>
      <th scope="col" className="p-4 w-2">
        <div className="flex items-center">
          <input
            id="checkbox-all-search"
            type="checkbox"
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
          <label htmlFor="checkbox-all-search" className="sr-only">
            checkbox
          </label>
        </div>
      </th>
      <th scope="col" className="w-16">
        <div className="">Image</div>
      </th>
      <th scope="col" className="w-28">
        <div className="flex items-center">Name</div>
      </th>
      <th scope="col" className="w-24">
        <div className="flex items-center">Description</div>
      </th>
      <th scope="col" className="w-44">
        <div className="flex items-center">Price</div>
      </th>
      <th scope="col" className="w-44">
        <div className="flex items-center">Brand</div>
      </th>
      <th scope="col" className="w-44">
        <div className="flex items-center">Tag</div>
      </th>
      <th scope="col" className="w-44">
        <div className="flex items-center">Action</div>
      </th>
      
    </tr>
  );
}