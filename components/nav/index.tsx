import { useEffect, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { FocusOn } from 'react-focus-on'
import { RemoveScroll } from 'react-remove-scroll'
import classNames from 'classnames'
import { useMediumUp } from 'lib/hooks/use-media-query'
import s from './s.module.css'
import Icon from 'components/icon'

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
  const { pathname } = useRouter()
  const mediumUp = useMediumUp()
  const [menuIsOpen, setMenuIsOpen] = useState<boolean>(false)

  const close = () => setMenuIsOpen(false)

  useEffect(() => {
    if (mediumUp && menuIsOpen) {
      close()
    }
  }, [mediumUp])

  useEffect(() => {
    if (menuIsOpen) {
      close()
    }
  }, [pathname])

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
            <Icon name="home" size="lg" color="maroon" />
          </Link>
          <button
            className={s.mobileButton}
            aria-label="open mobile menu"
            onClick={() => setMenuIsOpen(!menuIsOpen)}
          >
            <Icon
              name="menu"
              size="lg"
              color="maroon"
              className={classNames(s.icon, !menuIsOpen && s.show)}
            />
            <Icon
              name="close"
              size="lg"
              color="maroon"
              className={classNames(s.icon, menuIsOpen && s.show)}
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
    {/* <NavLink href="/portfolio" text="Portfolio" /> */}
    <NavLink href="/portfolio" text="Portfolio" />
    {/* <NavLink href="/resume" text="Resume" /> */}
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
    <Link
      href={href}
      className={classNames(s.link, isCurrentPage && s.currentPath)}
    >
      {text}
    </Link>
  )
}

export default Nav
