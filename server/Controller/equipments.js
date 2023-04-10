const mongoose = require('mongoose');
const equipment_schema = require('../models/equipment.js');

const getPost = (req, res) => {
    res.send("Hello World!");
}

const postEquipment = async (req, res) => {
    equipment_schema.create(req.body)
    .then((equipment) => {
        console.log({ equipment });
        res.status(200).json({
          message: "Cheers!! You have successfully added your equip",
          equipment,
        });
      })
      .catch((err) => {
        res.status(404).json({
          message: "Sorry your equip is not there",
          error: err.message,
        });
      });
}

const updateEquipmentDetail = async (req, res) => {
    equipment_schema.findByIdAndUpdate(req.params.id, req.body)
     .then((equipment) => {
        console.log({ equipment });
        res.status(200).json({
          message: "Cheers!! You have successfully updated your equip",
          equipment,
        });
      })
      .catch((err) => {
        res.status(404).json({
          message: "Sorry your equip is not there",
          error: err.message,
        });
      });
}

const getAllEquipments = (req, res) => {
    equipment_schema.find()
      .then((equipment) => {
        console.log({ equipment});
        res.json(equipment);
      })
      .catch((err) => {
        res
          .status(404)
          .json({ message: "There isnt any equipment available", error: err.message });
      });
  };


const deleteEquipment = (req, res) => {
    equipment_schema.findByIdAndRemove(req.params.id, req.body)
      .then((equipment) => {
        console.log({ equipment });
        res.status(200).json({
          message: "Cheers!! You have successfully deleted your equip",
          equipment,
        });
      })
      .catch((err) => {
        res.status(404).json({
          message: "Sorry your equip is not there",
          error: err.message,
        });
      });
  }

module.exports = { getPost, postEquipment, updateEquipmentDetail, deleteEquipment, getAllEquipments };