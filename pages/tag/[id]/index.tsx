import * as React from 'react'
import service from '../../../utils/service'
import { NextPage, NextPageContext } from 'next'
import { Tag } from '../../../interfaces'
import Layout from '../../../components/layout'
import ErrorPage from 'next/error'

type Props = {
  tag?: Tag
}

const TagPage: NextPage<Props> = ({ tag }) => {
  return tag ? (
    <Layout>
      <h1>{tag.name}</h1>
    </Layout>
  ) : (
    <ErrorPage statusCode={404} />
  )
}

TagPage.getInitialProps = async ({ query }: NextPageContext) => {
  const { data } = await service.get('/tags', {
    params: {
      slug: query.id
    }
  })
  const tag: Tag[] = data
  if (tag.length === 0) {
    return {}
  }
  return { tag: tag[0] }
}

export default TagPage
