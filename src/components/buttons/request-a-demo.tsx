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
          gradient ? "gradient-bg" : "bg-secondary-500"
        }  rounded-3xl w-fit p-3 px-10 text-white transition-all text-sm cursor-pointer whitespace-nowrap hover:scale-105`}
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
