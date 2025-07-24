
import express from "express";
import { register } from "../controller/userController.js";
import {getAllUser,getUser,updateUser,deleteUser,filterUserByName,loginUser} from "../controller/userController.js";
import {admin ,protect } from "../middleware/authMiddleware.js";
//import { loginUser } from '../controller/LoginUser.js';

const router = express.Router();

router.post("/reg",register);
router.post("/login", loginUser);

router.get("/filter", filterUserByName);

router.get("/get", protect, getAllUser);
router.get("/get/:id", protect, getUser);
router.put("/update/:id", protect, updateUser);
router.delete("/delete/:id", protect, deleteUser);




export default router


