"use client";
import Image from "next/image";
import React from "react";
import Logo from "../../../public/assets/images/giddaa-logo.png";
import useSignin from "@/hooks/useSignin";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const PageWrap = () => {
  const { formik, loading } = useSignin();
  return (
    <div className="flex min-h-screen flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <Image
          src={Logo}
          alt="
        gidaa-logo"
          width={80}
          height={80}
          className="mx-auto"
        />
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Sign in to your account
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" onSubmit={formik.handleSubmit}>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Email address
            </label>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="block w-full rounded-md border-0 p-[1em] text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#335F32] sm:text-sm sm:leading-6"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
                disabled={loading}
              />
              {formik.touched.email && formik.errors.email ? (
                <div className="text-red-500 text-[14px]">
                  {formik.errors.email}
                </div>
              ) : null}
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="password"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Password
              </label>
              <div className="text-sm">
                <a
                  href="#"
                  className="font-semibold text-[#335F32] hover:text-[#335F32]"
                >
                  Forgot password?
                </a>
              </div>
            </div>
            <div className="mt-2">
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="block w-full rounded-md border-0 p-[1em] text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#335F32] sm:text-sm sm:leading-6"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.password}
                disabled={loading}
              />
              {formik.touched.password && formik.errors.password ? (
                <div className="text-red-500 text-[14px]">
                  {formik.errors.password}
                </div>
              ) : null}
            </div>
          </div>

          <div>
            <button
              disabled={loading}
              type="submit"
              className={`flex w-full justify-center rounded-md bg-[#335F32] px-3 p-[1em] text-sm font-semibold leading-6 text-white shadow-sm hover:bg-[#335F32] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#335F32] ${
                loading ? "opacity-[.5]" : "opacity-100"
              }`}
            >
              {loading ? "Please wait.." : " Sign in"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PageWrap;
