module.exports = {
  siteMetadata: {
    title: "Carlos Gonzalez · Web Developer",
    defaultTitle: "Carlos Gonzalez · Web Developer",
    description: `
    Carlos Gonzalez is a web developer based in Howick, South Africa. 
    His focus is on modern-looking, blazing-fast loading, SEO-ready sites.
    `,
    canonicalUrl: "https://www.carloswebdev.com",
    image: "https://www.carloswebdev.com/img/carlos-gonzalez-about.jpg",
    author: {
      name: "Carlos Gonzalez",
      minibio: `
            <strong>Carlos Gonzalez</strong> is a web developer based 
            in Howick, South Africa
          `
    },
    organization: {
      name: "Carlos Gonzalez · Web Developer",
      url: "https://www.carloswebdev.com",
      logo: "https://www.carloswebdev.com/img/logo.png",
      phone: "+27 76 459 9127"
    },
    siteUrl: "https://www.carloswebdev.com" // for gatsby plugin sitemap
  },
  plugins: [
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: "https://www.carloswevdev.com",
        sitemap: "https://www.carloswebdev/sitemap.xml",
        policy: [{ userAgent: "*", allow: "/" }]
      }
    },
    {
      resolve: `gatsby-plugin-google-tagmanager`,
      options: {
        id: "GTM-WQT85KS",

        // Include GTM in development.
        // Defaults to false meaning GTM will only be loaded in production.
        includeInDevelopment: false

        // Specify optional GTM environment details.
        // gtmAuth: "YOUR_GOOGLE_TAGMANAGER_ENVIROMENT_AUTH_STRING",
        // gtmPreview: "YOUR_GOOGLE_TAGMANAGER_ENVIROMENT_PREVIEW_NAME",
      }
    },
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        google: {
          families: ["Open Sans"]
        }
      }
    },
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-favicon`,
      options: {
        logo: "./src/favicon.png",

        // WebApp Manifest Configuration
        appName: null, // Inferred with your package.json
        appDescription: null,
        developerName: null,
        developerURL: null,
        dir: "auto",
        lang: "en-US",
        background: "#fff",
        theme_color: "#fff",
        display: "standalone",
        orientation: "any",
        start_url: "/?homescreen=1",
        version: "1.0",

        icons: {
          android: true,
          appleIcon: true,
          appleStartup: false,
          coast: false,
          favicons: true,
          firefox: false,
          opengraph: false,
          twitter: false,
          yandex: false,
          windows: false
        }
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "Carlos Gonzalez · Web Developer",
        short_name: "carlos",
        start_url: "/",
        background_color: "#6b37bf",
        theme_color: "#6b37bf",
        // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
        // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
        display: "standalone",
        icon: "src/assets/img/icon.png" // This path is relative to the root of the site.
      }
    },
    `gatsby-plugin-offline`,
    // // "gatsby-plugin-remove-serviceworker",
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-react-helmet`,
    {
      // keep as first gatsby-source-filesystem plugin for gatsby image support
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/static/img`,
        name: "uploads"
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/general`,
        name: "general"
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/pages`,
        name: "pages"
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src_images`,
        path: `${__dirname}/src/assets/img/`
      }
    },
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        useMozJpeg: false,
        stripMetadata: true
      }
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-relative-images",
            options: {
              name: "uploads"
            }
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 930
              // backgroundColor: "transparent" // required to display blurred image first
            }
          },
          "gatsby-remark-component"
        ]
      }
    },
    `gatsby-plugin-netlify-cms`,
    "gatsby-plugin-netlify-identity-widget",
    {
      resolve: "gatsby-plugin-netlify-cache",
      options: {
        cachePublic: true
      }
    },
    "gatsby-plugin-netlify" // make sure to keep it last in the array
  ]
};
