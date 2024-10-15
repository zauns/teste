import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Desafio 5: Top vendas",
  description: "Site de vendas TOP",
};

export default function RootLayout({children,}: Readonly<{children: React.ReactNode;}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
