import AnalyticsWrapper from "@/components/analytics-wrapper";

export default function BaseLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="w-full">
      <AnalyticsWrapper />
      {children}
    </main>
  );
}
