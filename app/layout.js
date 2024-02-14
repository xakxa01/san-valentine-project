import { Nunito } from "next/font/google";
import "../styles/globals.css";
import Providers from "@/components/Providers";

const nunito = Nunito({ subsets: ["latin"] });

export const metadata = {
  title: "te amooooo",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={nunito.className}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
