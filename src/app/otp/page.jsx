"use client";
import Chevron from "@/customSvgs/Chevron";
import SmallSparkle from "@/customSvgs/SmallSparkle";
import { phone } from "@/reducers/authenticationSlice";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import OTPInput from "react-otp-input";
import { useSelector } from "react-redux";
import styles from "./otp.module.css";
import CountdownTimer from "./component/CountdownTimer";
import { UseFormatPhoneNumberOTP } from "@/hook/FormatPhoneNumber";
import RotateLeft from "@/customSvgs/RotateLeft";
const OtpPage = () => {
  const [otp, setOtp] = useState(""),
    phoneNumber = useSelector(phone),
    [duration, setDuration] = useState(120),
    [waiting, setWaiting] = useState(true),
    router = useRouter(),
    waitingSendCodeHandler = () => {
      setDuration(120);
      setTimeout(() => {
        setDuration(0);
        setWaiting(false);
      }, 120000);
    };
  useEffect(() => {
    waitingSendCodeHandler();
  }, [waiting]);
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
        <h1 className="mt-[34px] text-[30px]">Enter code</h1>
        <p className="w-[322px] text-left text-base opacity-70">
          We’ve sent an SMS with an activation code to your phone{" "}
          {UseFormatPhoneNumberOTP(phoneNumber) || ""}
        </p>
        <Formik
          initialValues={{
            otpCode: "",
          }}
          onSubmit={(values) => {}}
        >
          {({}) => (
            <Form>
              <div className="flex flex-col">
                <OTPInput
                  value={otp}
                  onChange={setOtp}
                  numInputs={5}
                  inputMode="numeric"
                  renderSeparator={<span></span>}
                  renderInput={(props) => (
                    <input inputMode="numeric" {...props} />
                  )}
                  containerStyle={`${styles.otpcontainer}`}
                />

                <Field type="hidden" id="otpCode" name="otpCode" />
                <div className="w-full">
                  <ErrorMessage
                    name="otpCode"
                    render={(msg) => (
                      <span className="mt-3 w-full !text-center text-[16px] text-red-500">
                        {msg}
                      </span>
                    )}
                  />
                </div>
                {waiting ? (
                  <h5 className="mt-16 flex w-full items-center justify-center gap-2">
                    <p className="text-[16px] font-semibold opacity-70">
                      Send code again
                    </p>
                    <CountdownTimer duration={duration} />
                  </h5>
                ) : (
                  <button
                    onClick={() => {
                      setWaiting(true);
                      setDuration(120);
                    }}
                    className="mt-16 flex w-full items-center justify-center gap-2 text-[16px] font-semibold opacity-70"
                  >
                    <RotateLeft />
                    Resend
                  </button>
                )}
                <button
                  className="mt-5 h-14 w-full rounded-lg bg-black text-white"
                  type="submit"
                >
                  Continue
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </section>
  );
};

export default OtpPage;
