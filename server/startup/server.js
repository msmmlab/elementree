const logger = require("../utils/logger");

module.exports = function (app) {
    const PORT = process.env.PORT || 3030;

    app.listen(PORT, () => {
        logger.info(`Server listening on PORT ${PORT}`);
    });
};
