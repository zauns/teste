import { Metadata } from "next";
import './globals.css'; 
import Navbar from '../components/Navbar.js';


export const metadata: Metadata = {
  title: "Desafio 5: Top vendas",
  description: "Site de vendas TOP",
};

export default function RootLayout({children,}: Readonly<{children: React.ReactNode;}>) {
  return (
    <html lang="en">
      <body>
        <header>
          <Navbar/>
        </header>
        {children}
      </body>
    </html>
  );
}
