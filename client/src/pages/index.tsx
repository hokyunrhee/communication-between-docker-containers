import { useState, useEffect } from "react"
import { io } from "socket.io-client"

const Home = () => {
  const [message, setMessage] = useState("")

  useEffect(() => {
    const socket = io(process.env.NEXT_PUBLIC_BACKEND_URL || "", {
      transports: ["websocket"],
    })

    socket.on("connect", () => {
      socket.on("event", (message) => {
        setMessage(message)
      })
    })
  }, [])

  return (
    <div>
      message from server: <span>{message}</span>
    </div>
  )
}

export default Home
