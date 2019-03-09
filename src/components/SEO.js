import React from "react";
import Helmet from "react-helmet";

import SchemaOrg from "./SchemaOrg";

export default function SEO(props) {
  const {
    title,
    // defaultTitle,
    description,
    canonicalUrl,
    image,
    // author,
    organization,
    siteUrl
  } = props.siteMetadata;
  // const titleTemplate = `%s · ${title}`;
  return (
    <React.Fragment>
      {/* <Helmet key="app-head" titleTemplate={titleTemplate} defaultTitle={title}> */}
      <Helmet key="app-head" defaultTitle={title}>
        <html lang="en" />

        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        {/* General tags */}
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="image" content={image} />

        {/* Establish canonical url */}
        <link rel="canonical" href={canonicalUrl} />
        {/* OpenGraph tags */}
        <meta property="og:url" content={siteUrl} />
        {/* {pageType === "article" ? (
                  <meta property="og:type" content="article" />
                ) : ( */}
        <meta property="og:type" content="website" />
        {/* )} */}
        <meta property="og:site_name" content={title} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={image} />
        {/* google search console */}
        {/* <meta
              name="google-site-verification"
              content="5Fs1mwvNeUdz1y6CfK5miXOOFUra094G_nhpRiVyXXQ"
            /> */}
        {/* Font Awesome */}
        <script
          defer
          src="https://use.fontawesome.com/releases/v5.7.1/js/solid.js"
          integrity="sha384-6FXzJ8R8IC4v/SKPI8oOcRrUkJU8uvFK6YJ4eDY11bJQz4lRw5/wGthflEOX8hjL"
          crossorigin="anonymous"
        />
        <script
          defer
          src="https://use.fontawesome.com/releases/v5.7.1/js/brands.js"
          integrity="sha384-zJ8/qgGmKwL+kr/xmGA6s1oXK63ah5/1rHuILmZ44sO2Bbq1V3p3eRTkuGcivyhD"
          crossorigin="anonymous"
        />
        <script
          defer
          src="https://use.fontawesome.com/releases/v5.7.1/js/fontawesome.js"
          integrity="sha384-Qmms7kHsbqYnKkSwiePYzreT+ufFVSNBhfLOEp0sEEfEVdORDs/aEnGaJy/l4eoy"
          crossorigin="anonymous"
        />
      </Helmet>
      <SchemaOrg organization={organization} />
    </React.Fragment>
  );
}
