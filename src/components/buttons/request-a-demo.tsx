"use client";

import { useState } from "react";
import SupportModal from "@/components/supportModal";

export default function RequestADemoButton({
  label = "Request a Demo",
  gradient = false,
}: {
  label?: string;
  gradient?: boolean;
}) {
  const [openContactModal, setOpenContactModal] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpenContactModal(true)}
        className={`${
          gradient ? "gradient-bg p-4 px-6" : "bg-secondary-500 p-3 px-5"
        }  rounded-3xl w-fit text-white hover:bg-primary-500 transition-all cursor-pointer whitespace-nowrap`}
      >
        {label}
      </button>
      <SupportModal
        openModal={openContactModal}
        setOpenModal={setOpenContactModal}
      />
    </>
  );
}
