import "./globals.css";

export const metadata = {
  title: "Next.js Server Actions with RHF",
  description: "Next.js Server Actions with React Hook Form example",
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
