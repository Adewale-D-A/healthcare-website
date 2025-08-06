import faqAllContents from "@/assets/FAQ.json";
import FAQContent from "@/components/FAQ-content";

export default function BillingsAndPaymentsSupport() {
  const faqContents = faqAllContents.filter(
    (item) => item.category === "billing_and_payments"
  );
  return <FAQContent faqContents={faqContents} />;
}
