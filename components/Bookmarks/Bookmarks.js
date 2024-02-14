import { useEffect } from "react"

const links = [
  {title: process.env.LINK_ONE_TITLE, url: process.env.LINK_ONE_URL},
  {title: process.env.LINK_TWO_TITLE, url: process.env.LINK_TWO_URL},
  {title: process.env.LINK_THREE_TITLE, url: process.env.LINK_THREE_URL},
  {title: process.env.LINK_FOUR_TITLE, url: process.env.LINK_FOUR_URL},
  {title: process.env.LINK_FIVE_TITLE, url: process.env.LINK_FIVE_URL},
  {title: process.env.LINK_SIX_TITLE, url: process.env.LINK_SIX_URL},
  {title: process.env.LINK_SEVEN_TITLE, url: process.env.LINK_SEVEN_URL},
  {title: process.env.LINK_EIGHT_TITLE, url: process.env.LINK_EIGHT_URL},
]

function Bookmarks() {


  return <div className="bg-purple-400 rounded-xl p-4 mb-6" 
    style={{border: '1px solid rgba(251, 250, 250, 0.04)', boxShadow: '0px 0px 154px 0px rgba(12, 12, 16, 0.05) inset, 40px 45px 234px 0px rgba(18, 19, 25, 0.12)'}}>
    <div className="grid grid-cols-2 md:grid-cols-4">

      {links.map((link, i) => <a
        className="col-span-1 bg-purple-300 m-2 rounded-lg
        border border-solid border-purple-200 text-white
        truncate py-4 px-4 text-sm hover:opacity-75 bookmark-link"
        href={link.url}
        key={i}>

        <img
          src={`https://www.google.com/s2/favicons?domain=${link.url}`}
          className="float-left mr-3"
          style={{marginTop: '0.1rem'}}
        />

        {link.title}
      </a>)}
    </div>
  </div>
}

export default Bookmarks
