import express from 'express'

export const records = function(req: express.Request, res: express.Response) {
    res.send('NOT IMPLEMENTED: record List')
}

export const record = function(req: express.Request, res: express.Response) {    
    res.send('NOT IMPLEMENTED: record: ' + req.params.recordId)
}

export const createRecord = function(req: express.Request, res: express.Response) {   
    //res.status(201).send('NOT IMPLEMENTED: createRecord: ' + req.body.id)
    res.status(201).send('NOT IMPLEMENTED: createRecord: ' + JSON.stringify(req.body))
}

export const updateRecord = function(req: express.Request, res: express.Response) {   
    //res.status(201).send('NOT IMPLEMENTED: updateRecord: ' + req.body.id)
    res.status(201).send('NOT IMPLEMENTED: updateRecord: ' + JSON.stringify(req.body))
}

export const deleteRecord = function(req: express.Request, res: express.Response) {   
    res.status(201).send('NOT IMPLEMENTED: deleteRecord: ' + req.params.recordId)
}