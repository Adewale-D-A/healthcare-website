"use client";
import DNAIcon from "@/assets/icons/dna";
import DrugIcon from "@/assets/icons/drugs";
import PaymentCardIcon from "@/assets/icons/payment-card";
import SetRevolveIcon from "@/assets/icons/set-revolve";
import { HeartPulse } from "lucide-react";
import { ReactNode } from "react";
import useInView from "@/hook/use-in-view";
import { motion } from "framer-motion";

export function OurJourneyCard({
  icon,
  title,
  description,
  position = 0,
}: {
  icon: ReactNode;
  title: string;
  description: string;
  position?: 1 | 0;
}) {
  const [ref, isInView] = useInView();

  return (
    <div ref={ref}>
      {isInView && (
        <motion.div
          initial={{ x: Boolean(position) ? "200vw" : "-100vw" }} // start off-screen to the left
          animate={{ x: 0 }} // animate into position
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 20,
            duration: 2000,
          }}
          className=" w-full shadow-lg rounded-full flex items-center gap-4 p-4"
        >
          <div className=" rounded-full p-4 bg-secondary w-fit text-white">
            {icon}
          </div>
          <div>
            <h6 className=" font-semibold">{title}</h6>
            <p>{description}</p>
          </div>
        </motion.div>
      )}
    </div>
  );
}
export function OurJourneyCardOne() {
  return (
    <OurJourneyCard
      icon={<DrugIcon className="size-14" />}
      title="Concept Research"
      description="Founders explored health automation powered by clinical AI and hands-on care experience."
      position={0}
    />
  );
}

export function OurJourneyCardTwo() {
  return (
    <OurJourneyCard
      icon={<SetRevolveIcon className="size-14" />}
      title="Pandemic Digitization"
      description="COVID-19 underscored the need for remote workflows, speeding up platform development."
      position={1}
    />
  );
}
export function OurJourneyCardThree() {
  return (
    <OurJourneyCard
      icon={<PaymentCardIcon className="size-14" />}
      title="Proof of Concept"
      description="Pilots with clinics, labs, and diagnostic centers validated our core automation and data-capture features."
      position={0}
    />
  );
}

export function OurJourneyCardFour() {
  return (
    <OurJourneyCard
      icon={<DNAIcon className="size-14" />}
      title="Incorporation & Partnerships"
      description="7thCare formally incorporated and forged key partnerships to refine product-market fit."
      position={1}
    />
  );
}

export function OurJourneyCardFive() {
  return (
    <OurJourneyCard
      icon={<HeartPulse className="size-14" />}
      title="Platform Launch & Growth"
      description="Public rollout to first users, gathering feedback and expanding features and coverage across facilities."
      position={0}
    />
  );
}
