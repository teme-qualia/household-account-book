import express from 'express'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient({
    log: [
        {
            emit: 'stdout',
            level: 'query',
        },
        {
            emit: 'stdout',
            level: 'error',
        },
    ]
})

export const records = async function(req: express.Request, res: express.Response) { 
    const records = await prisma.t_record.findMany()
    res.json(records)
}

export const record = async function(req: express.Request, res: express.Response) {    
    const record = await prisma.t_record.findUnique({
        where: {
            id: req.params.recordId
        }
    })
    return record == null ?
        res.status(404).send('not found: ' + req.params.recordId) :
        res.json(record)
}

export const createRecord = async function(req: express.Request, res: express.Response) {   
    //res.status(201).send('NOT IMPLEMENTED: createRecord: ' + req.body.id)
    res.status(201).send('NOT IMPLEMENTED: createRecord: ' + JSON.stringify(req.body))
    // const newRecord = await prisma.t_record.create({
    //     data: {
    //         id: req.body.id,
    //         userId: req.body.userId,
    //         accountedAt: req.body.accountedAt,
    //         accountedMonth: `${req.body.accountedAt.getFullYear()}${(req.body.accountedAt.getMonth()+1).toString().padStart(2, "0")}`,
    //         price: req.body.price,
    //         category1Id: req.body.category1Id,
    //         category1Name: req.body.category1Name,
    //         category2Id: req.body.category2Id,
    //         category2Name: req.body.category2Name,
    //         shopId: req.body.shopId,
    //         shopName: req.body.shopName,
    //         paymentTypeId: req.body.paymentTypeId,
    //         paymentTypeName: req.body.paymentTypeName,
    //         buyerId: req.body.buyerId,
    //         buyerName: req.body.buyerName,
    //     }
    // })

    // return res.status(201).json(newRecord)
}

export const updateRecord = function(req: express.Request, res: express.Response) {   
    //res.status(201).send('NOT IMPLEMENTED: updateRecord: ' + req.body.id)
    res.status(201).send('NOT IMPLEMENTED: updateRecord: ' + JSON.stringify(req.body))
}

export const deleteRecord = function(req: express.Request, res: express.Response) {   
    res.status(201).send('NOT IMPLEMENTED: deleteRecord: ' + req.params.recordId)
}