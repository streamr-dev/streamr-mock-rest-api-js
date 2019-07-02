const express = require('express')

const app = express()

const port = process.env.PORT || 8080

app.get('/', (req, res) => {
    res.json('streamr-mock-rest-api-js')
})

app.get('/api/v1/streams/:streamId', (req, res) => {
    res.json({
        id: req.params.streamId,
        partitions: 1,
        name: 'test',
        feed: {
            id: 7,
            name: 'API',
            module: 147
        },
        config: {
            fields: []
        },
        description: null,
        uiChannel: false,
        inbox: false,
        dateCreated: '2019-07-01T11:14:38Z',
        lastUpdated: '2019-07-01T11:14:38Z',
        requireSignedData: false,
        autoConfigure: true,
        storageDays: 365
    })
})

app.get('/api/v1/streams', (req, res) => {
    res.json([{
        id: 'zJl-PQ53TxaDH113TRrk9g',
        partitions: 1,
        name: req.query.name,
        feed: {
            id: 7,
            name: 'API',
            module: 147
        },
        config: {
            fields: []
        },
        description: null,
        uiChannel: false,
        inbox: false,
        dateCreated: '2019-07-01T11:14:38Z',
        lastUpdated: '2019-07-01T11:14:38Z',
        requireSignedData: false,
        autoConfigure: true,
        storageDays: 365
    }])
})

app.get('/api/v1/streams/:streamId/permissions/me', (req, res) => {
    res.json([
        {
            id: 321,
            user: 'tester1@streamr.com',
            operation: 'read'
        },
        {
            id: 322,
            user: 'tester1@streamr.com',
            operation: 'write'
        },
        {
            id: 323,
            user: 'tester1@streamr.com',
            operation: 'share'
        }
    ])
})

app.post('/api/v1/streams/:streamId/fields', (req, res) => {
    res.json(req.params)
})

app.post('/api/v1/login/apikey', (req, res) => {
    const tomorrow = new Date()

    res.json({
        expires: tomorrow.toISOString(),
        token: 'NZm3dGYPFGMVkY4vrL98keoJJoPS5ZLF0yyfLiR56JlihnXc81fgcTKCZMRLtuWo'
    })
})

app.listen(port, () => {
    console.log('Started mock rest api: ' + port)
})
