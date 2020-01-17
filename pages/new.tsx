import React, { useState, useEffect } from 'react'
// import fetch from 'isomorphic-unfetch'
import dynamic from 'next/dynamic'
import { NextPage } from 'next'
import Router from 'next/router'
// import { Article, Tag } from '../interfaces'
import Layout from '../components/layout'

const Editor = dynamic(() => import('../components/editor'), {
  ssr: false
})

/*
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9
{
  "title": "hello 34",
  "content": "deneme açıklama olsun b\n\nhelllladsas ",
  "user": 1,
  "tags": [1,5]
}
*/

type Props = {}

const NewArticlePage: NextPage<Props> = () => {
  const [ready, setReady] = useState(false)

  useEffect(() => {
    if (localStorage.getItem('TOKEN')) {
      setReady(true)
    } else {
      Router.push('/')
    }
  }, [])

  return ready ? (
    <Layout>
      <Editor />
    </Layout>
  ) : null
}

export default NewArticlePage
