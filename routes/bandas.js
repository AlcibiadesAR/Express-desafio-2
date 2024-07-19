const express = require("express");
const router = express.Router();
const bandaController = require("../controllers/bandaControllers");

router.get('/', bandaController.home);
router.get('/bandas/id/:id', bandaController.detalle);
router.get('/bandas/genero/:genero', bandaController.genero);

module.exports = router;
