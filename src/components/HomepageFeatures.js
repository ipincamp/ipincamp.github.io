import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Projects',
    Svg: require('../../static/img/ipincamp.svg').default,
    description: (
      <>
        Until now, ipincamp already has several successful projects.
        One of them is YouTube Downloader and Discord Bot.
      </>
    ),
  },
  {
    title: 'Coding Time',
    Svg: require('../../static/img/ipincamp.svg').default,
    description: (
      <>
        The average ipincamp coding time is 2 hours/days,
        with his favorite idea being Visual Studio Code.
      </>
    ),
  },
  {
    title: 'Professions',
    Svg: require('../../static/img/ipincamp.svg').default,
    description: (
      <>
        Novice programmer with Javascript and NodeJS language as runtime.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
