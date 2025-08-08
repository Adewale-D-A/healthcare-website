import faqAllContents from "@/assets/FAQ.json";
import FAQContent from "@/components/FAQ-content";

export default function GettingStartedSupport() {
  const faqContents = faqAllContents.filter(
    (item) => item.category === "getting_started"
  );
  return <FAQContent faqContents={faqContents} />;
}
