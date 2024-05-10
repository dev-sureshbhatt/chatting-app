import { Router} from "express";

const router = Router()

router.get('/new',(req,res,next)=>{
    console.log(req.body)
    res.send("hi")
})




export default router

