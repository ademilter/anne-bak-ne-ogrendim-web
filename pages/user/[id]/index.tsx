import * as React from 'react'
import fetch from '../../../utils/fetch'
import { NextPage, NextPageContext } from 'next'
import { User } from '../../../interfaces'
import Layout from '../../../components/layout'
import ErrorPage from 'next/error'

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
  const { data } = await fetch(`/users?username=${query.id}`)
  const user: User[] = data
  if (user.length === 0) {
    return {}
  }
  return { user: user[0] }
}

export default UserPage
