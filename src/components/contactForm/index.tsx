"use client";

import React, { useCallback, useRef, useState } from "react";
import TextInput from "../textFields/input";
import TextAreaInput from "../textFields/textArea";
import SuccessModal from "./successMessage";
import emailjs from "@emailjs/browser";

export default function ContactForm({ closeModal }: { closeModal?: Function }) {
  const form = useRef() as any;

  const service_id = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "";
  const template_id = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "";
  const public_key = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "";

  const [fullname, setFullname] = useState("");
  const [company, setCompany] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const [openSuccess, setOpenSuccess] = useState(false);

  const submit = useCallback(
    async (e: React.SyntheticEvent) => {
      e.preventDefault();
      setIsSubmitting(true);
      setErrorMessage("");
      // const payload = {
      //   fullname: fullname,
      //   company: company,
      //   phone_number: phone,
      //   email: email,
      //   message: message,
      // };
      try {
        await emailjs.sendForm(
          service_id,
          template_id,
          form.current || "",
          public_key
        );
        setOpenSuccess(true);
        setFullname("");
        setCompany("");
        setPhone("");
        setEmail("");
        setMessage("");
      } catch (error) {
        setErrorMessage("please try again later");
      } finally {
        setIsSubmitting(false);
      }
    },
    [service_id, template_id, public_key, form]
  );

  return (
    <>
      <form ref={form} className=" flex flex-col gap-5" onSubmit={submit}>
        <div className=" w-full grid grid-cols-1 md:grid-cols-2 gap-5">
          {[
            {
              id: "fullname",
              label: "Full name",
              placeholder: "John Doe",
              type: "text",
              isRequired: true,
              state: fullname,
              setState: setFullname,
            },
            {
              id: "company",
              label: "Company name (optional)",
              placeholder: "John inc.",
              type: "text",
              isRequired: false,
              state: company,
              setState: setCompany,
            },
            {
              id: "phone_number",
              label: "Phone",
              placeholder: "000000000000000",
              type: "number",
              isRequired: true,
              state: phone,
              setState: setPhone,
            },
            {
              id: "email",
              label: "email",
              placeholder: "example@example.com",
              type: "email",
              isRequired: true,
              state: email,
              setState: setEmail,
            },
          ].map((item) => (
            <TextInput
              key={item?.id}
              name={item?.id}
              inputType={item?.type}
              value={item?.state}
              setValue={item?.setState}
              label={item?.label}
              placeholder={item?.placeholder}
              isRequired={item?.isRequired}
              id={item?.id}
            />
          ))}
        </div>
        <div className="w-full">
          <TextAreaInput
            value={message}
            name="message"
            setValue={setMessage}
            isRequired={true}
            id="message"
            label="Message"
            placeholder="Type message here"
          />
        </div>
        {errorMessage && (
          <div className=" text-red-500 text-center flex items-center justify-center gap-4">
            {" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z"
              />
            </svg>
            <p>{errorMessage}</p>
          </div>
        )}
        <button
          type="submit"
          title="submit"
          className=" bg-primary-500 text-white w-full p-4 rounded-lg text-center hover:bg-primary-500/80 transition-all"
        >
          {" "}
          {isSubmitting ? (
            <div className="w-full flex justify-center text-dark-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 animate-spin"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99"
                />
              </svg>
            </div>
          ) : (
            <span className="flex items-center justify-center gap-3 ">
              Submit
            </span>
          )}
        </button>
      </form>
      <SuccessModal
        openSuccessModal={openSuccess}
        setOpenSuccessModal={setOpenSuccess}
        closeMainModal={closeModal}
      />
    </>
  );
}
