import React from 'react'
import Link from 'next/link'
import fetch from 'isomorphic-unfetch'
import { formatDistanceStrict } from 'date-fns'
import { tr } from 'date-fns/locale'
import { NextPage } from 'next'
import { Article, Tag } from '../interfaces'
import Layout from '../components/layout'

type Props = {
  articles: Article[]
  tags: Tag[]
}

const IndexPage: NextPage<Props> = ({ articles }) => {
  return (
    <Layout>
      {articles.map(article => (
        <article className="article" key={article.id}>
          <div className="article-date">
            <small>
              {formatDistanceStrict(new Date(article.created_at), new Date(), {
                locale: tr,
                addSuffix: true
              })}
            </small>
          </div>

          <div className="article-body">
            <h4 className="article-title">
              <Link href={`article/${article.slug}`}>
                <a>{article.title}</a>
              </Link>
            </h4>
            <div className="article-meta">
              <Link href={`user/${article.user.username}`}>
                <a className="meta-item">{article.user.username}</a>
              </Link>

              <div className="meta-item">
                {article.tags.map(tag => (
                  <Link key={tag.id} href={`tag/${tag.slug}`}>
                    <a className="tag">#{tag.name}</a>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </article>
      ))}
      <style jsx>
        {`
          .article {
            display: grid;
            grid-template-columns: 120px 1fr;
            padding-top: 20px;
            padding-bottom: 20px;
            border-bottom: 1px solid #444;
          }
          .article-date {
            color: #999;
          }
          .article-title {
            margin-top: 0;
            margin-bottom: 0;
          }
          .article-meta {
            display: flex;
            align-items: center;
          }
          .article-meta a {
            //color: inherit;
          }
          .meta-item {
            display: inline-flex;
          }
          .meta-item + .meta-item:before {
            content: '·';
            margin-right: 5px;
            margin-left: 5px;
          }
          .tag:not(:last-child):after {
            content: ',';
          }
          .tag + .tag {
            margin-left: 5px;
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
