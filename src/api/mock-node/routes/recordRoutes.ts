import { Router } from 'express'
import * as recordController from '../controllers/recordController'

const router = Router()
/**
 * @swagger
 * definitions:
 *   Record:
 *     type: object
 *     description: 家計簿データ
 *     required:
 *       - id
 *       - userId
 *       - accountedMonth
 *       - accountedAt
 *       - price
 *     properties:
 *       id:
 *         type: string
 *         description: 家計簿データID
 *       userId:
 *         type: string
 *         description: ユーザーID
 *       accountedMonth:
 *         type: string
 *         description: 計上月
 *       accountedAt:
 *         type: date
 *         description: 計上日
 *       price:
 *         type: decimal
 *         description: 金額
 *       category1Id:
 *         type: int
 *         description: 大分類ID
 *       category1Name:
 *         type: string
 *         description: 大分類名
 *       category2Id:
 *         type: int
 *         description: 小分類ID
 *       category2Name:
 *         type: string
 *         description: 小分類名
 *       shopId:
 *         type: int
 *         description: 内容ID
 *       shopName:
 *         type: string
 *         description: 内容名
 *       paymentTypeId:
 *         type: int
 *         description: 支払い方法ID
 *       paymentTypeName:
 *         type: string
 *         description: 支払い方法名
 *       buyerId:
 *         type: int
 *         description: 購入者ID
 *       buyerName:
 *         type: string
 *         description: 購入者名
 */
/**
 * @swagger
 * /api/v1/record/records:
 *   get:
 *     tags:
 *       - records
 *     description: 家計簿データ一覧を取得
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: 家計簿データリスト
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/definitions/Record'
 */
router.get("/records", recordController.records)

/**
 * @swagger
 * /api/v1/record/{recordId}:
 *   get:
 *     tags:
 *       - records
 *     description: 指定した家計簿データを取得
 *     parameters:
 *     - name: recordId
 *       in: path   
 *       required: true
 *       description: 家計簿データID
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: 家計簿データ
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/definitions/Record'
 *       404:
 *         description: 該当データ無し
 */
router.get("/:recordId", recordController.record)

/**
 * @swagger
 * /api/v1/record:
 *   post:
 *     tags:
 *       - records
 *     description: 新規家計簿データを登録
 *     parameters:
 *     - in: body
 *       name: body
 *       description: 家計簿データオブジェクト
 *       required: true
 *       schema:
 *         $ref: '#/definitions/Record'
 *     produces:
 *       - application/json
 *     responses:
 *       201:
 *         description: 登録した家計簿データ
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/definitions/Record'
 *       404:
 *         description: 該当データ無し
 */
router.post('/', recordController.createRecord)

/**
 * @swagger
 * /api/v1/record:
 *   put:
 *     tags:
 *       - records
 *     description: 指定した家計簿データを更新
 *     parameters:
 *     - in: body
 *       name: body
 *       description: 家計簿データオブジェクト
 *       required: true
 *       schema:
 *         $ref: '#/definitions/Record'
 *     produces:
 *       - application/json
 *     responses:
 *       201:
 *         description: 更新した家計簿データ
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/definitions/Record'
 *       404:
 *         description: 該当データ無し
 */
router.put('/', recordController.updateRecord)

/**
 * @swagger
 * /api/v1/record/{recordId}:
 *   put:
 *     tags:
 *       - records
 *     description: 指定した家計簿データを削除
 *     parameters:
 *     - name: recordId
 *       in: path   
 *       required: true
 *       description: 家計簿データID
 *     produces:
 *       - application/json
 *     responses:
 *       201:
 *         description: 削除した家計簿データ
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/definitions/Record'
 *       404:
 *         description: 該当データ無し
 */
router.put('/:recordId', recordController.deleteRecord)

export const recordRouter = router