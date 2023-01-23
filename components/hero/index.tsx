import Image from 'next/image'
import s from './s.module.css'
const Hero = () => {
  return (
    <header className={s.hero}>
      <div className={s.textContainer}>
        <div className={s.text}>
          <h1 className={s.heading}>
            <span>Pamela</span>
            <span>Honey</span>
            <span>Bortnick</span>
          </h1>
          <p className={s.description}>software engineer</p>
        </div>
      </div>
      <div className={s.imageContainer}>
        <Image src={require('./profile-pic.png')} height={800} alt="profile picture of pam" width={660} className={s.image} />
      </div>
    </header>
  )
}

export default Hero