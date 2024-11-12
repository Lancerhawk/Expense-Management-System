const express = require('express');
const { addTransection, getAllTransection, deleteTransection } = require('../controllers/transectionCtrl');

// Router objects
const router = express.Router();

// Routers
router.post('/add-transection', addTransection);
router.post('/get-transection', getAllTransection); 
router.delete('/delete-transection/:id', deleteTransection); 

module.exports = router;
