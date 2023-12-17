/*==================================================
/database/models/Student.js

It defines the student model for the database.
==================================================*/
const Sequelize = require('sequelize');  // Import Sequelize
const db = require('../db');  // Import Sequelize database instance called "db"

const Student = db.define("student", {
  firstname: {
    type: Sequelize.STRING,
    allowNull: false
  },
  lastname: {
    type: Sequelize.STRING,
    allowc: false
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false
  },
  GPA: {
    type: Sequelize.FLOAT,
    allowNull: true,
    validate: {
      min: 0.0, // Minimum GPA value
      max: 4.0, // Maximum GPA value
    },
  },
  imageUrl: {
    type: Sequelize.STRING,
    allowNull: true
  },
  campusId: {
    type: Sequelize.INTEGER,
    allowNull: true
  }
});

// Export the student model
module.exports = Student;