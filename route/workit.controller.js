const {
    postWorker,
} = require('../model/worker');
const {
    getEnumType
} = require('../model/enumtype');

function httpPostWorker(req, res) {
    const slackUsername = 'Abeeujah';
    const result = postWorker(req);
    const operation_type = getEnumType(req.body.operation_type);
    if (!result || !operation_type) {
        return (res.status(400).json({
            slackUsername,
            error: "Missing Required Data",
        }));
    }
    return (res.status(201).json({
        slackUsername,
        result,
        operation_type,
    }));
}

module.exports = httpPostWorker;