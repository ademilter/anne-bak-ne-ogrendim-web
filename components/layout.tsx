import * as React from 'react'
import { NextPage } from 'next'
import Link from 'next/link'

type Props = {
  children: React.ReactNode
}

const Layout: NextPage<Props> = ({ children }) => {
  return (
    <div>
      <div>
        <Link href="/">
          <a>Home</a>
        </Link>
      </div>
      <main>{children}</main>
    </div>
  )
}

export default Layout
