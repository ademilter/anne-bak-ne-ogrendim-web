import React from 'react'
import Link from 'next/link'
import fetch from 'isomorphic-unfetch'
import { formatDistance } from 'date-fns'
import { tr } from 'date-fns/locale'
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
        <div className="article" key={article.id}>
          <h3>
            <Link href={`article/${article.slug}`}>
              <a>{article.title}</a>
            </Link>
          </h3>
          <ul className="meta">
            <li>
              <Link href={`user/${article.user.username}`}>
                <a>{article.user.username}</a>
              </Link>
            </li>
            <li>
              {formatDistance(new Date(article.created_at), new Date(), {
                locale: tr
              })}
            </li>
            <li>
              {article.tags.map(tag => (
                <Link key={tag.id} href={`tag/${tag.slug}`}>
                  <a>{tag.name}</a>
                </Link>
              ))}
            </li>
          </ul>
        </div>
      ))}
      <style jsx>
        {`
          .article {
            padding: 20px;
            border-bottom: 1px solid #ddd;
          }
          .meta {
            display: flex;
          }
          .meta li {
            margin-right: 10px;
          }
        `}
      </style>
    </Layout>
  )
}

IndexPage.getInitialProps = async () => {
  const _articles = fetch(
    `${process.env.API_URL}/articles?_start=0&_limit=10&_sort=created_at:DESC`
  )
  const _tags = fetch(
    `${process.env.API_URL}/tags?_start=0&_limit=10&_sort=created_at:DESC`
  )
  const [resArticles, resTags] = await Promise.all([_articles, _tags])
  const articles: Article[] = await resArticles.json()
  const tags: Tag[] = await resTags.json()
  return { articles, tags }
}

export default IndexPage
