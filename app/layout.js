import "./globals.css";

export const metadata = {
  title: "Charlie Robison | Software Engineer",
  description:
    "Modern portfolio for Charlie Robison: software engineer focused on full-stack apps, data-driven systems, and polished user experiences.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
