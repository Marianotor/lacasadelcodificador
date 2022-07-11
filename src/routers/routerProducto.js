const express = require('express')
const { Router } = express
const router = Router()
const {Contenedor} = require('../clases/clases.js')
const productos = new Contenedor()
const hbs = require('express-handlebars')

router.get('/', function(req, res) {
    const array = productos.getall()
    res.render('datos',{array})
})

/*router.get('/', (req,res)=>{
const array = productos.getall()
res.send(array)
})*/

router.get('/:id', (req,res)=>{
    const productoId = req.params.id
    const producto = productos.getbyid(productoId)
    res.send(producto)
})
        
router.post('/', (req,res)=>{
    const id = productos.save(req.body)
    console.log(id);
    res.json(id)
})

router.put('/:id', (req,res)=>{
    const productoId = req.params.id
    const nuevaData = req.body
    productos.update(nuevaData,productoId)
    res.send('put ok')
})        

router.delete('/:id', (req,res)=>{
    const resp = productos.deletebyid(req.params.id)
    res.send(resp)
})
    
module.exports=router
