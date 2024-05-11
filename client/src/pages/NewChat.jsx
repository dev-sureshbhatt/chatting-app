import React from 'react'
import { useState } from 'react'

const NewChat = () => {

  const [message, setMessage] = useState("")
  function handleNewChat(ev){
    ev.preventDefault()
    console.log(message)
    fetch("http://localhost:4000/chat/new", {
      method: 'POST',
      body: JSON.stringify({message}),
      headers: {
        'Content-Type': 'application/json'
      }
    })
  }


  return (
    <div>
      <form  onSubmit={handleNewChat}>
        <input type='text' placeholder='type your message' onChange={(ev)=>setMessage(ev.target.value)} />
        <button>Send</button>
      </form>
    </div>
  )
}

export default NewChat