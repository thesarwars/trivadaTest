import React from "react";
import Tablehead from "./tablehead";
import Image from "next/image";
import sampleImage from '../../public/next.svg'

export default function Product() {
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-5 mx-5">
      <table className="w-full align-middle text-sm text-left text-gray-500 dark:text-gray-400 table-fixed mx-5">
        <thead className="text-xs text-gray-700 bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <Tablehead />
        </thead>
        {/* <Suspense fallback={<Loading/>}> */}

        <tbody>
          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
            <td className="p-4 w-2">
              <div className="flex items-center">
                <input
                  id="checkbox-table-search-1"
                  type="checkbox"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label htmlFor="checkbox-table-search-1" className="sr-only">
                  checkbox
                </label>
              </div>
            </td>

            <th
              scope="row"
              className="pe-2 font-medium whitespace-nowrap text-white"
            >
              <Image src={sampleImage} alt="product image" width={60} height={40} />
            </th>
            <th scope="row" className="text-xs text-white">
              Name
            </th>
            <th scope="row" className="text-xs text-white">
              Description
            </th>
            <th scope="row" className="text-xs w-44">
              <a
                href="#"
                target="_blank"
                className="hover:text-blue-900 text-white"
              >
                Price
              </a>
            </th>
            <th scope="row" className="w-20 px-2 text-white">
              Brand
            </th>
            <th scope="row" className="w-20 px-2 text-white">
              Tag
            </th>
            <th scope="row" className="w-20 px-2 text-white">
              Edit / Remove
            </th>
          </tr>
          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
            <td className="p-4 w-2">
              <div className="flex items-center">
                <input
                  id="checkbox-table-search-1"
                  type="checkbox"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label htmlFor="checkbox-table-search-1" className="sr-only">
                  checkbox
                </label>
              </div>
            </td>

            <th
              scope="row"
              className="pe-2 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              <Image src={sampleImage} alt="product image" width={60} height={40} />
            </th>
            <th scope="row" className="text-xs text-white">
              Name
            </th>
            <th scope="row" className="text-xs text-white">
              Description
            </th>
            <th scope="row" className="text-xs w-44">
              <a
                href="#"
                target="_blank"
                className="hover:text-blue-900 text-white"
              >
                Price
              </a>
            </th>
            <th scope="row" className="w-20 px-2 text-white">
              Brand
            </th>
            <th scope="row" className="w-20 px-2 text-white">
              Tag
            </th>
            <th scope="row" className="w-20 px-2 text-white">
              Edit / Remove
            </th>
          </tr>
          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
            <td className="p-4 w-2">
              <div className="flex items-center">
                <input
                  id="checkbox-table-search-1"
                  type="checkbox"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label htmlFor="checkbox-table-search-1" className="sr-only">
                  checkbox
                </label>
              </div>
            </td>

            <th
              scope="row"
              className="pe-2 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              <Image src={sampleImage} alt="product image" width={60} height={40} />
            </th>
            <th scope="row" className="text-xs text-white">
              Name
            </th>
            <th scope="row" className="text-xs text-white">
              Description
            </th>
            <th scope="row" className="text-xs w-44">
              <a
                href="#"
                target="_blank"
                className="hover:text-blue-900 text-white"
              >
                Price
              </a>
            </th>
            <th scope="row" className="w-20 px-2 text-white">
              Brand
            </th>
            <th scope="row" className="w-20 px-2 text-white">
              Tag
            </th>
            <th scope="row" className="w-20 px-2 text-white">
              Edit / Remove
            </th>
          </tr>
          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
            <td className="p-4 w-2">
              <div className="flex items-center">
                <input
                  id="checkbox-table-search-1"
                  type="checkbox"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label htmlFor="checkbox-table-search-1" className="sr-only">
                  checkbox
                </label>
              </div>
            </td>

            <th
              scope="row"
              className="pe-2 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              <Image src={sampleImage} alt="product image" width={60} height={40} />
            </th>
            <th scope="row" className="text-xs text-white">
              Name
            </th>
            <th scope="row" className="text-xs text-white">
              Description
            </th>
            <th scope="row" className="text-xs w-44">
              <a
                href="#"
                target="_blank"
                className="hover:text-blue-900 text-white"
              >
                Price
              </a>
            </th>
            <th scope="row" className="w-20 px-2 text-white">
              Brand
            </th>
            <th scope="row" className="w-20 px-2 text-white">
              Tag
            </th>
            <th scope="row" className="w-20 px-2 text-white">
              Edit / Remove
            </th>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
