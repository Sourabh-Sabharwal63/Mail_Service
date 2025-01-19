const {CronJob}=require("cron"); 
const NotificationTicketService=require("../../services/emailService");

const jobMailReminder=new CronJob(
  "*/30 * * * * *",
  ()=>{
   NotificationTicketService.SendMailReminder();
   //console.log("starting job now ")
  },
    null,
    true,
    "Asia/Kolkata"

);

module.exports={jobMailReminder};