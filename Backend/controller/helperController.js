const enumerations = require('../enumerations/enumerations');

const helperController = { 

handleError: async (req, res, err, message, errorCode) => {
try {
    const errorObject = {
        statusCode: enumerations?.statusCodeError,
        message: message,
        originalErrorMessage: JSON.stringify(err),
        errorCode: errorCode
    }
    res.status(enumerations?.statusCodeError).json(errorObject);
}
catch(err) {
    console.log("error in handleError function", err);
}
}
}

module.exports = helperController;