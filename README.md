# Sabarinathan Sundaram

Personal portfolio for Sabarinathan Sundaram, a Backend Developer. The site is a React application. Ask Sabari is a separate API that answers questions from the portfolio.

## Stack

- React, TypeScript, Vite, and Tailwind CSS
- Node.js, Express, and TypeScript for the Ask Sabari API

## Run locally

Frontend:

```sh
npm install
npm run dev
```

The site runs at http://localhost:8080.

API, from the `backend` folder:

```sh
npm install
npm run dev
```

The API runs at http://localhost:5000. Copy `backend/.env.example` to `backend/.env` and set `OPENROUTER_API_KEY` there. Do not commit `.env`.

## Production

Frontend build:

```sh
npm run build
```

Set `VITE_API_BASE_URL` to the public API origin before building for production.

API:

```sh
npm run build
npm start
```

Set `PORT`, `OPENROUTER_API_KEY`, `OPENROUTER_MODEL`, and `CORS_ORIGIN` on the API host. `CORS_ORIGIN` must include the exact site origin, including `https`.
