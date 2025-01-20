import Image from 'next/image'
import s from './illustrations.module.css'

export default function IllustrationsPage() {
  return (
    <main className={s.main}>
      <div className={s.body}>
        <div className={s.header}>
          <h1 className={s.heading}>Illustrations</h1>
          <p className={s.description}>
            I've found illustrating to be a great way to relax while expressing
            my creativity. Here are some of my illustrations. I will continue to
            add more as I create them.
          </p>
        </div>
        <div className={s.illustrations}>
          {illustrations.map(({ title, description, images }) => (
            <div>
              <div className={s.illustrationHeader}>
                <h2>{title}</h2>
                {description && <p>{description}</p>}
                <div className={s.images}>
                  {images.map(({ caption, ...image }) => (
                    <figure className={s.figure}>
                      <Image {...image} />
                      <figcaption>{caption}</figcaption>
                    </figure>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}

const illustrations = [
  {
    title: 'Frank Lloyd Wright homes',
    description:
      "Since coming across a poster of Fallingwater when I was a teenager, I have always been fascinated by Frank Lloyd Wright's architecture. In fact, this year I will be getting married at the wedding venue on the Fallingwater property. Here are some of my illustrations of Frank Lloyd Wright's famous homes.",
    images: [
      {
        src: '/illustrations/flw/hollyhock.png',
        alt: 'Hollyhock House',
        caption: 'Hollyhock House',
        width: 600,
        height: 201,
      },
      {
        src: '/illustrations/flw/kentuck_knob.png',
        alt: 'Kentuck Knob',
        caption: 'Kentuck Knob',
        width: 600,
        height: 289,
      },
      {
        src: '/illustrations/flw/penfield.png',
        alt: 'The Louis Penfield House',
        caption: 'The Louis Penfield House',
        width: 600,
        height: 200,
      },
      {
        src: '/illustrations/flw/robie.png',
        alt: 'Frederick C. Robie House',
        caption: 'Frederick C. Robie House',
        width: 600,
        height: 353,
      },
      {
        src: '/illustrations/flw/rosenbaum.png',
        alt: 'Rosenbaum House',
        caption: 'Rosenbaum House',
        width: 600,
        height: 172,
      },
      {
        src: '/illustrations/flw/taliesin.png',
        alt: 'Taliesin West',
        caption: 'Taliesin West',
        width: 600,
        height: 169,
      },
    ],
  },
]
