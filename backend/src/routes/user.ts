import { Router } from "express";
import { login, newUsuario} from "../controllers/user";
//creacion de la ruta para los usuarios
const router = Router();
//ruta para crear un nuevo usuario y para el login
router.post('/', newUsuario);
router.post('/login', login);

//exportamos la ruta
export default router;