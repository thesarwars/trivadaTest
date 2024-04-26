"use client";
import ApiUrl from "@/app/url-lib/api-url";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

export default function UserLogin() {
  const router = useRouter();
  const [userLogin, setUserLogin] = useState({
    username: "",
    password: "",
  });
  const [status, setStatus] = useState();

  const handleUser = (event) => {
    setUserLogin({
      ...userLogin,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const userData = new FormData();
    userData.append("username", userLogin.username);
    userData.append("password", userLogin.password);

    axios
      .post(ApiUrl.LogIn, userData)
      .then((response) => {
        console.log(response);
        if (response.status == 202) {
          localStorage.setItem("username", response.data.username);

          window.location.href = '/dashboard'
          // router.push('/items/all-items')
        }
      })
      .catch((error) => {
        setStatus(error.response.data.msg);
      });
  };

  console.log(status);

  useEffect(() => {
    const username = localStorage.getItem("username");
    if (username) {
      router.push("/dashboard");
    }
  });
  return (
    <section className="bg-gray-300 h-[873px]">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto">
        <div className="w-96 bg-white rounded shadow">
          <div className="p-8 space-y-6">
            <h1 className="flex items-center justify-center text-xl font-medium leading-tight tracking-tight text-gray-900">
              Sign In
            </h1>
            <h1 className="flex items-center justify-center text-sm font-regular leading-tight tracking-tight text-gray-900">
              Sign in with your regular account
            </h1>
            <form className="space-y-6" action="#" onSubmit={handleSubmit}>
              <div>
                <div className="relative z-0 w-full mb-5">
                  <input
                    type="text"
                    name="username"
                    id="username"
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=""
                    required
                    value={userLogin.username}
                    onChange={handleUser}
                  />
                  <label
                    htmlFor="email"
                    className="peer-focus:font-medium absolute text-sm text-gray-500 transform -translate-y-6 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 duration-300"
                  >
                    Username
                  </label>
                </div>
                <div className="relative z-0 w-full mb-5">
                  <input
                    type="password"
                    name="password"
                    id="password"
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=""
                    required
                    value={userLogin.password}
                    onChange={handleUser}
                  />
                  <label
                    htmlFor="password"
                    className="peer-focus:font-medium absolute text-sm text-gray-500 transform -translate-y-6 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 duration-300"
                  >
                    Password
                  </label>
                </div>
                <div className="flex justify-between">
                  <div className="flex items-center h-5">
                    <input
                      type="checkbox"
                      name="terms"
                      id="terms"
                      className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-gray-800"
                      placeholder=""
                    />
                    <div className="ml-3 text-sm">
                      <label
                        htmlFor="terms"
                        className="font-light text-gray-500"
                      >
                        Remember me
                      </label>
                    </div>
                  </div>
                  <a href="#" className="text-sm">
                    Forget Password
                  </a>
                </div>
                <button
                  type="submit"
                  className="my-4 w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                >
                  Sign In
                </button>
                <p className="text-sm font-sans text-gray-500">
                  Don&apos;t have an account?{" "}
                  <a
                    href="signup"
                    className="font-medium text-gray-800 hover:underline"
                  >
                    Register here
                  </a>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}