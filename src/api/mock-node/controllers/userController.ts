import express from 'express'

export const users = function(req: express.Request, res: express.Response) {
    res.send('NOT IMPLEMENTED: accountUser List')
}

export const user = function(req: express.Request, res: express.Response) {    
    res.send('NOT IMPLEMENTED: accountUser: ' + req.params.userId)
}

export const createUser = function(req: express.Request, res: express.Response) {   
    //res.status(201).send('NOT IMPLEMENTED: createUser: ' + req.body.id)
    res.status(201).send('NOT IMPLEMENTED: createUser: ' + JSON.stringify(req.body))
}

export const updateUser = function(req: express.Request, res: express.Response) {   
    //res.status(201).send('NOT IMPLEMENTED: updateUser: ' + req.body.id)
    res.status(201).send('NOT IMPLEMENTED: updateUser: ' + JSON.stringify(req.body))
}

export const deleteUser = function(req: express.Request, res: express.Response) {   
    res.status(201).send('NOT IMPLEMENTED: deleteUser: ' + req.params.userId)
}