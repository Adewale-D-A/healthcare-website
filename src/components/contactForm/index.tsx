"use client";

import React, { useCallback, useState } from "react";
import TextInput from "../textFields/input";
import TextAreaInput from "../textFields/textArea";
import SuccessModal from "./successMessage";

export default function ContactForm() {
  const [fullname, setFullname] = useState("");
  const [company, setCompany] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [openSuccess, setOpenSuccess] = useState(false);

  const submit = useCallback((e: React.SyntheticEvent) => {
    e.preventDefault();
    setOpenSuccess(true);
    setFullname("");
    setCompany("");
    setPhone("");
    setEmail("");
    setMessage("");
  }, []);

  return (
    <>
      <form className=" flex flex-col gap-5" onSubmit={submit}>
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
              id: "phone",
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
            setValue={setMessage}
            isRequired={true}
            id="message"
            label="Message"
            placeholder="Type message here"
          />
        </div>
        <button
          type="submit"
          className=" bg-primary-500 text-white w-full p-4 rounded-lg text-center"
        >
          Submit
        </button>
      </form>
      <SuccessModal openModal={openSuccess} setOpenModal={setOpenSuccess} />
    </>
  );
}
