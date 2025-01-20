const emailService=require("../services/emailService");

const createNotification=async(req,res)=>{
  try {
    const notificationTicket=await emailService.createNotificationTicket(req.body);
    res.status(200).json({
      message:"Notification is created ",
      data:notificationTicket,
      success:true,

    })
  } catch (error) {
    res.status(500).json({
      error:error.message,
      message:"not able to create data",
      success:false
    });
  }
}

const getAllNotification=async(req,res)=>{
  try {
    const NotificationTicketList=await emailService.getAllNotification();
    res.status(200).json({
      data:NotificationTicketList,
      message:"get all the Notification Tickets",
      success:true
    })
  } catch (error) {
    res.status(500).json({
      error:error.message,
      success:false,
      message:"Not able to get all the tickets"
    })
  }
}

const deleteNotificationTicket=async(req,res)=>{
  try {
    const response=await emailService.deleteNotificationTicket(req.body.NotificationTicketId);
    res.status(200).json({
      data:response,
      message:"Notification Ticket is deleted",
      success:true,
    })
  } catch (error) {
    res.status(500).json({
      message:"Not able to delete Notification Ticket",
      success:false,
      error:error.message,
    })
  }
}

const sendBasicEmail=async (req,res)=>{
  try {
    const {maliFrom,mailTo,mailSubject,mailBody}=req.body;
    const response=await emailService.sendBasicEmail(maliFrom,mailTo,mailSubject,mailBody);
    res.status(200).json({
      data:response,
      message:"Mail is send",
      success:true
    })
  } catch (error) {
    res.status(500).json({
    error:error.message,
    success:false,
    message:"unable to send mail"
    })
  }
}

module.exports={createNotification,getAllNotification,deleteNotificationTicket,sendBasicEmail}