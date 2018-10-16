var { clientes, facturas } = require("./db/models");
var fs = require("fs");
var file_name = "clientes.csv";
// var fileContent = fs.readFileSync(file_name).toString().split('\r\n');
// var obj =[]
// fileContent.forEach(f=>{
//     var o = f.split(',')
//     obj.push({
//         nombre_emp: o[0],
//         nit: o[1],
//         tipo: o[2],
//         direccion: o[3],
//         telefono: o[4],
//         correo_e: o[5]
//     })
// })
// obj.forEach(ob=>{
//     clientes.create(ob)
// })

// clientes.findAll({})
// .then((row)=>{
//     var fileContent = fs.readFileSync('facturas.csv').toString().split('\r\n');
//     var obj =[]
//     fileContent.forEach(f=>{
//         var o = f.split(',')
//         obj.push({
//             clientes_fk: '',
//             factura_no: o[0],
//             fecha: o[1],
//             v_consumo: o[2],
//             prop_transp: o[3],
//             ipc: o[4],
//             v_total: o[5],
//             nombre_personal: o[6],
//             estado: o[7],
//             notas: o[8]
//         })
//     })
//     obj.forEach(o=>{
//         row.forEach(r=>{
//             if(r.dataValues.nombre_emp === o.nombre_personal) {
//                 o.clientes_fk = r.dataValues.id
//             } else {
//                 //console.log(r.dataValues.id)
//             }
//         })
//         facturas.create(o)
//     })
// })

// clientes.findAll({
//     include :{
//         model: facturas,
//         as: 'id_clientes',
//         where:{
//             estado: 'abierta'
//         }
//     }
// }).then(rows=>{
//     rows.forEach(r=>{

//         r.id_clientes.forEach(facturas=>{
//             console.log(facturas.dataValues)
//         })
//     })
// })

var data = {
  nombre_emp: "Trotro",
  nit: "12345678",
  tipo: "empresa",
  direccion: "KR 5 # 23-67",
  telefono: "1234567",
  correo_e: "hello@gmail.com"
};

clientes.update(
  {
    nombre_emp: "Trotro",
    nit: "12345678",
    tipo: "empresa",
    direccion: "KR 5 # 23-67",
    telefono: "1234567",
    correo_e: "hello@gmail.com"
  },
  {
    where: {
      nombre_emp: "Totos"
    }
  }
);

var sequelize = require("sequelize");
console.log(sequelize.fn("max"));
