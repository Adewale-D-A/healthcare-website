import FooterMenu from "@/components/Footer";

export default function BaseLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="w-full">
      {children}
      <FooterMenu />
    </main>
  );
}
