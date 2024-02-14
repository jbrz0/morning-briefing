import { useState, useEffect } from 'react'
import Link from 'next/link'
import axios from 'axios'
import { useExcerpt } from '../../hooks/useExcerpt'
import demoNews from './demoNews'

function NewsItem(props) {

  return <>
    <Link href={props.url} className="news-link">
      <div className="bg-purple-300 p-4 rounded-lg border border-solid border-purple-200
        text-white grid gap-4 grid-cols-5 my-4 hover:opacity-75">

        <div className="col-span-1">
          <img src={props.img} alt="News Article Image"
            className="w-16 h-12 rounded object-cover"/>
        </div>

        <div className="col-span-4">

          <p className="text-sm mt-1">{useExcerpt(props.title, 11)}</p>
        </div>

      </div>
    </Link>
  </>
}

function News() {

  const [news, setNews] = useState([])

  useEffect(() => {

    const loc = location.hostname
    const url = `https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=`

    if (loc === 'localhost') {
      axios.get(`${url}${process.env.NEWS}`)
      .then(function (response) {
        setNews(response.data.articles.slice(0, 8))
      })
    }
    else {
      setNews(demoNews[0].articles.slice(0, 8))
    }

    // .then(() => console.log(news))
  }, [])

  return <div 
    className="mb-16 xl:mb-0 news-wrapper bg-purple-400 col-span-3 xl:col-span-1 px-8 py-4 rounded-xl order-last xl:order-first"
    style={{border: '1px solid rgba(251, 250, 250, 0.04)', boxShadow: '0px 0px 154px 0px rgba(12, 12, 16, 0.05) inset, 40px 45px 234px 0px rgba(18, 19, 25, 0.12)'}}
    >
    {news.length > 1 && <>
      {news.map((item, i) => <NewsItem
        title={item.title}
        img={item.urlToImage}
        url={item.url}
        key={i} />)}
    </>}
  </div>
}

export default News
