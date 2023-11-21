// Import the Frog model for database operations
const Frog = require('../models/frog');
// Import the sequelize instance connected to the MySQL database
const sequelize = require('../constants/mysql');

// Get all items (frogs) from the database
exports.getItems = (req, res, next) => {
  Frog.findAll()
    .then(results => {
      // Send the retrieved items as a response
      res.send(results);
      console.log(results);
    })
    .catch(err => {
      // Log any errors that occur during the database operation
      console.log(err);
    });
};

// Add a new item (frog) to the database
exports.addItem = (req, res, next) => {
  // Extract the name from the request body
  const name = req.body.name;
  // Create a new Frog instance with the provided name
  Frog.create({
    name: name,
  })
    .then(results => {
      // Log the result of the database operation
      console.log(results);
    })
    .catch(err => {
      // Log any errors that occur during the database operation
      console.log(err);
    });
};

// Delete an item (frog) from the database based on the provided ID
exports.deleteItem = (req, res, next) => {
  // Extract the ID from the request body
  const id = req.body.id;
  // Delete the Frog with the specified ID
  Frog.destroy({
    where: {
      id: id
    },
  })
    .then(results => {
      // Log the result of the database operation
      console.log(results);
    })
    .catch(err => {
      // Log any errors that occur during the database operation
      console.log(err);
    });
};

// Reset all values in the database (drop and recreate tables)
exports.resetValues = async (req, res, next) => {
  try {
    // Reset values by synchronizing the Sequelize models with the database (force option drops tables)
    await sequelize.sync({ force: true });
    console.log('All tables dropped successfully.');

    // Send a success message as a response
    res.status(200).json({ message: 'Reset complete.' });
  } catch (error) {
    // Log any errors that occur during the database operation
    console.error('Error:', error);
    // Send an internal server error response
    res.status(500).json({ error: 'Internal server error' });
  }
};
