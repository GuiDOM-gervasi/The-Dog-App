const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const principal = require('./dogs_Route.js');
const temper = require('./temper_Route.js')
const addDog = require('./addDog_Route.js')


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use('/dogs', principal);
router.use('/dog',addDog)
router.use('/temperament', temper);



module.exports = router;
