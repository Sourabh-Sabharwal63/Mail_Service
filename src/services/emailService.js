const sender = require("../config/emailConfig");
const NotificationTicketRepository = require("../Repository/notificationTicket");

class EmailService {
  constructor(
    notificationTicketRepository = new NotificationTicketRepository()
  ) {
    this.notificationTicketRepository = notificationTicketRepository;
  }

  async sendBasicEmail(maliFrom, mailTo, mailSubject, mailBody) {
    try {
      console.log("hello there data is maliFrom = ",maliFrom," mailTo = ",mailTo," mailSubject = ", mailSubject," mailBody =",mailBody);
      await sender.sendMail({
        from: maliFrom,
        to: mailTo,
        subject: mailSubject,
        text: mailBody,
      });
      console.log("send mail successfully ")
    } catch (error) {
      throw error;
    }
  }
  async fetchPendingEmails(timestamps) {
    try {
      const ticketList = await this.notificationTicketRepository.getFiltered(
        timestamps
      );
      return ticketList;
    } catch (error) {
      throw error;
    }
  }

  async SendMailReminder() {
    try {
      const ticketList = await this.fetchPendingEmails(new Date());
      //console.log("ticketList = ",ticketList);
      ticketList.forEach((element) => {
       const user=element.get();
       console.log("user = ",user);
        this.sendBasicEmail(
          "gold569roger@gmail.com",
         "sourabhkm569@gmail.com",
          user.subject,
          user.content
        );
      });
    } catch (error) {
      throw error;
    }
  }
}

module.exports = new EmailService();
