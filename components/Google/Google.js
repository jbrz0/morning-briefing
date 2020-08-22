function Google() {
  return <div className="bg-purple-400 p-6 relative mb-6 rounded-xl">
    <input type="text"
      className="bg-purple-300 text-white placeholder-gray-100 w-full
        rounded-lg outline-none pr-32 py-4 pl-4 border border-solid border-purple-200"
      style={{textIndent: '0.5rem'}}
      placeholder="Enter Search Term" />

    <button className="absolute right-0 mr-6 py-4 px-6
      text-teal font-medium">Google Search</button>
  </div>
}

export default Google
