import express from "express"
 import { verifyToken } from "../middleware/verify.js"
import postController from "../controllers/post.controller.js"

const router = express.Router()

router.get("/", postController.getPosts)
router.get("/:id", verifyToken, postController.getPost)
router.post("/", verifyToken, postController.addPost)
router.put("/:id", verifyToken, postController.updatePost)
router.delete("/:id", verifyToken, postController.deletePost)

export default router