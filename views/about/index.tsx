import s from './s.module.css'

export default function AboutView() {
  return (
    <div className={s.main}>
      <div className={s.header}>
        <h1 className={s.heading}>Who is Pam?</h1>
      </div>
      <div className={s.detailsContainer}>
        <div className={s.detail}>
          <span>
            Professional developer
          </span>
        </div>
        <div className={s.detail}>
          <span>
            Amateur web designer
          </span>
        </div>
        <div className={s.detail}>
          <span>
            Horrible singer
          </span>
        </div>
      </div>
      <div className={s.blurb}>
        <p>I am a full stack software engineer who works for <a href="https://www.hashicorp.com" rel="noopener noreferrer" target="_blank">HashiCorp</a>. Go ahead...click that link! And explore some of my greatest work 😉.</p>
        <br />
        <p>I am a team player and a perpetual learner. I enjoy seeing live music and am a connoisseur of prestige television.</p>
        <br />
        <p>This site is a work in progress and will have some other fun stuff like icons, animations, and more, coming soon!</p>
      </div>
      <div className={s.social}>
        <a href="https://www.linkedin.com/in/pamelahoneybortnick/">My LinkedIn</a>
      </div>
    </div >
  )
}