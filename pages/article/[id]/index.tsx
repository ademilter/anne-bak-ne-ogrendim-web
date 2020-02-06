import * as React from 'react'
import { NextPage, NextPageContext } from 'next'
import ErrorPage from 'next/error'

import service from '@utils/service'
import { Article } from '@interfaces/index'
import Layout from '@components/layout'

type Props = {
  article?: Article
}

const ArticlePage: NextPage<Props> = ({ article }) => {
  return article ? (
    <Layout>
      <h1>{article.title}</h1>
    </Layout>
  ) : (
    <ErrorPage statusCode={404} />
  )
}

ArticlePage.getInitialProps = async ({ query }: NextPageContext) => {
  const { data } = await service.get('/articles', {
    params: {
      slug: query.id
    }
  })
  const article: Article[] = data
  if (article.length === 0) {
    return {}
  }
  return { article: article[0] }
}

export default ArticlePage
