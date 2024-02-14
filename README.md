# Morning Briefing

A browser homepage dashboard, with customizable config options

### [Demo](https://justinbrazeau.com/lab/morning-briefing)

&nbsp;&nbsp;

<img src="https://oddscenes.s3.amazonaws.com/screenshot-morning-briefing.png" width="500" />

&nbsp;&nbsp;

## Running

Because the [News API][1] only allows API requests from localhost, we can run the app on startup locally to see live results (or use paid version/other api feed). Fallback demo feed is used on example.

1. edit .env.sample

- [News API][1]
- [Open Weather API][1]
- Links & Title (for bookmarks)

### Usage:
- Dev: `npm run dev`
- Build: `npm run build`
- Production: `npm start`


### Depencencies:
- NextJS / ReactJS
- TailwindCSS
- News API
- Open Weather API
- Unsplash Source API


[1]: https://newsapi.org
[2]: https://openweathermap.org/api
