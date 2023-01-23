import Image from 'next/image';
import Hero from 'components/hero';
import Nav from 'components/nav';
import s from './s.module.css';
import Head from 'next/head';

const HomeView = () => {
  return (
    <>
      <Head>
        <title>Pamela Bortnick</title>
        <meta name="description" content="Full stack software engineer" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className={s.main}>
        <Hero />
        <div className={s.topGraphicContainer}>
          <Image
            fill
            src={require('lib/images/graphics/left-slanted.svg')}
            alt=""
            className={s.topGraphic}
          />
        </div>
        <div className={s.bottomGraphicContainer}>
          <Image
            fill
            src={require('lib/images/graphics/right-detached.svg')}
            alt=""
            className={s.bottomGraphic}
          />
        </div>
      </main>
    </>
  );
};

export default HomeView;
