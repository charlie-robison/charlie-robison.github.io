import "./globals.css";

export const metadata = {
  title: "Charlie Robison | Software Engineer",
  description:
    "Portfolio of Charlie Robison, CTO and full-stack engineer building production AI, data, and backend systems across startup, logistics, and research domains.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
