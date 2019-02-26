import React from "react";
import Helmet from "react-helmet";

export default function SchemaOrg({ organization }) {
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
          contactType: "customer support"
        }
      ]
    }
  ];

  let schema;
  schema = baseSchema;
  // console.log("schema", JSON.stringify(schema));

  return (
    <Helmet>
      {/* SchemaOrg.org tags */}
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
}
