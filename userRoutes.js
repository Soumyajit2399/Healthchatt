import express from 'express'
import { loginUser, myprofile, verityUser } from '../controllers/userController.js';
import { isAuth } from '../middlewares/isAuth.js';

const router = express.Router()

router.post("/login", loginUser);
router.post("/verify", verityUser);
router.get("/me", isAuth, myprofile)

export default router;