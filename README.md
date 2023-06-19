## Live URL
https://next-ecom-dealdriver-production.up.railway.app
## How to run on your local ?
 - Clone
 - open terminal in that folder
 - run `npm install`
 - run `npm run postinstall`
 - You have to add local or remote postgres db url in .env file (Ex: `DATABASE_URL="postgresql://postgres:postgres@localhost:5432/dealdriver?schema=public"`)
 - run `npx prisma db push`
 - run `npm run db-seed`
 - now run `npm run dev`, that's it now you can see the app in action in `localhost:3000`