import faqAllContents from "@/assets/FAQ.json";
import FAQContent from "@/components/FAQ-content";

interface FAQPageProps {
  searchParams: {
    search?: string;
  };
}

export default function Support({ searchParams }: FAQPageProps) {
  const search = searchParams.search ?? "";

  const faqContents = faqAllContents.filter(
    (item) =>
      item.category.toLowerCase().includes(search.toLowerCase()) ||
      item.title.toLowerCase().includes(search.toLowerCase()) ||
      item.content.toLowerCase().includes(search.toLowerCase())
  );
  return <FAQContent faqContents={faqContents} />;
}
