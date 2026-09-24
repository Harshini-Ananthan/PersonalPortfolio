import { Dancing_Script, EB_Garamond } from "next/font/google";
import "./globals.css";

const dancingScript = Dancing_Script({
  subsets: ["latin"],
  variable: "--font-dancing",
});

const ebGaramond = EB_Garamond({
  subsets: ["latin"],
  variable: "--font-garamond",
});

export const metadata = {
  title: "Harshini Portfolio",
  description: "Personal portfolio website"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${dancingScript.variable} ${ebGaramond.variable}`}>
      <head>
        <link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css" />
      </head>
      <body>{children}</body>
    </html>
  );
}
