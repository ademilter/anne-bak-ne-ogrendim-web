import * as React from 'react'
import { NextPage } from 'next'
import Link from 'next/link'

type Props = {
  children: React.ReactNode
}

const Layout: NextPage<Props> = ({ children }) => {
  return (
    <div>
      <div style={{ marginBottom: 20 }}>
        <Link href="/">
          <a>Home</a>
        </Link>
        -
        <Link href="/new">
          <a>New</a>
        </Link>
      </div>
      <main>{children}</main>
      <style jsx global>
        {`
          * {
            margin: 0;
            padding: 0;
          }
          ul {
            list-style: none;
          }
        `}
      </style>
    </div>
  )
}

export default Layout
