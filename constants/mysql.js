// Import Sequelize library for database connection
const Sequelize = require('sequelize');

// Create a new Sequelize instance for connecting to the MySQL database
const sequelize = new Sequelize("node", "root", "root", {
  dialect: 'mysql',  // Specify the database dialect (in this case, MySQL)
  logging: true,     // Enable logging of SQL queries (for debugging)
  host: "localhost",  // Database host
  port: 8889          // Database port
});

// Export the configured Sequelize instance to be used in other parts of the application
module.exports = sequelize;