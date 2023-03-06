import Image from 'next/image'
import s from './style.module.css'

interface IconProps {
  name: string
  color?: string
}

export default function Icon({ name, color }: IconProps) {
  return (
    <Image
      src={`/icons/${name}.svg`}
      className={s.icon}
      height={27}
      width={32}
      alt={`${name} icon`}
      style={
        {
          '--fill': `var(--${color})`,
        } as React.CSSProperties
      }
    />
  )
}
