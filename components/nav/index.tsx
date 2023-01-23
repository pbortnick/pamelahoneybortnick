import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import classNames from 'classnames'
import s from './s.module.css'

const Nav = () => {
  return (
    <nav className={s.nav}>
      <div className={s.inner}>
        <DesktopNavPanel />
        {/* <MobileNavPanel /> */}
        <Link className={s.mobileButton} href="/" aria-label="go to home">
          <Image
            src={require('./mobile-home-icon.svg')}
            className={s.mobileHomeIcon}
            height={27}
            width={28}
            alt="home button icon"
          />
        </Link>
        <button className={s.mobileButton} aria-label="open mobile menu">
          <Image
            src={require('./mobile-menu-icon.svg')}
            className={s.mobileButtonIcon}
            height={27}
            width={32}
            alt="mobile button icon"
          />
        </button>
      </div>
    </nav>
  )
}

const DesktopNavPanel = () => (
  <div className={s.desktopNavPanel}>
    <NavLink href="/" text="Home" />
    <NavLink href="/about" text="About" />
    <NavLink href="/portfolio" text="Portfolio" />
    <NavLink href="/blog" text="Blog" />
    <NavLink href="/resume" text="Resume" />
  </div>
)

// const MobileNavPanel = () => (

// )

interface NavLinkProps {
  href: string
  text: string
}

const NavLink = ({ href, text }: NavLinkProps) => {
  const { pathname } = useRouter()
  const isCurrentPage = pathname === href

  return (
    <Link href={href} className={classNames(s.link, isCurrentPage && s.currentPath)}>
      {text}
    </Link>
  )
}

export default Nav