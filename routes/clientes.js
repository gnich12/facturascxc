var express = require('express');
var router = express.Router();
const {clientes} = require('../db/models');
var ctrlClientes = require('../db/controller/clientes')

router.get('/:empresa', ctrlClientes.getClientes)
router.get('/', ctrlClientes.getAllClientes)
router.post('/agregar', ctrlClientes.addCliente)

module.exports=router