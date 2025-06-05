// app/layout.tsx
import "../src/styles/globals.css";

export const metadata = {
  title: "NovaEdge - AI-Powered Digital Solutions",
  description: "Transforming Digital Experiences with AI-Powered Innovation",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
