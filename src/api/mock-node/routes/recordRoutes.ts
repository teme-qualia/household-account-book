import { Router } from 'express'
import * as recordController from '../controllers/recordController'

const router = Router()

router.get("/records", recordController.records)
router.get("/:recordId", recordController.record)
router.post('/', recordController.createRecord)
router.put('/', recordController.updateRecord)
router.put('/:recordId', recordController.deleteRecord)

export const recordRouter = router