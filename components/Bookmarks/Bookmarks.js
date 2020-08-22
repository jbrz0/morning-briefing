const links = [
  {title: 'Cool New Link 1', url: 'https://google.com'},
  {title: 'Cool New Link 2', url: 'https://google.com'},
  {title: 'Cool New Link 3', url: 'https://google.com'},
  {title: 'Cool New Link 4', url: 'https://google.com'},
  {title: 'Cool New Link 5', url: 'https://google.com'},
  {title: 'Cool New Link 6', url: 'https://google.com'},
  {title: 'Cool New Link 7', url: 'https://google.com'},
  {title: 'Cool New Link 8', url: 'https://google.com'},
]

function Bookmarks() {
  return <div className="bg-purple-400 rounded-xl p-4">
    <div className="grid grid-cols-4">

      {links.map((link, i) => <a
        className="col-span-1 bg-purple-300 m-2 rounded-lg
        border border-solid border-purple-200 text-white"
        href={link.url}
        key={i}>

        <img
          src={`https://www.google.com/s2/favicons?domain=${link.url}`}
          className="float-left mr-3"
        />

        {link.title}
      </a>)}
    </div>
  </div>
}

export default Bookmarks
