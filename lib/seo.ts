export const SITE_URL = "https://portfolio-marcosdev.vercel.app";
export const SITE_NAME = "Marcos Morua Portfolio";

export const PERSON = {
  legalName: "Marcos Adrián Morua Pino",
  name: "Marcos Morua",
  jobTitle: "Desarrollador Full Stack",
  description:
    "Desarrollador Full Stack especializado en Next.js, React y TypeScript, con más de 3 años de experiencia construyendo MVPs y productos digitales escalables.",
  image: `${SITE_URL}/about.jpg`,
  sameAs: [
    "https://www.linkedin.com/in/marcos-morua-a7b326295",
    "https://github.com/MarcosDevYT",
    "https://www.instagram.com/marcos.m.dev",
  ],
};

export function personJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${SITE_URL}/#person`,
    name: PERSON.name,
    alternateName: PERSON.legalName,
    url: SITE_URL,
    image: PERSON.image,
    jobTitle: PERSON.jobTitle,
    description: PERSON.description,
    sameAs: PERSON.sameAs,
    knowsAbout: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "Node.js",
      "PostgreSQL",
      "Tailwind CSS",
      "Desarrollo Full Stack",
      "Arquitectura de Software",
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Puerto Madryn",
      addressRegion: "Chubut",
      addressCountry: "AR",
    },
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    url: SITE_URL,
    name: SITE_NAME,
    description: `Portafolio de ${PERSON.legalName} (${PERSON.name}), ${PERSON.jobTitle} especializado en Next.js, React y TypeScript.`,
    inLanguage: "es-AR",
    publisher: { "@id": `${SITE_URL}/#person` },
  };
}

export function breadcrumbJsonLd(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${SITE_URL}${item.url}`,
    })),
  };
}

export function projectJsonLd(trabajo: {
  id: number;
  title: string;
  description: string;
  stack: string[];
  mainImage: string;
  link: string;
  fechaCompleta: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    "@id": `${SITE_URL}/trabajos/${trabajo.id}#project`,
    name: trabajo.title,
    description: trabajo.description,
    image: `${SITE_URL}${trabajo.mainImage}`,
    url: `${SITE_URL}/trabajos/${trabajo.id}`,
    dateCreated: trabajo.fechaCompleta,
    keywords: trabajo.stack.join(", "),
    creator: { "@id": `${SITE_URL}/#person` },
  };
}

export function projectListJsonLd(
  trabajos: { id: number; title: string }[],
) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: trabajos.map((trabajo, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: trabajo.title,
      url: `${SITE_URL}/trabajos/${trabajo.id}`,
    })),
  };
}

export function faqJsonLd(items: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}
