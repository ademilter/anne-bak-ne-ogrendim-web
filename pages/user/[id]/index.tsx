import * as React from 'react'
import { NextPage, NextPageContext } from 'next'
import ErrorPage from 'next/error'

import service from '../../../utils/service'
import { User } from '../../../interfaces'
import Layout from '../../../components/layout'

type Props = {
  user?: User
}

const UserPage: NextPage<Props> = ({ user }) => {
  return user ? (
    <Layout>
      <h1>{user.username}</h1>
    </Layout>
  ) : (
    <ErrorPage statusCode={404} />
  )
}

UserPage.getInitialProps = async ({ query }: NextPageContext) => {
  const { data } = await service.get('/users', {
    params: {
      username: query.id
    }
  })
  const user: User[] = data
  if (user.length === 0) {
    return {}
  }
  return { user: user[0] }
}

export default UserPage
