import * as React from 'react'
import fetch from 'isomorphic-unfetch'
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
  const response = await fetch(
    `${process.env.API_URL}/users?username=${query.id}`
  )
  const user: User[] = await response.json()
  if (user.length === 0) {
    return {}
  }
  return { user: user[0] }
}

export default UserPage
