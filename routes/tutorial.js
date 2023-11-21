// Import the express library
const express = require('express');
// Import the tutorialController module for handling tutorial-related logic
const tutorialController = require('../controllers/tutorial');

// Create a new instance of the express router
const router = express.Router();

// Define routes for handling different tutorial-related actions

// Route for getting items
router.get('/getItems', tutorialController.getItems);

// Route for adding an item
router.post('/addItem', tutorialController.addItem);

// Route for deleting an item
router.post('/deleteItem', tutorialController.deleteItem);

// Route for resetting values
router.get('/resetValues', tutorialController.resetValues);

// Export the router so that it can be used in other parts of the application
module.exports = router;
