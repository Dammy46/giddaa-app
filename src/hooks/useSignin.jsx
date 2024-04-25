"use client";
import { useFormik } from "formik";
import React, { useState } from "react";
import * as Yup from "yup";
import { signIn } from "next-auth/react";
import { Bounce, toast } from "react-toastify";
import { useRouter } from "next/navigation";

const useSignin = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email address").required("Required"),
      password: Yup.string().required("Required"),
    }),
    onSubmit: async (values) => {
      setLoading(true);
      const result = await signIn("credentials", {
        redirect: false,
        ...values,
        callbackUrl: "/dashboard",
      });
      if (result.status === 200) {
        toast("signin successful", {
          type: "success",
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          theme: "light",
          transition: Bounce,
        });
        setLoading(false);
        router.push(result.url);
      } else {
        setLoading(false);
        toast("Unable to signin!", {
          type: "error",
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          theme: "light",
          transition: Bounce,
        });
      }
    },
  });
  return { formik, loading };
};

export default useSignin;
