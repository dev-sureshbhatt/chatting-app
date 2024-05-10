import { Router} from "express";
import { connectChatAPI } from "../utils/connectChatAPI.js";

const router = Router()



router.post('/new', async (req,res,next)=>{ 

    try {
        
        if (req.body.message){

            console.log("forwarding work to api")
            
            //if the promise rejects, the loop will execute in the catch block 
            const response = await connectChatAPI(req.body.message)
            res.send({"msg":response})
            

        }  else return res.json({msg: "cannot initiate an empty chat"})

    } catch (error) {

        console.log("Error is", error)
        res.json("something went wrong")
    }

})



export default router

