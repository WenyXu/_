import React from 'react'
import { NextraBlogTheme } from 'nextra-theme-blog'

const config: NextraBlogTheme ={
    footer: <small>2023 © Hangzhou.dev</small>,
    head: ({ title, meta }) => (
      <>
        {meta.description && (
          <meta name="description" content={meta.description} />
        )}
        <meta property="og:title" content={meta.title} />
        {meta.tag && <meta name="keywords" content={meta.tag} />}
        {meta.author && <meta name="author" content={meta.author} />}
      </>
    ),
    readMore: '📖 Read More →',
    postFooter: null,
    darkMode: true,
    titleSuffix:' - Hangzhou.dev'
}

export default config