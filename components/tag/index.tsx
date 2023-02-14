import classNames from 'classnames'
import s from './s.module.css'

export const BASE_THEMES = ['pale', 'sage', 'casual', 'offwhite'] as const
type BaseThemeOptions = typeof BASE_THEMES[number]


interface TagProps {
  theme?: BaseThemeOptions
  inverted?: boolean
  text: string
  hasBorder?: boolean
}

const THEME_MAP: Record<BaseThemeOptions, { light: string, dark: string }> = {
  pale: {
    light: 'pale',
    dark: 'sunset-dark'
  },
  sage: {
    light: 'sage-light',
    dark: 'sage-dark'
  },
  casual: {
    light: 'casual',
    dark: 'maroon'
  },
  offwhite: {
    light: 'offwhite',
    dark: 'black'
  },

}

export default function Tag({ theme = 'offwhite', inverted, hasBorder, text }: TagProps) {
  const { light, dark } = THEME_MAP[theme]

  return (
    <div style={
      {
        '--light': `var(--${light})`,
        '--dark': `var(--${dark})`
      } as React.CSSProperties
    }
      className={classNames(s.tag, hasBorder && s.hasBorder, inverted && s.inverted)}>
      <span className={s.text}>{text}</span>
    </div>
  )
}