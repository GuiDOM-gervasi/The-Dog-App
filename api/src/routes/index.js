const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const principal = require('./principal.js');
const detalles = require('./detalles.js')


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use('/dogs', principal);
router.use('/dogs:idRaza', detalles)


module.exports = router;
