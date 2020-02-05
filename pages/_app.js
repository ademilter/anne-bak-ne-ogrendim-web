import React from 'react'
import Router from 'next/router'

import * as gtag from '../lib/gtag'
import Seo from '../components/seo'

import 'trix/dist/trix.css'

Router.events.on('routeChangeComplete', url => gtag.pageview(url))

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Seo />
      <Component {...pageProps} />
      <style jsx global>
        {`
          * {
            box-sizing: border-box;
          }
          html {
            font: 16px / normal -apple-system, BlinkMacSystemFont, Segoe UI,
              Roboto, Helvetica Neue, Arial, sans-serif;
            line-height: 1.5;
            color: #ddd;
            background-color: #222;
            -webkit-font-smoothing: antialiased;
          }
          body {
            margin: 0;
            padding: 2rem;
          }
          a {
            color: inherit;
          }
          .app {
            max-width: 36rem;
            margin-left: auto;
            margin-right: auto;
          }
          .header {
            display: flex;
            align-items: baseline;
            margin-bottom: 2rem;
          }
          .nav {
            margin-left: auto;
          }
          .nav a + a {
            margin-left: 1rem;
          }
          .logo {
            font-weight: bold;
            font-size: 1.2rem;
          }
          .editor {
            max-width: 760px;
            margin: 0 auto;
          }
          trix-editor {
            margin-top: 0.5rem;
            padding: 0;
            border: 0;
            min-height: 300px;
            color: inherit;
          }
          .trix-button-group.trix-button-group--file-tools {
            display: none;
          }
          trix-toolbar .trix-button {
            background: #aaa;
            color: white;
          }
          trix-toolbar .trix-button.trix-active {
            background: #ccc;
            color: white;
          }
          trix-editor:empty:not(:focus)::before {
            color: #999;
          }
        `}
      </style>
    </>
  )
}

export default MyApp
