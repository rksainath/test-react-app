import React, { useState, useRef, useEffect, useLayoutEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import LoginPage from './LoginPage'

function App() {
  const [token, setToken] = useState(null)
  const [authorizedName, setAuthorizedName] = useState('')

  const iframeRef = useRef()

  // const sendDataToIframe = (data) => {
  //   const iframeWindow = iframeRef.current.contentWindow
  //   iframeWindow.postMessage(data, 'http://localhost:3000')
  //   console.log(iframeWindow)
  // }

  // useLayoutEffect(() => {
  //   if (!!authorizedName) {
  //     console.log(`authorizedName:${authorizedName}`)
  //     sendDataToIframe(authorizedName)
  //   }
  // }, [authorizedName])

  // sendDataToIframe(authorizedName)

  return (
    <div>
      {token && authorizedName ? (
        <div class='container'>
          <div className='d-flex justify-content-between'>
            <h1>Main Page</h1>
            <button className='btn btn-secondary' onClick={() => setToken(null)}>
              Logout
            </button>
          </div>
          <hr></hr>
          <h3>{`Welcome, ${authorizedName}`}</h3>
          <div class='embed-responsive embed-responsive-16by9'>
            <iframe id='sample-frame' class='embed-responsive-item h-100 w-100' src={`http://localhost:3000?username=${authorizedName}`} title='Next.js Application' />
            {/* <iframe ref={iframeRef} id='sample-frame' class='embed-responsive-item h-100 w-100' src={`http://localhost:3000`} title='Next.js Application' /> */}
          </div>
        </div>
      ) : (
        <LoginPage setToken={setToken} setAuthorizedName={setAuthorizedName} />
      )}
    </div>
  )
}

export default App
