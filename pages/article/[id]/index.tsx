import * as React from 'react'
import fetch from '../../../utils/fetch'
import { NextPage, NextPageContext } from 'next'
import ErrorPage from 'next/error'
import { Article } from '../../../interfaces'
import Layout from '../../../components/layout'

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
  const { data } = await fetch(`/articles?slug=${query.id}`)
  const article: Article[] = data
  if (article.length === 0) {
    return {}
  }
  return { article: article[0] }
}

export default ArticlePage
