

const { Router } = require('express');
const { usuariosGet, 
        usuariosPost, 
        usuariosPut, 
        usuariospatch, 
        usuariosDelete } = require('../controllers/usuarios');
const router = Router();



router.get('/', usuariosGet );


router.post('/', usuariosPost);


  router.put('/:id', usuariosPut );


  router.patch('/', usuariospatch);

 
  router.delete('/',usuariosDelete );





module.exports = router;