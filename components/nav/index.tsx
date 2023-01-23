import Link from 'next/link'
import { useRouter } from 'next/router'
import classNames from 'classnames'
import s from './s.module.css'

const Nav = () => {
  const { pathname } = useRouter()
  console.log({ pathname })
  const isCurrentPage = false
  return (
    <nav className={s.nav}>
      <div className={s.inner}>
        <NavLink href="/" text="Home" />
        <NavLink href="/about" text="About" />
        <NavLink href="/portfolio" text="Portfolio" />
        <NavLink href="/blog" text="Blog" />
        <NavLink href="/resume" text="Resume" />
      </div>
    </nav>
  )
}

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