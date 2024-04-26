"use client";
import React, { useEffect, useState } from "react";
import Tablehead from "./tablehead";
import Image from "next/image";
import sampleImage from "../../public/next.svg";
import axios from "axios";
import ApiUrl from "../url-lib/api-url";
import { useRouter } from "next/navigation";

export default function Product() {
  const [product, setProduct] = useState(null);
  const [user, setUser] = useState(null);
  const [isReload, setisReload] = useState(false)
  const router = useRouter();
  useEffect(() => {
    if (typeof window !== "undefined") {
      var username = localStorage.getItem("username");
      setUser(username);
    }
    axios.get(ApiUrl.GetData + username).then((response) => {
      // console.log(response.data.data);
      setProduct(response.data["data"]);
    });
  }, [isReload]);

  // console.log(product);
  const handleAdd = () => {
    router.push("/product/add-product");
  };

  const handleDelete = (product_id) => {
    // event.preventDefault();
    setisReload(false)
    console.log(user, product_id);
    axios
      .delete(ApiUrl.DeleteItem + user + "," + product_id)
      .then((response) => {
        setisReload(true)
        console.log(response.data["message"]);
      });
  };
  return (
    <>
      <div className="flex items-end justify-end m-5">
        <div className="border-blue-600 border items-center flex justify-center w-32 px-2 py-1 bg-blue-600 text-white rounded-md">
          <button type="button" onClick={handleAdd}>
            Add Product
          </button>
        </div>
      </div>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-5 mx-5">
        <table className="w-full align-middle text-sm text-left text-gray-500 dark:text-gray-400 table-fixed mx-5">
          <thead className="text-xs text-gray-700 bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <Tablehead />
          </thead>
          {/* <Suspense fallback={<Loading/>}> */}

          <tbody>
            {product?.length > 0 &&
              product?.map((item, id) => (
                <tr
                  key={id}
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                >
                  <td className="p-4 w-2">
                    <div className="flex items-center">
                      <input
                        id="checkbox-table-search-1"
                        type="checkbox"
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      />
                      <label
                        htmlFor="checkbox-table-search-1"
                        className="sr-only"
                      >
                        checkbox
                      </label>
                    </div>
                  </td>

                  <th
                    scope="row"
                    className="pe-2 font-medium whitespace-nowrap text-white"
                  >
                    <Image
                      src={sampleImage}
                      alt="product image"
                      width={60}
                      height={40}
                    />
                  </th>
                  <th scope="row" className="text-xs text-white">
                    {item.product_name}
                  </th>
                  <th scope="row" className="text-xs text-white">
                    {item.description}
                  </th>
                  <th scope="row" className="text-xs w-44">
                    <a
                      href="#"
                      target="_blank"
                      className="hover:text-blue-900 text-white"
                    >
                      {item.price}
                    </a>
                  </th>
                  <th scope="row" className="w-20 px-2 text-white">
                    {item.brand}
                  </th>
                  <th scope="row" className="w-20 px-2 text-white">
                    {item.tag}
                  </th>
                  <th
                    scope="row"
                    className="w-20 px-2 text-white flex ms-3 mt-3"
                  >
                    <div>
                      <button>Edit</button>
                    </div>{" "}
                    &nbsp;&nbsp;&nbsp;
                    <div>
                      <button onClick={() => handleDelete(item.id)}>
                        Remove
                      </button>
                    </div>
                  </th>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
