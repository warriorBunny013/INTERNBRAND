import express from "express";
import {getDatas} from "../Controllers/Posts.Controller.js"

const router=express.Router();

router.get("/get",getDatas);

export default router;