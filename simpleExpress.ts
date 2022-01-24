import * as express from "express";
const app=express();
const router=express.Router();
router.get("/a",(_request,response)=>response.send("api a is inoked"));
app.use(router);
app.listen(process.env.port,()=>console.log("simple server created"));
