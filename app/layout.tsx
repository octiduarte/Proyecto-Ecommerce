// This is the root layout component for your Next.js app.
// Learn more: https://nextjs.org/docs/app/building-your-application/routing/pages-and-layouts#root-layout-required
import { Chakra_Petch } from "next/font/google";
import { cn } from "@/lib/utils";
import "./globals.css";
import NavbarResponsive from "@/components/navbarResponsive";
import SectionFooter from "@/components/sectionFooter";
import { fetchData } from "@/lib/api";

const chackra = Chakra_Petch({ 
  subsets: ["latin"], 
  weight: ["300"] 
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
        <NavbarResponsive
          store={data.store}
          categories={data.categories}
        ></NavbarResponsive>
        {children}
        <SectionFooter store={data.store}></SectionFooter>
      </body>
    </html>
  );
}
