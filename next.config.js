const { remarkCodeHike } = require("@code-hike/mdx")

const withNextra = require('nextra')({
  theme: 'nextra-theme-blog',
  themeConfig: './theme.config.tsx',
  mdxOptions: {
    remarkPlugins: [
      [
        remarkCodeHike,
        {
          theme: "one-dark-pro",
          staticMediaQuery: "not screen, (max-width: 1280px)",
          lineNumbers: true,
          showCopyButton: true,
          autoImport: true,
          autoLink: false,
        }
      ]
    ],
  },
})

module.exports = withNextra()
