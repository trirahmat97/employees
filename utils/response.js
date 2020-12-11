exports.bad = (message) => {
    return {
        resCode: '400',
        resDesc: message
    }
}

exports.notfound = (message) => {
    return {
        resCode: '404',
        resDesc: message
    }
}