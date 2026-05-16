import express from "express"
import userController from "../controllers/user.controller.js"
import { verifyToken } from "../middleware/verify.js"

const router = express.Router()

router.get("/", userController.getUsers)
router.get("/:id", verifyToken, userController.getUser)
router.put("/:id", verifyToken, userController.updateUser)
router.delete("/:id", verifyToken, userController.deleteUser)

export default router