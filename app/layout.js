import "./globals.css";
import { Sen } from 'next/font/google';

export const metadata = {
  title: "Green Youth Initiative Movement",
  description: "The official Web of the Green Youth Initiative Movement",
};

const Josef = Sen({
  subsets: ['latin'],
  weight: ["400", "500", "600", "700"],
  display: "swap"
})

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={Josef.className}>{children}</body>
    </html>
  );
}
