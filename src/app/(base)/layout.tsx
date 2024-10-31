import AnalyticsWrapper from "@/components/analytics-wrapper";
import FooterMenu from "@/components/Footer";

export default function BaseLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="w-full">
      <AnalyticsWrapper />
      {children}
      <FooterMenu />
    </main>
  );
}
