import React from 'react'

const MainPage = () => {
  return (
    <div class='container'>
      <h1>Iframe Page</h1>
      <hr></hr>
      <div class='embed-responsive embed-responsive-16by9'>
        <iframe class='embed-responsive-item w-100' src='https://next-app-seven-flax.vercel.app'></iframe>
      </div>
    </div>
  )
}

export default MainPage
