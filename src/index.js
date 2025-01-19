const express=require("express");
const app=express();
const {Port}=require("./config/serverConfig");
const notificationTicketService=require("./services/emailService");
const {CronJob}=require("cron"); 
const NotificationTicketRepository=require("./Repository/notificationTicket");
const Jobs=require("./utils/jobs/emailsJobs");

async function startServer(){
  app.listen(Port,()=>{
   console.log("start listening on port ",Port);
  });
   Jobs.jobMailReminder.start();

  // const job=new CronJob(
  //   '*/10 * * * * *',
  //   ()=>{
  //     console.log("Running task every 10 sec")
  //   },
  //   null,
  //   true,
  //   "Asia/Kolkata"
  // );
  // job.start();
  // await notificationTicketService.sendBasicEmail(
  //   "super@gmail.com",
  //   "gold569roger@gmail.com",
  //   "this is testing email",
  //   "hey how are you "
  // )
// const dummyData={
//   subject:"Flight Boarding Pass",
//   content:"1234",
//   recipientEmail:"gold569roger@gmail.com",
//   status:"PENDING",
//   notificationTime:new Date().toLocaleString("en-US", { timeZone: "Asia/Kolkata" })
// }
// console.log("dummyDate = ",dummyData.notificationTime);

  // const ticketRepository=new NotificationTicketRepository();
  // //const newTicket=await ticketRepository.createNotificationTicket(dummyData);
  // //console.log("newTicket ",newTicket);
  // const ticketList=await ticketRepository.getFiltered(new Date());
  // console.log("ticketList",ticketList);
}

startServer();