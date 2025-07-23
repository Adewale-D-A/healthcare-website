"use client";

import { useState } from "react";
import SupportModal from "@/components/supportModal";
import { Button } from "./button";

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
      <Button type="button" onClick={() => setOpenContactModal(true)}>
        {label}
      </Button>
      <SupportModal
        openModal={openContactModal}
        setOpenModal={setOpenContactModal}
      />
    </>
  );
}
