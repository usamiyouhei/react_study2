// import React from 'react'

import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <Link to='/sample-page' targget="_blank">Sample Pageへ！</Link>
    </div>
  )
}

export default Home
