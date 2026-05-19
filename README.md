# ClimbXDigital Website

Production-oriented Next.js 14+ App Router marketing website for ClimbXDigital, with cinematic dark UI, brand styling, page sections, and a contact API.

## Setup

1. Install dependencies:
```bash
npm install
```
2. Copy env file:
```bash
cp .env.example .env.local
```
3. Fill SMTP variables in `.env.local`.

## Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
npm run start
```

## Contact API

- Endpoint: `POST /api/contact`
- Validation: Zod schema in `lib/validations.ts`
- Mail sending: Nodemailer helper in `lib/mailer.ts`
- Rate limiting: in-memory window limiter in `app/api/contact/route.ts`

## Project Notes

- Main pages: `/`, `/about`, `/services`, `/work`, `/blog`, `/contact`
- Shared layout in `components/layout`
- Content datasets in `data/`
- Smooth scroll hook via Lenis and interaction hooks in `hooks/`
