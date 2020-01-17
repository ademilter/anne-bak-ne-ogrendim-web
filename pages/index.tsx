import React from 'react'
import Link from 'next/link'
import fetch from 'isomorphic-unfetch'
import { NextPage } from 'next'
import { Article, Tag } from '../interfaces'
import Layout from '../components/layout'

type Props = {
  articles: Article[]
  tags: Tag[]
}

const IndexPage: NextPage<Props> = ({ articles, tags }) => {
  console.log(tags)
  return (
    <Layout>
      {articles.map(article => (
        <div key={article.id}>
          <div>
            <Link href={`article/${article.slug}`}>
              <a>{article.title}</a>
            </Link>
          </div>
          <ul>
            <li>
              <Link href={`user/${article.user.username}`}>
                <a>{article.user.username}</a>
              </Link>
            </li>
            <li>{article.created_at}</li>
            <li>
              {article.tags.map(tag => (
                <Link key={tag.id} href={`tag/${tag.slug}`}>
                  <a>{tag.name}</a>
                </Link>
              ))}
            </li>
          </ul>
          <hr />
        </div>
      ))}
    </Layout>
  )
}

IndexPage.getInitialProps = async () => {
  const _articles = fetch(`${process.env.API_URL}/articles`)
  const _tags = fetch(`${process.env.API_URL}/tags`)
  const [resArticles, resTags] = await Promise.all([_articles, _tags])
  const articles: Article[] = await resArticles.json()
  const tags: Tag[] = await resTags.json()
  return { articles, tags }
}

export default IndexPage
