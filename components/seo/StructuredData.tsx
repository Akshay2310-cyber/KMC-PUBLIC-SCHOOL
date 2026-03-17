import { schoolInfo } from '@/lib/constants'

export default function StructuredData() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "name": "KMC Public School",
    "alternateName": "KMC Public Senior Secondary School",
    "url": "https://www.kmcpublicschool.org",
    "logo": "https://kmc-public-school.vercel.app/kmc-logo.png",
    "description": "An exclusive CBSE school in Tirupur providing world-class education from Pre-KG to Grade XII with international standards since 2008",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": schoolInfo.address.street,
      "addressLocality": "Perumanallur",
      "addressRegion": "Tamil Nadu",
      "postalCode": "641666",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "11.0168",
      "longitude": "77.3411"
    },
    "telephone": schoolInfo.contact.phone[0],
    "email": schoolInfo.contact.email,
    "foundingDate": "2008",
    "founder": {
      "@type": "Person",
      "name": "Shri. M. Chinnaswamy Gounder"
    },
    "priceRange": "₹₹",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "150"
    },
    "sameAs": [
      schoolInfo.social.facebook,
      schoolInfo.social.instagram,
      schoolInfo.social.youtube,
      schoolInfo.social.twitter
    ]
  }

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "School",
    "name": "KMC Public School",
    "image": "https://kmc-public-school.vercel.app/kmc-logo.png",
    "priceRange": "₹₹",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": schoolInfo.address.street,
      "addressLocality": "Tirupur",
      "addressRegion": "TN",
      "postalCode": "641666",
      "addressCountry": "IN"
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "08:00",
        "closes": "16:00"
      }
    ]
  }

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://kmc-public-school.vercel.app"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "About",
        "item": "https://kmc-public-school.vercel.app/about"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Admissions",
        "item": "https://kmc-public-school.vercel.app/admissions"
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": "Contact",
        "item": "https://kmc-public-school.vercel.app/contact"
      }
    ]
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </>
  )
}
