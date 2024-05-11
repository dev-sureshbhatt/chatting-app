import e from "express"
import cors from "cors"

//routes
import newChatRouter from "./router/newChat.js"

const app = e()
app.use(e.json())
app.use(cors({origin: 'http://localhost:5173', credentials: true}))

app.listen(4000, ()=>{
    console.log("app listening at PORT 4000")
})

app.use('/chat', newChatRouter)





