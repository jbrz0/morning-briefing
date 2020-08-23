import { useEffect } from "react"
import { useExcerpt } from '../../hooks/useExcerpt'

const dummyText = 'The hottest look right now is definitely bold eyeliner and it\'s easier to do than'

function NewsItem() {
  return <div className="bg-purple-300 p-4 rounded-lg border border-solid border-purple-200
    text-white grid gap-4 grid-cols-5 my-4">

    <div className="col-span-1">
      <img src="https://picsum.photos/300/300" alt="News Article Image"
        className="w-16 h-12 rounded"/>
    </div>

    <div className="col-span-4">

      <p className="text-sm mt-1">{useExcerpt(dummyText, 11)}</p>
    </div>

  </div>
}

function News() {


  return <div className="bg-purple-400 col-span-1 px-8 py-4 rounded-xl">
    <NewsItem />
    <NewsItem />
    <NewsItem />
    <NewsItem />
    <NewsItem />
    <NewsItem />
    <NewsItem />
    <NewsItem />
  </div>
}

export default News
