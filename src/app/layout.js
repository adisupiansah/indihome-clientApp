import { Poppins } from "next/font/google";
import 'bootstrap/dist/css/bootstrap.css';
import "./globals.css";
import NavigasiBar from "@/components/NavigasiBar";
import Footer from "@/components/Footer";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export const metadata = {
  title: "Registrasi Indihome",
  description: "Registrasi Indihome untuk pelanggan baru",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} antialiased`} cz-shortcut-listen="true">
        <NavigasiBar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
