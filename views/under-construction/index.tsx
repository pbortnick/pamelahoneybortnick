import Head from 'next/head'
import s from './s.module.css'

export default function UnderConstructionView() {
  return (
    <div className={s.main}>
      <div className={s.inner}>
        <h1 className={s.text}>Under Construction</h1>
      </div>
    </div>
  )
}