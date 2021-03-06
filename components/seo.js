import React from 'react'
import Head from 'next/head'

function Seo() {
  const site = {
    title: 'Anne Bak Ne Öğrendim',
    description: 'Herkesin anlayacağı dilde yazılım',
    url: 'https://anne-bak-ne-ogrendim.com',
    twitter: '@AnneBakOgrendim'
  }

  return (
    <Head>
      <meta charSet="utf-8" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />

      <title>{site.title}</title>
      <meta name="description" content={site.description} />

      {/*<meta name="twitter:card" content="summary_large_image" />*/}
      <meta name="twitter:site" content={site.twitter} />
      <meta name="twitter:creator" content={site.twitter} />
      <meta name="twitter:title" content={site.title} />
      {/*<meta name="twitter:image" content={`${site.url}/static/og-image.jpg`} />*/}

      <meta property="og:type" content="business.business" />
      <meta property="og:title" content={site.title} />
      <meta property="og:url" content={site.url} />
      {/*<meta property="og:image" content={`${site.url}/static/og-image.jpg`} />*/}

      <meta name="theme-color" content="#085147" />

      {/*<link*/}
      {/*  rel="preload"*/}
      {/*  href="/static/fonts/manrope-bold.woff2"*/}
      {/*  as="font"*/}
      {/*  type="font/woff2"*/}
      {/*  crossOrigin="anonymous"*/}
      {/*/>*/}
      {/*<link*/}
      {/*  rel="preload"*/}
      {/*  href="/static/fonts/manrope-medium.woff2"*/}
      {/*  as="font"*/}
      {/*  type="font/woff2"*/}
      {/*  crossOrigin="anonymous"*/}
      {/*/>*/}

      {/*<link*/}
      {/*  rel="apple-touch-icon"*/}
      {/*  sizes="180x180"*/}
      {/*  href={`/static/apple-touch-icon.png`}*/}
      {/*/>*/}
      {/*<link*/}
      {/*  rel="icon"*/}
      {/*  type="image/png"*/}
      {/*  href={`/static/favicon-64x64.png`}*/}
      {/*  sizes="32x32"*/}
      {/*/>*/}
      {/*<link*/}
      {/*  rel="mask-icon"*/}
      {/*  href={`/static/safari-pinned-tab-fill.svg`}*/}
      {/*  color="#086054"*/}
      {/*/>*/}
    </Head>
  )
}

export default Seo
