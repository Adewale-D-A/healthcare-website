"use client";

import { useState } from "react";
import SupportModal from "@/components/supportModal";

export default function RequestADemoButton() {
  const [openContactModal, setOpenContactModal] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpenContactModal(true)}
        className="bg-secondary-500 p-3 px-5 rounded-3xl w-fit text-white hover:bg-primary-500 transition-all cursor-pointer whitespace-nowrap"
      >
        Request a Demo
      </button>
      <SupportModal
        openModal={openContactModal}
        setOpenModal={setOpenContactModal}
      />
    </>
  );
}
