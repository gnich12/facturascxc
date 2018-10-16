const {clientes} = require('../models')
var _ = require('lodash')

var Clientes = {
    getClientes : (req, res) => {
        var emp = req.params.empresa
        clientes.findOne({
            where: {
                nombre_emp : emp
            }
        }).then ((row) => {
            console.log(emp)
            res.send(row)
        }).catch(error=>{
            res.send(error)
        })
    },
    getAllClientes : (req, res) => {
        clientes.findAll({})
        .then ((row) => {
            res.send(row)
        }).catch(error=>{
            res.send(error)
        })
    },
    addCliente: (req, res) => {
        var data = req.body
        clientes.create(data)
        .then(response=>{
            res.send(response)
        }).catch(error=>{
            res.send(error)
        })
    },
    actualizarCliente: (req, res) => {
        
    }
}
module.exports = Clientes