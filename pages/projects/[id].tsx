import Head from 'next/head'
import { getAllProjectIds, getProjectData } from '../../lib/projects'
import Layout from '../../components/Layout'
import Date from '../../components/Date'
import utilStyles from '../../styles/utils.module.css'

export default function Post({ projectData }) {
  return (
    <Layout home={false}>
      <Head>
        <title>{projectData.title}</title>
      </Head>
      <article>
        <h1 className={utilStyles.headingXl}>{projectData.title}</h1>
        <h3 className={utilStyles.heading}>
          <a
            href={projectData.websiteUrl}
            rel="noopener noreferrer"
            target="_blank"
          >
            {projectData.website}
          </a>{' '}
          🔗
        </h3>
        <div className={utilStyles.lightText}>
          <Date dateString={projectData.date} />
        </div>

        <div dangerouslySetInnerHTML={{ __html: projectData.contentHtml }} />
      </article>
    </Layout>
  )
}

export async function getStaticPaths() {
  const paths = getAllProjectIds()
  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const projectData = await getProjectData(params.id)
  return {
    props: {
      projectData,
    },
  }
}
