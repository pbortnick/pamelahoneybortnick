import Link from 'next/link'
import Image, { type ImageProps } from 'next/legacy/image'
import classNames from 'classnames'
import Tag, { type TagProps } from 'components/tag'
import s from './s.module.css'

export interface CardProps {
  thumbnail: ImageProps
  heading: string
  description?: string
  tags?: Array<TagProps>
  url: string
  className?: string
}

export default function Card({ thumbnail, heading, description, tags, url, className }: CardProps) {
  return (
    <div className={classNames(s.card, className)}>
      <div className={s.image}>
        <Image
          {...thumbnail}
          width={800}
          height={450}
          layout="responsive"
          objectFit="cover"
        />
      </div>
      <div className={s.body}>
        <h2 className={s.cardTitle}>{heading}</h2>
        {description && <p className={s.description}>{description}</p>}
        {tags && (
          <div className={s.tagsContainer}>
            {tags.map((tag) => <Tag {...tag} />)}
          </div>
        )}
      </div>
      <Link href={url} className={s.link} aria-label={heading} />
    </div>
  )
}