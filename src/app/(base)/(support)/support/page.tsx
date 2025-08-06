import faqContents from "@/assets/FAQ.json";
import FAQContent from "@/components/FAQ-content";

export default function Support() {
  return <FAQContent faqContents={faqContents} />;
}
