import Cursor from "@/components/cursor/Cursor";
import { ContactFooter } from "@/components/layout/ContactFooter";
import Navbar from "@/components/layout/Navbar";

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
