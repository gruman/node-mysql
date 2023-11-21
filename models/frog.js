// Import Sequelize library for database modeling
const Sequelize = require('sequelize');

// Import the sequelize instance connected to the MySQL database
const sequelize = require('../constants/mysql');

// Define a Sequelize model for the 'frog' table
const Frog = sequelize.define('frog', {
  // Define 'id' as an integer column with auto-increment, not null, and primary key constraints
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  // Define 'name' as a string column that cannot be null
  name: {
    type: Sequelize.STRING,
    allowNull: false
  }
});

// Export the Frog model to be used in other parts of the application
module.exports = Frog;
