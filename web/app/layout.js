import { Roboto_Serif
} from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const inter = Roboto_Serif
({ subsets: ["latin"] });


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      {/* <Header  /> */}
       {children}</body>
    </html>
  );
}
