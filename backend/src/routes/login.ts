 import { Router } from "express";
import { login } from "../controllers/user";
// import {verificarCorreo,cambiarContrasena } from "../controllers/resetpass";
// //creacion de la ruta para los usuarios
 const router = Router();
// //ruta para crear un nuevo usuario y para el login
router.post('/ingresar', login);
// router.get('/', verificarCorreo);
// router.post('/reset', cambiarContrasena);
// //exportamos la ruta
 export default router;