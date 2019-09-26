const IntegrityServerCheckController = module.exports;
/**
 * @api {GET} /api/shoppers/health-check return server health status
 * @apiName HealthCheck
 * @apiGroup Shoppers
 * @apiDescription return server health status
 * @apiSuccessExample Success Response:
 * HTTP/1.1 200
 * {  status: "UP" }
 *
 * @apiError (400) {null} Error if object param is invalid
 * @apiError (500) {Object} Error on internal runtime, should return nothing.
 */
IntegrityServerCheckController.health = (req, res) => {
    return res.status(200).send({
        status: "UP"
    });
};