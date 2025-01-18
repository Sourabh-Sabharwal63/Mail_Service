const express=require("express");
const app=express();
const {Port}=require("./config/serverConfig");
const sendBasicEmail=require("./services/emailService");




function startServer(){
  app.listen(Port,()=>{
   console.log("start listening on port ",Port);
  });
  // sendBasicEmail(
  //   "super@gmail.com",
  //   "gold569roger@gmail.com",
  //   "this is testing email",
  //   "hey how are you "
  // )

}

startServer();