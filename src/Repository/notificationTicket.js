const { NotificationTicket } = require("../../models");
const { Op } = require("sequelize");

class NotificationTicketRepository {
  async createNotificationTicket(data) {
    try {
      const Ticket = await NotificationTicket.create(data);
      return Ticket;
    } catch (error) {
      throw error;
    }
  }

  async getAll() {
    try {
      const ticketList = await NotificationTicket.findAll();
      return ticketList;
    } catch (error) {
      throw error;
    }
  }

  async getFiltered(timestamp) {
    try {
      const TicketList = await NotificationTicket.findAll({
        where: {
          notificationTime: { [Op.lte]: timestamp },
          status: "PENDING",
        },
      });
      return TicketList;
    } catch (error) {
      return error;
    }
  }
  async deleteNotificationTicket(TicketId) {
    try {
      const response = await NotificationTicket.destroy({
        where: {
          id: TicketId,
        },
      });
      return response;
    } catch (error) {
      throw error;
    }
  }
  async updateNotificationTicket(ticketId,data){
  try {
    const Ticket=await NotificationTicket.update(data,{
      where:{
        id:ticketId
      }
    });
    return Ticket;
  } catch (error) {
    console.log("something went wrong on Repository Level in update");
    throw error;
  }
  }
}

module.exports=NotificationTicketRepository;