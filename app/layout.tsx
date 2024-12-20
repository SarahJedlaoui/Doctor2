import './globals.css';
import Navbar from './components/Navbar/index';
import Head from "next/head";

export const metadata = {
  title: 'Doctor',
  description: 'Generated bu Nuri',
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Head>
        <link
          rel="preload"
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&display=swap"
          as="style"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body>
       
        {children}

      </body>
    </html>
  )
}
