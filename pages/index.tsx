import Head from 'next/head'
import Link from 'next/link'

import { useEffect } from 'react'
import Date from '../components/Date'
import Layout, { siteTitle } from '../components/Layout'
import ParticlesContainer from '../components/Particles'
import utilStyles from '../styles/utils.module.css'
import { getSortedProjectsData } from '../lib/projects'

export async function getStaticProps() {
  const allPostsData = getSortedProjectsData()
  return {
    props: {
      allPostsData,
    },
  }
}

export default function Home({ allPostsData }) {
  useEffect(() => {})
  return (
    <ParticlesContainer>
      <Layout home>
        <Head>
          <link rel="shortcut icon" href="/static/favicon.ico" />
          <title>{siteTitle}</title>
        </Head>

        <section className={`${utilStyles.headingMd} ${utilStyles.center}`}>
          <p>
            My name is Julian and I am a Full Stack Developer based in London
          </p>
          <p>
            I currently work at AI Music, where we are exploring what happens
            when you apply the latest techniques in artificial intelligence to
            music.
          </p>
        </section>
        <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
          <h2 className={utilStyles.headingLg}>Recent Projects</h2>
          <ul className={utilStyles.list}>
            {allPostsData.map(({ id, date, title }) => (
              <li className={utilStyles.listItem} key={id}>
                <Link href={`/projects/${id}`}>
                  <a>{title}</a>
                </Link>
                <br />
                <small className={utilStyles.lightText}>
                  <Date dateString={date} />
                </small>
              </li>
            ))}
          </ul>
        </section>
      </Layout>
    </ParticlesContainer>
  )
}
