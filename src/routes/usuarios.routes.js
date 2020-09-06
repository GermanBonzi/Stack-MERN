const express = require('express')
const router = express.Router()
const BDUsuarios = require('../models/tareasDB')


// obtener todos los usuarios
router.get('/',async (req,res)=>{
    const datos = await BDUsuarios.find()
    console.log(datos)
    res.json(datos)

})

//guardar un usuario en la base de datos
router.post('/', async (req,res)=>{
    console.log(req.body)
    const {usuario,contraseña}= req.body
    res.json(req.body)
    DataBase = new BDUsuarios({usuario,contraseña})
    await DataBase.save()
    
})

// obtener un determinado usuario por id
router.get('/:id', async (req, res)=>{
   const usuario = await BDUsuarios.findById(req.params.id)
   console.log(usuario)
   res.json(usuario)
})



// actualizar usuarios

router.put('/:id', async (req,res)=>{
    const {usuario, contraseña} = req.body
    const NuevoUsuario = {usuario, contraseña}
    await BDUsuarios.findByIdAndUpdate(req.params.id, NuevoUsuario)
    res.json({estado:'usuario actualizado'})
    

})



router.delete('/:id', async (req,res)=>{
    await BDUsuarios.findByIdAndDelete(req.params.id)
    res.json({estado:'usuario eliminado'})
})


module.exports = router
 