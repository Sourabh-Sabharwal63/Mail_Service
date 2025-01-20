const express=require("express");
const app=express();
const {Port}=require("./config/serverConfig");
const Jobs=require("./utils/jobs/emailsJobs");
const bodyParser=require("body-parser");
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

async function startServer(){
  app.post("")
  app.listen(Port,()=>{
   console.log("start listening on port ",Port);
  });
   Jobs.jobMailReminder.start();
}

startServer();