import { useState, useEffect } from 'react'
import { useKeyPress } from '../../hooks/useKeyPress'

function Google() {

  const [term, setTerm] = useState('')

  function search() {
    const url = 'https://www.google.com/search?q='
    window.location.href = url + term
  }

  const enterPress = useKeyPress('Enter')
  useEffect(() => {
    if (term !== '') search()
  }, [enterPress])
  return <div className="bg-purple-400 p-6 relative mb-6 rounded-xl" 
    style={{border: '1px solid rgba(251, 250, 250, 0.04)', boxShadow: '0px 0px 154px 0px rgba(12, 12, 16, 0.05) inset, 40px 45px 234px 0px rgba(18, 19, 25, 0.12)'}}>
    <input type="text"
      className="bg-purple-300 text-white placeholder-gray-100 w-full
        rounded-lg outline-none pr-20 py-4 pl-4 border border-solid border-purple-200"
      style={{textIndent: '0.5rem'}}
      placeholder="Enter Search Term"
      onChange={(e) => setTerm(e.target.value.split(' ').join('+'))}
      onSubmit={search}
      />

    <button className="absolute right-0 mr-6 py-4 px-6
      text-teal font-medium"
      onClick={search}>Search</button>
  </div>
}

export default Google
