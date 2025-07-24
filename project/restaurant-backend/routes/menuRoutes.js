import express from "express";
import {
  getMenuItems,
  addMenuItem,
  updateMenuItem,
  deleteMenuItem,
} from "../controller/menuController.js";

const router = express.Router();

router.get("/", getMenuItems);
router.post("/", addMenuItem);
router.put("/:id", updateMenuItem);
router.delete("/:id", deleteMenuItem);

export default router;