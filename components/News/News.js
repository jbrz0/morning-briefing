import { useState, useEffect } from 'react'
import Link from 'next/link'
import axios from 'axios'
import { useExcerpt } from '../../hooks/useExcerpt'

const dummyText = 'The hottest look right now is definitely bold eyeliner and it\'s easier to do than'

function NewsItem(props) {

  return <>
    <Link href={props.url}><a>
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
    </a></Link>
  </>
}

function News() {

  const [news, setNews] = useState([])

  useEffect(() => {

    const url = 'https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey='

    axios.get(`${url}${process.env.NEWS}`)
    .then(function (response) {
      setNews(response.data.articles.slice(0, 8))
    })
    .then(() => console.log(news))
  }, [])

  return <div className="bg-purple-400 col-span-1 px-8 py-4 rounded-xl">
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
