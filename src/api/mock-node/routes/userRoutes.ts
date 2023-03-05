import { Router } from 'express'
import * as userController from '../controllers/userController'

const router = Router()
/**
 * @swagger
 * definitions:
 *   AccountUser:
 *     type: object
 *     description: ユーザー
 *     required:
 *       - id
 *       - name
 *     properties:
 *       id:
 *         type: string
 *         description: ユーザーID
 *       name:
 *         type: string
 *         description: ユーザー名
 *       password:
 *         type: string
 *         format: password
 *         description: パスワード
 */
/**
 * @swagger
 * /api/v1/user/users:
 *   get:
 *     tags:
 *       - users
 *     description: ユーザー一覧を取得
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: ユーザーリスト
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/definitions/AccountUser'
 */
router.get("/users", userController.users)

/**
 * @swagger
 * /api/v1/user/{userId}:
 *   get:
 *     tags:
 *       - users
 *     description: 指定したユーザーを取得
 *     parameters:
 *     - name: userId
 *       in: path   
 *       required: true
 *       description: ユーザーID
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: ユーザー
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/definitions/AccountUser'
 *       404:
 *         description: 該当データ無し
 */
router.get("/:userId", userController.user)

/**
 * @swagger
 * /api/v1/user:
 *   post:
 *     tags:
 *       - users
 *     description: 新規ユーザーを登録
 *     parameters:
 *     - in: body
 *       name: body
 *       description: ユーザーオブジェクト
 *       required: true
 *       schema:
 *         $ref: '#/definitions/AccountUser'
 *     produces:
 *       - application/json
 *     responses:
 *       201:
 *         description: 登録したユーザー
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/definitions/AccountUser'
 *       404:
 *         description: 該当データ無し
 */
router.post('/', userController.createUser)

/**
 * @swagger
 * /api/v1/user:
 *   put:
 *     tags:
 *       - users
 *     description: 指定したユーザーを更新
 *     parameters:
 *     - in: body
 *       name: body
 *       description: ユーザーオブジェクト
 *       required: true
 *       schema:
 *         $ref: '#/definitions/AccountUser'
 *     produces:
 *       - application/json
 *     responses:
 *       201:
 *         description: 更新したユーザー
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/definitions/AccountUser'
 *       404:
 *         description: 該当データ無し
 */
router.put('/', userController.updateUser)

/**
 * @swagger
 * /api/v1/user/{userId}:
 *   put:
 *     tags:
 *       - users
 *     description: 指定したユーザーを削除
 *     parameters:
 *     - name: userId
 *       in: path   
 *       required: true
 *       description: ユーザーID
 *     produces:
 *       - application/json
 *     responses:
 *       201:
 *         description: 削除したユーザー
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/definitions/AccountUser'
 *       404:
 *         description: 該当データ無し
 */
router.put('/:userId', userController.deleteUser)

export const userRouter = router