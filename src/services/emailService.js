const sender=require("../config/emailConfig");

const sendBasicEmail=(maliFrom,mailTo,mailSubject,mailBody)=>{
  sender.sendMail({
    from:maliFrom,
    to:mailTo,
    subject:mailSubject,
    text:mailBody
  })
}

module.exports=sendBasicEmail;
