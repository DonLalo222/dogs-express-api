import express from 'express';
import { search, details, letter } from "../controllers/dogs-controller.js";

const router = express.Router();

router.get('/search/:inputString', search);
router.get('/details', details);
router.get('/letter/:inputString', letter );


export { router };