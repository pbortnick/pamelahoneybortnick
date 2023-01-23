import Image from 'next/image';
import Hero from 'components/hero';
import Nav from 'components/nav';
import s from './s.module.css';
import Head from 'next/head';

const HomeView = () => {
  return (
    <div className={s.main}>
      <Hero />
      <div className={s.topGraphicContainer}>
        <Image
          fill
          src={require('lib/images/graphics/slanted.svg')}
          alt=""
          className={s.topGraphic}
        />
      </div>
      <div className={s.bottomGraphicContainer}>
        <Image
          fill
          src={require('lib/images/graphics/detached.svg')}
          alt=""
          className={s.bottomGraphic}
        />
      </div>
    </div>
  );
};

export default HomeView;
