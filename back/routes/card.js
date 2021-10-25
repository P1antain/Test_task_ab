const router = require('express').Router();
const Card = require('../models/card')
const {getCard, createCard, deleteCard } = require("../controllers/card");

router.get('/', getCard);
router.post('/', createCard);
router.delete('/', deleteCard);

module.exports = router;
