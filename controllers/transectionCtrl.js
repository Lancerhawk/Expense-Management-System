const transectionModel = require('../models/transectionModel');
const moment = require('moment')

const getAllTransection = async (req, res) => {
    try {
        const {frequency , selectedDate, type} = req.body
        const { userid } = req.body; 
        const transections = await transectionModel.find({ 
            ...(frequency !== 'custom' ? {
                date:{
                    $gt : moment().subtract(Number(frequency), 'd').toDate(),
                },
            }: {
                date: {
                    $gte: selectedDate[0],
                    $lte : selectedDate[1],
                }
            }),

            userid: userid,

            ...(type !== "all" && { type }),
        
         });
        res.status(200).json(transections);
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
};

const addTransection = async (req, res) => {
    try {
        const newTransection = new transectionModel(req.body);
        await newTransection.save();
        res.status(201).send('Transaction Created');
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
};

const deleteTransection = async (req, res) => {
    try {
      const { id } = req.params; 
      const { userid } = req.body; 
  
      const deletedTransection = await transectionModel.findOneAndDelete({ _id: id, userid: userid });
  
      if (!deletedTransection) {
        return res.status(404).json({ message: 'Transaction not found or you are not authorized to delete it' });
      }
  
      return res.status(200).json({ message: 'Transaction deleted successfully', transection: deletedTransection });
    } catch (error) {
      console.error('Error deleting transaction:', error);
      return res.status(500).json({ message: 'Server Error' });
    }
  };

module.exports = { getAllTransection, addTransection, deleteTransection };
