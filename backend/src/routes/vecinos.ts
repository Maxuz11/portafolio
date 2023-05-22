import { Router } from "express";
import {insertvecino} from "../controllers/vecinos";


const router = Router();

router.post('/', insertvecino);

export default router;