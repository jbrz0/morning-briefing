import Head from 'next/head'
import Container from '../components/Global/Container'
import News from '../components/News/News'
import Google from '../components/Google/Google'
import Bookmarks from '../components/Bookmarks/Bookmarks'
import Clock from '../components/Clock/Clock'
import Weather from '../components/Weather/Weather'
import Calendar from '../components/Calendar/Calendar'
// import styles from '../styles/Home.module.css'
{/* <div className={styles.container}></div> */}

export default function Home() {
  return (
    <div>
      <Head>
        <title>Morning Briefing</title>
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:ital,wght@0,300;0,500;1,400&display=swap" rel="stylesheet" />
      </Head>

      <div className="main-wrapper xl:flex xl:justify-center xl:items-center xl:h-screen">
        <Container>
          <News />

          <div className="col-span-3 xl:col-span-2">
            <Google />
            <Bookmarks />
            <div className="grid grid-cols-2 gap-6">
              <div className="col-span-2 md:col-span-1">
                <Clock />
                <Weather />
              </div>
              <div className="col-span-2 md:col-span-1">
                <Calendar />
              </div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  )
}
