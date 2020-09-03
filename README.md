This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).
&nbsp;&nbsp;
## Getting Started
&nbsp;&nbsp;
First, run the development server:
&nbsp;&nbsp;
```bash
npm run dev
# or
yarn dev
```
&nbsp;&nbsp;
## Setup to run on startup
&nbsp;&nbsp;
Because the News API only allows API requests from localhost, we can run the app on startup locally. Then bookmark localhost with a unique port (set in `/data/server.js`). Default port here is 11843.
```
Based on operating system
https://pm2.keymetrics.io/docs/usage/startup/
```
&nbsp;&nbsp;
1. `pm2 startup`
2. Copy & paste provided path in terminal
3. Startup the app via `node start` (uses pm2)
4. Save to the pm2 startup list `pm2 save`
&nbsp;&nbsp;
To disable, or reset pm2 startup scripts, use `pm2 unstartup`
&nbsp;&nbsp;

