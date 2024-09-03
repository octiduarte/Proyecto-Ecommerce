import { Chakra_Petch } from "next/font/google";
import { cn } from "@/lib/utils";
import "./globals.css";
import NavbarResponsive from "@/components/navbarResponsive";
import SectionFooter from "@/components/sectionFooter";
import { fetchData } from "@/lib/api";
import { DataProvider } from "@/context/DataContext";

const chackra = Chakra_Petch({
  subsets: ["latin"],
  weight: ["300"],
});

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const data = await fetchData();

  return (
    <html lang="en">
      <body className={cn("!pt-16", chackra.className)}>
        <DataProvider data={data}>
          <NavbarResponsive
            store={data.store}
            categories={data.categories}
          />
          {children}
          <SectionFooter store={data.store} />
        </DataProvider>
      </body>
    </html>
  );
}
