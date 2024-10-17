import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Desafio 5: Top vendas",
  description: "Site de vendas TOP",
};

export default function RootLayout({children,}: Readonly<{children: React.ReactNode;}>) {
  return (
    <html lang="en">
      <body>
        <header className="w-full, h-[80px]">
          
        </header>
        {children}
      </body>
    </html>
  );
}
