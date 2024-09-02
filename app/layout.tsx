// This is the root layout component for your Next.js app.
// Learn more: https://nextjs.org/docs/app/building-your-application/routing/pages-and-layouts#root-layout-required
import { Inter,Teko } from 'next/font/google'
import { cn } from '@/lib/utils'
import './globals.css'
import NavbarResponsive from '@/components/navbarResponsive'
import SectionFooter from '@/components/sectionFooter'
import { fetchData } from '@/lib/api'

const fontHeading = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-heading',
})

const fontBody = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-body',
})



export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const data = await fetchData();
  return (
    <html lang="en">
      <body 
        className={cn(
          '!pt-16',
          fontHeading.variable,
          fontBody.variable
        )}
      >
        <NavbarResponsive store={data.store} categories={data.categories}></NavbarResponsive>
        {children}
        <SectionFooter store={data.store} ></SectionFooter>
      </body>
      
    </html>
  )
}