const sender = require("../config/emailConfig");
const NotificationTicketRepository = require("../Repository/notificationTicket");

class EmailService {
  constructor(
    notificationTicketRepository = new NotificationTicketRepository()
  ) {
    this.notificationTicketRepository = notificationTicketRepository;
  }

  async createNotificationTicket(data) {
    try {
      const ticket =
        await this.notificationTicketRepository.createNotificationTicket(data);
      return ticket;
    } catch (error) {
      throw error;
    }
  }

  async getAllNotification() {
    try {
      const TicketList = await this.notificationTicketRepository.getAll();
      return TicketList;
    } catch (error) {
      throw error;
    }
  }

  async updateNotificationTicket(ticketId, data) {
    try {
      const response =
        await this.notificationTicketRepository.updateNotificationTicket(
          ticketId,
          data
        );
      return response;
    } catch (error) {
      throw error;
    }
  }

  async deleteNotificationTicket(ticketId) {
    try {
      const response =
        await this.notificationTicketRepository.deleteNotificationTicket(
          ticketId
        );
      return response;
    } catch (error) {
      throw error;
    }
  }

  async sendBasicEmail(mailFrom, mailTo, mailSubject, mailBody) {
    try {
      const result = await new Promise((resolve, reject) => {
        sender.sendMail(
          {
            from: mailFrom,
            to: mailTo,
            subject: mailSubject,
            text: mailBody,
          },
          (err, data) => {
            if (err) {
              console.log(err.message);
              reject(false); // Reject the Promise with `false`
            } else {
              console.log("Mail sent successfully");
              resolve(true); // Resolve the Promise with `true`
            }
          }
        );
      });

      return result;
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
      ticketList.forEach(async (element) => {
        const user = element.get();
        console.log("user = ", user);
        const response = await this.sendBasicEmail(
          "gold569roger@gmail.com",
          user.recipientEmail,
          user.subject,
          user.content
        );
        console.log("response = ", response);
        if (response) {
          user.status = "SUCCESS";
          console.log("user = ", user);
          await this.updateNotificationTicket(user.id, user);
        }
        // console.log("user = ", user)
      });
    } catch (error) {
      throw error;
    }
  }
}

module.exports = new EmailService();
