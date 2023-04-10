const express = require('express');
const { getAllEquipments, postEquipment, updateEquipmentDetail, deleteEquipment } = require('../Controller/equipments.js');
// const { login } = require('../Controller/login.js');
const router = express.Router();

router.get('/', getAllEquipments);
router.post('/', postEquipment);
router.put("/:id", updateEquipmentDetail);
router.delete("/:id", deleteEquipment);
// router.post('/login', login);
module.exports = router;