"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class NotificationTicket extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  NotificationTicket.init(
    {
      subject: { allowNull: false, type: DataTypes.STRING },
      content: { allowNull: false, type: DataTypes.STRING },
      recipientEmail: { allowNull: false, type: DataTypes.STRING,validate:{
        isEmail:true,isLowercase:true
      } },
      status: {
        allowNull: false,
        type: DataTypes.ENUM,
        values: ["PENDING", "SUCCESS", "FAILED"],
      },
      notificationTime: { allowNull: false, type: DataTypes.DATE },
    },
    {
      sequelize,
      modelName: "NotificationTicket",
    }
  );
  return NotificationTicket;
};
