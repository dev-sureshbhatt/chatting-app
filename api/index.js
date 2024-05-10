import e from "express"

//routes
import newChatRouter from "./router/newChat.js"

const app = e()

app.listen(4000, ()=>{
    console.log("app listening at PORT 4000")
})

app.use('/chat', newChatRouter)





