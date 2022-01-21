import React from "react"
import Helmet from "react-helmet"

interface Props {
  organization: GatsbyTypes.SiteSiteMetadataOrganization
}

export default function SchemaOrg({ organization }: Props) {
  const baseSchema = [
    {
      "@context": "http://schema.org",
      "@type": "Organization",
      url: organization.url,
      name: organization.name,
      logo: organization.logo,
      contactPoint: [
        {
          "@type": "ContactPoint",
          telephone: organization.phone,
          contactType: "customer support",
        },
      ],
    },
  ]

  return (
    <Helmet>
      {/* SchemaOrg.org tags */}
      <script type="application/ld+json">{JSON.stringify(baseSchema)}</script>
    </Helmet>
  )
}
