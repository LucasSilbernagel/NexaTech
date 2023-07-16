export default function Seo(title: string, description: string, image: string) {
  return {
    title: `NexaTech | ${title}`,
    description: description,
    openGraph: {
      title: `NexaTech | ${title}`,
      description: description,
      url: 'https://nexa-tech.vercel.app/',
      siteName: 'NexaTech',
      images: [
        {
          url: image,
          width: 800,
          height: 600,
        },
      ],
      locale: 'en_US',
      type: 'website',
    },
  }
}
