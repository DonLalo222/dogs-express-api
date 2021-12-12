import express from 'express';
import { search, detailsById, findAllByFirstLetter } from "../controllers/cats-controller.js";

const router = express.Router();

router.get('/search', search);
router.get('/details/:id', detailsById);
router.get('/letter/:letter', findAllByFirstLetter );


export { router };