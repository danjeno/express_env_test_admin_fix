import express from "express";
import { verifySessionTokenAdmin, verifySessionTokenUser } from "../authCheck/authCheck.js";
import { compareAdmin } from "../utils/adminHelper.js";
import {
  getAllUsers,
  getUserById,
  deleteUserById,
  updateUser,
} from "../controller/userController.js";

const router = express.Router();

router.get("/get", verifySessionTokenAdmin, getAllUsers);

router.get("/get/:id", verifySessionTokenUser, getUserById);

router.delete("/delete/:id", verifySessionTokenAdmin, deleteUserById);

router.put("/update/:id", verifySessionTokenUser, updateUser, compareAdmin);

export default router;
