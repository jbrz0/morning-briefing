import Head from 'next/head'
import Container from '../components/Global/Container'
import News from '../components/News/News'
import Google from '../components/Google/Google'
import Bookmarks from '../components/Bookmarks/Bookmarks'
import Clock from '../components/Clock/Clock'
import Weather from '../components/Weather/Weather'
// import styles from '../styles/Home.module.css'
{/* <div className={styles.container}></div> */}

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container>
        <News />

        <div className="col-span-2">
          <Google />
          <Bookmarks />
          <div className="grid grid-cols-2 gap-6">
            <div className="col-span-1">
              <Clock />
              <Weather />
            </div>
            <div className="col-span-1">
              {/* Calendar */}
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}
