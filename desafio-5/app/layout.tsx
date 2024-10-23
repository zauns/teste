import { Metadata } from "next";
import './globals.css'; 
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer';


export const metadata: Metadata = {
  title: "Desafio 5: Top vendas",
  description: "Site de vendas TOP",
};

export default function RootLayout({children,}: Readonly<{children: React.ReactNode;}>) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap" rel="stylesheet"/>
      </head>
      <body>
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
