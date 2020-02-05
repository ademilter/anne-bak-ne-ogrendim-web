import React, { useState, useEffect } from 'react'
import dynamic from 'next/dynamic'
import { NextPage } from 'next'
import Router from 'next/router'
import fetch from '../utils/fetch'

import Layout from '../components/layout'

const Editor = dynamic(() => import('../components/editor'), {
  ssr: false
})

/*
{
  "title": "hello 34",
  "content": "deneme açıklama olsun b\n\nhelllladsas ",
  "user": 1,
  "tags": [1,5]
}
*/

type Props = {}

const NewArticlePage: NextPage<Props> = () => {
  const [isLogin, setLogin] = useState(false)

  async function check() {
    try {
      if (!localStorage.getItem('TOKEN')) throw 'Token yok'
      const { data } = await fetch('/users/me')
      console.log(data)
      setLogin(true)
    } catch (e) {
      console.log(e)
      await Router.push('/')
    }
  }

  useEffect(() => {
    check()
  }, [])

  return isLogin ? (
    <Layout>
      <Editor />
    </Layout>
  ) : (
    <div>Loading...</div>
  )
}

export default NewArticlePage
