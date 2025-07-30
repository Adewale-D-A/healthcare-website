"use client";

import React, { useCallback, useRef, useState } from "react";
import TextInput from "../textFields/input";
import TextAreaInput from "../textFields/textArea";
import SuccessModal from "./successMessage";
import emailjs from "@emailjs/browser";
import { Button } from "../buttons/button";
import { MailWarning } from "lucide-react";

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
            label="How can we help?"
            placeholder="Type message here"
          />
        </div>
        {errorMessage && (
          <div className=" text-red-500 text-center flex items-center justify-center gap-4">
            <MailWarning />
            <p>{errorMessage}</p>
          </div>
        )}
        <div className=" w-full flex justify-end">
          <Button
            type="submit"
            title="submit"
            className=" w-fit"
            isLoading={isSubmitting}
          >
            Submit message
          </Button>
        </div>
      </form>
      <SuccessModal
        openSuccessModal={openSuccess}
        setOpenSuccessModal={setOpenSuccess}
        closeMainModal={closeModal}
      />
    </>
  );
}
