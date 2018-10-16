const {facturas} = require('../models')
var _ = require('lodash')

var Facturas = {
    getAll: (req, res) => {
        facturas.findAll({
            attributes: [
                'id', 'factura_no', 'fecha', 'v_consumo', 'prop_transp',
                'ipc', 'v_total', 'nombre_personal', 'estado', 'notas'
            ]
        })
        .then( (row ) => {
            res.send(row)
        })
        .catch(error=>{
            res.send(error)
        })
    },
    getFactura: (req , res) => {
        facturas.findOne({
            attributes: [
                'id', 'factura_no', 'fecha', 'v_consumo', 'prop_transp',
                'ipc', 'v_total', 'nombre_personal', 'estado', 'notas'
            ],
            where: {
                factura_no: req.params.numero
            }
        })
        .then( (row ) => {
            res.send(row)
        })
        .catch(error=>{
            res.send(error)
        })
    }
}

module.exports = Facturas