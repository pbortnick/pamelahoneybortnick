import { ReactNode } from 'react'
import Nav from 'components/nav'
import Head from 'next/head'
import s from './s.module.css'

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <Head>
        <title>Pamela Bortnick</title>
        <meta name="description" content="Full stack software engineer" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className={s.wip}>
        <p className={s.wipText}>
          This website is currently under construction. Please visit back in March 2023!
        </p>
      </div>
      <Nav />
      <main>{children}</main>
      {/* <Footer /> */}
    </>
  )
}