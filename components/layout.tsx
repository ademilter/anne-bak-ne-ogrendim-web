import React from 'react'
import { useRouter } from 'next/router'
import { NextPage } from 'next'
import Link from 'next/link'

type Props = {
  children: React.ReactNode
}

const Layout: NextPage<Props> = ({ children }) => {
  const router = useRouter()

  return (
    <div className="app">
      {/* header */}
      <header className="header">
        <Link href="/">
          <a className="logo">Anne Bak Ne Öğrendim</a>
        </Link>
        {router.pathname !== '/new' && (
          <nav className="nav">
            <Link href="/new">
              <a>New</a>
            </Link>
          </nav>
        )}
      </header>

      {/* content */}
      <main>{children}</main>
    </div>
  )
}

export default Layout
