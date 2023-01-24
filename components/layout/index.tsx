import { ReactNode } from 'react'
import Nav from 'components/nav'
import Head from 'next/head'
import s from './s.module.css'

export default function Layout({ children }: { children: ReactNode }) {
  const pageTitle = 'Pamela Bortnick'
  const pageDescription = 'Full stack software engineer'
  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription}/>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content={pageTitle} key="title" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
        <meta
          property="twitter:card"
          content="summary_large_image"
        />
        <meta
          property="og:image"
          content="https://pamelahoneybortnick.com/og-image.png"
        />
      </Head>
      <div className={s.banner}>
        <div className={s.wip}>
          <p className={s.wipText}>
            This website is currently under construction. Please visit back in March 2023!
          </p>
        </div>
      </div>
      <Nav />
      <main>{children}</main>
      {/* <Footer /> */}
    </>
  )
}