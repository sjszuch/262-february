const pool = require('../db');
const queries = require('../queries');

// Get all data from the inventory table
const getInventory = (req, res) => {
    pool.query(queries.getInventory, (error, results) => {
        if (error) {
            throw error;
        }
        res.status(200).json(results.rows);
    })};

// Add a new item to the inventory table
const addItem = (req, res) => {
    const { name, quantity } = req.body;
    pool.query(queries.addItem, [name, quantity], (error, results) => {
        if (error) {
            throw error;
        }
        res.status(201).send(`Item added with ID: ${results.insertId}`);
    })};

module.exports = {
    getInventory,
    addItem,
};