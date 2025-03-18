# TODO

- [] [Protomaps](https://docs.protomaps.com/pmtiles/maplibre) slefhost
- [] Render with [react-map-gl](https://visgl.github.io/react-map-gl/docs)


Option 2: Use a View for Easy Querying
To make querying simpler, you can create a view that "joins" the images table with destinations based on the polymorphic relationship. Views behave like tables but are dynamically generated.

Create the View:

CREATE VIEW destination_images AS
SELECT 
    d.id AS destination_id,
    d.name AS destination_name,
    i.image_url,
    i.image_title
FROM destinations d
JOIN images i
ON i.entity_type = 'destination' AND i.entity_id = d.id;
Querying the View:

With this view, you can perform your original query:

const { data, error } = await supabase
  .from('destination_images')
  .select('destination_name, image_url');

## Referance 

- [Self-host Maps with Protomaps and Supabase Storage](https://youtu.be/l7QBpiLRwJc?si=LirN_7ngDc_whoB1)
- [FREE maps for any app - replace Google maps TODAY](https://youtu.be/UAQogFwyna0?si=qufSQZdibqa4-z0a)


This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
