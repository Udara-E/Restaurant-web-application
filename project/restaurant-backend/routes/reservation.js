
import express from "express";
import {
  register,
  getAllUser,
  getUser,
  updateUser,
  deleteUser,
  filterUserByName,
  loginUser,
} from "../controller/resvController.js";

const router = express.Router();

router.post("/reg", register);
router.get("/get", getAllUser);
router.get("/get/:id", getUser);
router.put("/update/:id", updateUser);
router.delete("/delete/:id", deleteUser);
router.get("/filter", filterUserByName);
router.post("/login", loginUser);

export default router;
