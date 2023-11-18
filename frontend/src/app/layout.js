import { Inter } from "next/font/google";
import Head from "next/head";
import "./globals.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Spotify - Houlak",
  description: "Houlak challenge",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
        />
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
