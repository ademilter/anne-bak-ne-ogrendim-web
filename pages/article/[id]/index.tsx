import * as React from 'react'
import fetch from 'isomorphic-unfetch'
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
  const response = await fetch(
    `${process.env.API_URL}/articles?slug=${query.id}`
  )
  const article: Article[] = await response.json()
  if (article.length === 0) {
    return {}
  }
  return { article: article[0] }
}

export default ArticlePage
