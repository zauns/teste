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
        <header className="flex-row, w-full, h-[80px]">
          <div className="flex-row, justify-between, items-center">
            <Image 
            src={"/images/Frame 4.png"}
            alt=""
            width={130}
            height={52}/>
            
          </div>
        </header>
        {children}
      </body>
    </html>
  );
}
