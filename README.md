This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Env a.k.a Environment

Use file in `environment/const.js`
with this key

```
const BaseURL = "";
const PathHome = "";
const PathMovie = "";
const PathSearch = "";
const PathDetail = """;

export default class ENV {
static Home = BaseURL + PathHome;
static Movie = BaseURL + PathMovie;
static Search = BaseURL + PathSearch;
static Detail = BaseURL + PathDetail;
static NODE_ENV = NODE_ENV;
}
```

and you can use import with `import ENV from "../environment/const";`

### i don't use .env btw 🤣

# Deployed on github pages as static website

you can see many command in `package.json` or use `depoloy.py` if you can read the python code what that script do

you can check live web on: [Info Anime](https://infoanime.site)

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
