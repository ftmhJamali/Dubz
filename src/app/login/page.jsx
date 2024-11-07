"use client";
import Chevron from "@/customSvgs/Chevron";
import SmallSparkle from "@/customSvgs/SmallSparkle";
import { setPhoneNumber } from "@/reducers/authenticationSlice";
import { LoginValidationSchema } from "@/validation/LoginValidationSchema";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { useRouter } from "next/navigation";
import React, { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";

import { UseFormatPhoneNumberLogin } from "@/hook/FormatPhoneNumber";

const Login = () => {
  const inputRef = useRef(),
    dispatch = useDispatch(),
    router = useRouter();
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  });
  return (
    <section className="flex w-full flex-col items-center justify-center">
      <div className="flex w-[373px] flex-col gap-3 px-6 py-6 md:px-0 md:py-12">
        <div className="flex w-full items-center justify-between">
          <button
            className="flex size-9 items-center justify-center rounded-xl border border-[#D8DADC]"
            onClick={() => {
              router.back();
            }}
          >
            <Chevron />
          </button>
          <SmallSparkle />
        </div>
        <h1 className="mt-[34px] text-[30px]">Log in</h1>
        <p className="w-[322px] text-left text-base opacity-70">
          Please confirm your country code and enter your phone number.
        </p>
        <Formik
          initialValues={{
            mobile: "",
          }}
          validationSchema={LoginValidationSchema}
          onSubmit={(values) => {
            const rawPhone = values.mobile.replace(/\D/g, "");
            const countryCode = "+98";
            const phoneNumber = [countryCode, rawPhone].join("");
            dispatch(setPhoneNumber(phoneNumber));
            router.push("/otp");
          }}
        >
          {({ setFieldValue, values, errors, touched }) => (
            <Form className="flex w-full flex-col">
              <div
                className={`mt-3 flex gap-3 border-b border-solid border-[#D8DADC] py-3 ${
                  errors.mobile && touched.mobile ? "border-red-500" : ""
                }`}
              >
                <span>+98</span>
                <span className="text-[#D8DADC]">|</span>
                <Field
                  className="border-none opacity-50 outline-none focus:border-none"
                  type="text"
                  inputMode="numeric"
                  id="mobile"
                  name="mobile"
                  autoComplete="off"
                  placeholder="000 000 0000"
                  ref={inputRef}
                  maxLength="10"
                  onChange={(e) => setFieldValue("mobile", e.target.value)}
                  value={UseFormatPhoneNumberLogin(values.mobile) || ""}
                />
              </div>
              <ErrorMessage
                name="mobile"
                render={(msg) => (
                  <span className="mt-3 w-full !text-center text-[16px] text-red-500">
                    {msg}
                  </span>
                )}
              />
              <div className="mb-3 mt-7 flex w-full justify-between py-5 md:mt-32">
                <p className="text-[16px]">Sync Contacts</p>
                <div className="flex items-center">
                  <label
                    htmlFor="toggler"
                    className="flex cursor-pointer items-center"
                  >
                    <div className="relative">
                      <input
                        type="checkbox"
                        id="toggler"
                        className="peer sr-only checked:[&span]:translate-x-96 checked:[&span]:bg-white"
                      />

                      <div className="block h-8 w-14 rounded-full bg-black"></div>

                      <span className="dot absolute left-1 top-1 h-6 w-6 rounded-full bg-white transition peer-checked:translate-x-full"></span>
                    </div>

                    <div className="ml-3 font-medium text-gray-700"></div>
                  </label>
                </div>
              </div>
              <button
                className="h-14 w-full rounded-lg bg-black text-white"
                type="submit"
              >
                Continue
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </section>
  );
};

export default Login;
