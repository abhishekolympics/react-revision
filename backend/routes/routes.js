import { Router } from "express";
import getCounter from '../controllers/controller'

const router = Router();

router.get('/counters',getCounter);