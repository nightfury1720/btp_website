const mongoose = require('mongoose');


// Schema
const Schema = mongoose.Schema;
const equipmentSchema = new Schema({
    description: String
});

// Model
const equipment = mongoose.model('equipments', equipmentSchema);

module.exports = equipment;