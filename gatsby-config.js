module.exports = {
  siteMetadata: {
    title: 'Frithir Software Development',
    siteUrl: 'https://frithir.com',
    email: 'alex@frithir.com',
    phone: '',
    address: 'Gold Coast, Australia',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        // Setting a color is optional.
        color: `white`,
        // Disable the loading spinner.
        showSpinner: false,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Frithir Software Development',
        short_name: 'Frithir',
        start_url: '/',
        background_color: '#555',
        theme_color: '#555',
        display: 'standalone',
        icon: 'static/favicon-128.png', // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-sitemap`,
  ],
}
