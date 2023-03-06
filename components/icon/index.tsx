import classNames from 'classnames'
import type { Icons } from 'types/icon-names'
import s from './s.module.css'

type Sizes = 'sm' | 'md' | 'lg'

interface IconProps {
  size?: Sizes
  name: Icons
  color?: string
}

export default function Icon({ name, color, size = 'md' }: IconProps) {
  return (
    <span
      aria-label={name}
      className={classNames(s.icon, s[size])}
      role="img"
      style={
        {
          '--icon': `url(/icons/${name}.svg)`,
          '--fill': `var(--${color})`,
        } as React.CSSProperties
      }
    />
  )
}
