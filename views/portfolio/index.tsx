import Card, { type CardProps } from 'components/card'
import s from './s.module.css'

export default function PortfolioView() {
  return (
    <div className={s.main}>
      <div className={s.heading}>Pam's Portfolio</div>
      <div className={s.cardsContainer}>
        {cards.map((card) => <Card {...card} className={s.card} />)}
      </div>
    </div>
  )
}

const cards: Array<CardProps> = [
  {
    heading: 'Two Fish Coaching',
    description: 'Marketing website',
    url: 'https://www.twofishcoaching.com',
    thumbnail: {
      src: require('./img/two-fish.png'),
      alt: 'Two Fish Coaching Image'
    },
    tags: [
      { text: 'NextJS', theme: 'sage' },
      { text: 'CMS', theme: 'sage' },
    ]
  }
]