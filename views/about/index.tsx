import Icon from 'components/icon'
import s from './s.module.css'

export default function AboutView() {
  return (
    <div className={s.main}>
      <div className={s.header}>
        <h1 className={s.heading}>Who is Pam?</h1>
      </div>
      <div className={s.detailsContainer}>
        <div className={s.detail}>
          <Icon
            name="stirrer"
            size="lg"
            color="offwhite"
            className={s.iconDivider}
          />
          <span>professional engineer</span>
        </div>
        <div className={s.divider} />
        <div className={s.detail}>
          <Icon
            name="stirrer"
            size="lg"
            color="offwhite"
            className={s.iconDivider}
          />
          <span>amateur designer</span>
        </div>
        <div className={s.divider} />
        <div className={s.detail}>
          <Icon
            name="stirrer"
            size="lg"
            color="offwhite"
            className={s.iconDivider}
          />
          <span>terrible singer</span>
        </div>
      </div>
      <div className={s.blurb}>
        <p>
          Pamela is a full stack software engineer who works at{' '}
          <a
            href="https://www.hashicorp.com"
            rel="noopener noreferrer"
            target="_blank"
          >
            HashiCorp
          </a>{' '}
          on the Web Presence team.
        </p>
        <br />
        <p>
          In her free time, Pamela enjoys picking up new hobbies, seeing live music, and playing with her adorable little beagle named Rummi.
        </p>
        <br />
        <p>
          This website was built with NextJS and designed with Figma. It is a
          work in work in progress.
        </p>
      </div>
      <div className={s.social}>
        <a href="https://www.linkedin.com/in/pamelahoneybortnick/">
          Visit my LinkedIn
        </a>
        {/* <a href="https://www.linkedin.com/in/pamelahoneybortnick/">
          Download my resume
        </a> */}
      </div>
    </div>
  )
}
