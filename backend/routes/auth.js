import express from "express";
import { login, register } from "./../controllers/authController.js";

const router = express.Router();

router.get("/test", function(req, res) {
    res.send("aaa");
})
router.post("/register", register);
router.post("/login", login);

export default router;
