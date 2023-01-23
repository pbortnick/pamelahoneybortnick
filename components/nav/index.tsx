import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { FocusOn } from 'react-focus-on'
import { RemoveScroll } from 'react-remove-scroll'
import classNames from 'classnames'
import { useMediumUp } from 'lib/hooks/use-media-query'
import s from './s.module.css'

const Nav = () => (
  <nav className={s.nav}>
    <div className={s.container}>
      <DesktopNavPanel />
      <MobileNavPanel />
    </div>
  </nav>
)

const DesktopNavPanel = () => (
  <div className={s.desktopNavPanel}>
    <NavLinks />
  </div>
)

const MobileNavPanel = () => {
  const [menuIsOpen, setMenuIsOpen] = useState<boolean>(false)
  const mediumUp = useMediumUp()

  const close = () => setMenuIsOpen(false)

  useEffect(() => {
    if (mediumUp && menuIsOpen) {
      close()
    }
  }, [mediumUp])

  return (
    <FocusOn
      enabled={menuIsOpen}
      onEscapeKey={close}
      onClickOutside={close}
      className={s.mobileBodyOuter}
    >
      <RemoveScroll enabled={menuIsOpen} className={s.mobileBody}>
        <div className={s.top}>
          <Link className={s.mobileButton} href="/" aria-label="go to home">
            <Image
              src={require('./mobile-home-icon.svg')}
              className={s.mobileHomeIcon}
              height={27}
              width={28}
              alt="home button icon"
            />
          </Link>
          <button className={s.mobileButton} aria-label="open mobile menu" onClick={() => setMenuIsOpen(!menuIsOpen)}>
            <Image
              src={require('./mobile-menu-icon.svg')}
              className={s.mobileButtonIcon}
              height={27}
              width={32}
              alt="mobile button icon"
            />
          </button>
        </div>
        <div className={classNames(s.mobileNavLinks, menuIsOpen && s.isOpen)}>
          <NavLinks />
        </div>
      </RemoveScroll>
    </FocusOn>
  )
}

const NavLinks = () => (
  <>
    <NavLink href="/" text="Home" />
    <NavLink href="/about" text="About" />
    <NavLink href="/portfolio" text="Portfolio" />
    <NavLink href="/blog" text="Blog" />
    <NavLink href="/resume" text="Resume" />
  </>
)

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