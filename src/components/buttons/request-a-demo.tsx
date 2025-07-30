"use client";

import { useState } from "react";
import SupportModal from "@/components/supportModal";
import { Button } from "./button";

export default function RequestADemoButton({
  label = "Request a Demo",
  className,
}: {
  className?: string;
  label?: string;
}) {
  const [openContactModal, setOpenContactModal] = useState(false);

  return (
    <>
      <Button
        type="button"
        className={className}
        onClick={() => setOpenContactModal(true)}
      >
        {label}
      </Button>
      <SupportModal
        openModal={openContactModal}
        setOpenModal={setOpenContactModal}
      />
    </>
  );
}
