import faqAllContents from "@/assets/FAQ.json";
import FAQContent from "@/components/FAQ-content";

export default function TechnicalIssuesSupport() {
  const faqContents = faqAllContents.filter(
    (item) => item.category === "technical_issues"
  );
  return <FAQContent faqContents={faqContents} />;
}
