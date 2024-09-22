import { Chakra_Petch } from "next/font/google";
import { cn } from "@/lib/utils";
import "./globals.css";
import SectionFooter from "@/components/sectionFooter";
import { fetchData } from "@/lib/api";
import { DataProvider } from "@/context/DataContext";
import Navbar from "@/components/navbar";

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
      <body className={cn(chackra.className)}>
        <div className="relative flex min-h-screen flex-col">
          <DataProvider data={data}>
            <Navbar store={data.store} categories={data.categories} />
            {children}
            <SectionFooter store={data.store} />
          </DataProvider>
        </div>
      </body>
    </html>
  );
}
