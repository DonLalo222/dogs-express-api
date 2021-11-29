import express from 'express';
import { search, details } from "../controllers/dogs-controller.js";

const router = express.Router();

router.get('/search/:inputString', search);
router.get('/details', details);


export { router };