var express = require('express');
var router = express.Router();
const {clientes} = require('../db/models');
var ctrlFacturas = require('../db/controller/facturas')

router.get('/', ctrlFacturas.getAll)
router.get('/:numero', ctrlFacturas.getFactura)
module.exports = router