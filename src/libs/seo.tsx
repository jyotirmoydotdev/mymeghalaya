import config from "../config";

type SEOTags = {
  title?: string;
  description?: string;
  keywords?: string[];
  openGraph?: {
    title?: string;
    description?: string;
    url?: string;
    image?: string;
  };
  canonicalUrlRelative?: string;
  extraTags?: Record<string, any>;
};

export const getSEOTags = ({
  title,
  description,
  keywords,
  openGraph,
  canonicalUrlRelative,
  extraTags,
}: SEOTags = {}) => {
  const previewImage = `https://${config.domainName}/preview.jpg`; // Ensure `preview.jpg` exists at this path
  return {
    generator: title || config.appName,
    title: title || config.appName,
    description: description || config.appDescription,
    referrer: 'origin-when-cross-origin',
    keywords: ['Meghalaya', 'MyMeghalaya', 'Guide', 'Travel', 'Nature'],
    authors: [{ name: 'Jyotirmoy Barman', url: 'https://jyotirmoy.dev' }],
    creator: 'Jyotirmoy Barman',
    publisher: 'Jyotirmoy Barman',
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    applicationName: config.appName,
    metadataBase: new URL(
      process.env.NODE_ENV === "development"
        ? "http://localhost:3000/"
        : `https://${config.domainName}/`
    ),
    alternates: {
      canonical: '/',
      languages: {
        'en-US': '/en-US'
      },
    },
    openGraph: {
      title: openGraph?.title || config.appName,
      description: openGraph?.description || config.appDescription,
      url: openGraph?.url || `https://${config.domainName}/`,
      siteName: openGraph?.title || config.appName,
      locale: "en_US",
      type: "website",
      image: [
        {
          url: previewImage,
          width: 1800,
          height: 990,
          alt: 'My custom alt',
        }
      ],
    },
    twitter: {
      title: openGraph?.title || config.appName,
      description: openGraph?.description || config.appDescription,
      card: "summary_large_image",
      siteId: "1467726470533754880",
      creator: "@jyotirmoydotdev",
      creatorId: '1426574448367333377',
      image: [previewImage], // Adding the preview image for Twitter
    },
    robots: {
      index: true,
      follow: true,
      nocache: true,
      googleBot: {
        index: true,
        follow: true,
        noimageindex: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    appleWebApp: {
      title: 'MyMeghalaya',
      statusBarStyle: 'black-translucent',
      startupImage: [
        '/web-app-manifest-512x512.png',
        {
          url: '/web-app-manifest-512x512.png',
          media: '(device-width: 768px) and (device-height: 1024px)',
        },
      ],
    },
    bookmarks: ['https://mymeghalaya.in'],
    category: 'Guide',
    ...(canonicalUrlRelative && {
      alternates: { canonical: canonicalUrlRelative },
    }),
    ...extraTags,
  };
};
