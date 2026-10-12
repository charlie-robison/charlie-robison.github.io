import "./globals.css";

export const metadata = {
  title: "Charlie Robison | Co-Founder & CTO at SESA",
  description:
    "Portfolio of Charlie Robison, SESA co-founder and CTO building AI, data, and backend systems for infrastructure requirements management.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
