import { Router } from 'express'
import * as userController from '../controllers/userController'

const router = Router()

router.get("/users", userController.users)
router.get("/:userId", userController.user)
router.post('/', userController.createUser)
router.put('/', userController.updateUser)
router.put('/:userId', userController.deleteUser)

export const userRouter = router