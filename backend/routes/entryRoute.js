import express from 'express'
import { addEntry, deleteEntry, getEntry } from '../controllers/entryController.js'
import authMiddleware from '../auth.js'

const entryRouter = express.Router()

entryRouter.post('/add',authMiddleware,addEntry)
entryRouter.post('/delete',authMiddleware,deleteEntry)
entryRouter.post('/get',authMiddleware,getEntry)

export default entryRouter;