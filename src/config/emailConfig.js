const nodemailer=require("nodemailer");

const {EmailId,EmailPassword}=require("./serverConfig");


const sender= nodemailer.createTransport({
  service:'Gmail',
  auth:{
    user:EmailId,
    pass:EmailPassword
  }
})

module.exports=sender;