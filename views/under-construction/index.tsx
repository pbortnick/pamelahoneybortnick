import Head from 'next/head'
import s from './s.module.css'

export default function UnderConstructionView() {
  return (
    <>
      <Head>
        <title>Pamela Bortnick</title>
        <meta name="description" content="Full stack software engineer" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className={s.main}>
        <h1 className={s.text}>Under Construction</h1>
      </main>
    </>
  )
}