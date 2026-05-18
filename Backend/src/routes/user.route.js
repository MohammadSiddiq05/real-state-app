import express from "express"
import userController from "../controllers/user.controller.js"
import { verifyToken } from "../middleware/verify.js"

const router = express.Router()

router.get("/", userController.getUsers)
router.put("/:id", verifyToken, userController.updateUser)
router.delete("/:id", verifyToken, userController.deleteUser)
router.post("/save", verifyToken, userController.savePost)
router.get("/profilePosts", verifyToken, userController.profilePosts)
router.get("/notification", verifyToken, userController.getNotificationNum)

export default router