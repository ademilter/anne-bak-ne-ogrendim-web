import React, { useState, useEffect } from 'react'
import dynamic from 'next/dynamic'
import { NextPage } from 'next'
import Router from 'next/router'

import service from '@utils/service'
import Layout from '@components/layout'

const Editor = dynamic(() => import('@components/editor'), {
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
      const token = localStorage.getItem('TOKEN')
      if (!token) throw 'Token yok'

      const { data } = await service.get('/users/me', {
        headers: {
          authorization: `Bearer ${token}`
        }
      })
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
