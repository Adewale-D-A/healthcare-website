"use client";

import Head from "next/head";

export default function StructuredMetaData() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "7thCare",
    url: "https://www.7thcare.com",
    description: "Custom healthcare automation solutions",
    sameAs: [
      "https://x.com/the7thcare",
      "https://www.linkedin.com/company/7thcare",
      "https://www.instagram.com/7thcare",
    ],
  };

  return (
    <Head>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </Head>
  );
}
