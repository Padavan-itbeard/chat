"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addConstraint("ChatRooms", { fields: ["name"], name: "unique_name", type: "unique" });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.removeConstraint("ChatRooms", "unique_name");
  }
};