import Cursor from "@/components/cursor/Cursor";
import Navbar from "@/components/layout/Navbar";
import { ContactFooter } from "@/components/layout/ContactFooter";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Cursor />

      <Navbar />

      <main className="min-h-screen">{children}</main>

      <ContactFooter />
    </>
  );
}
