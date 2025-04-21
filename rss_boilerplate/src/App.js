import { useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import { client } from './sanity'
import Header from './Header'
import Home from './pages/Home'
import Daniel from './pages/Daniel'
import './App.css'

function App() {
  const [members, setMembers] = useState([])

  useEffect(() => {
    client.fetch(`*[_type == "groupMember"]{
      _id,
      name,
      email,
      "imageUrl": image.asset->url,
      logs,
      bio,
      interests
    }`).then((data) => setMembers(data))
  }, [])

  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home members={members} />} />
        <Route path="/daniel" element={<Daniel members={members} />} />
      </Routes>
    </div>
  )
}

export default App
