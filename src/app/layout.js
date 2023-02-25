import { Footer } from '@/components/footer'
import { Header } from '@/components/header'
import './globals.css'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.js. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <div>
          <Header />

          <main className="bg-page-gradient pt-navigation-height">
            {children}
          </main>
          {/* <Login /> */}

          <Footer />
        </div>
      </body>
    </html>
  )
}
