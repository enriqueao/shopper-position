const ShopperPositionController = module.exports;

const ShopperPositionService = require('../services/ShopperPositionService');

// To complete
/**
 * @api {POST} /api/shoppers/position insert shoppers position
 * @apiName ShoppersPosition
 * @apiGroup Shoppers
 * @apiDescription insert shoppers position
 *
 * @apiParam (body) {number} lat the lat position
 * @apiParam (body) {number} lng the lng position
 * @apiParam (params) {number} shopper_id the id of the shopper
 *
 * @apiSuccessExample Success Response:
 * HTTP/1.1 200
 * { lat: 234234.6, 1: false, 2: false, 3: false, 4: true }
 *
 * @apiError (400) {null} Error if object param is invalid
 * @apiError (500) {Object} Error on internal runtime, should return nothing.
 */
ShopperPositionController.insert = (req, res) => {
  const { params: { shopperId } = {}, body: {lat, lng} } = req;
  if (!lat || !lng) return res.status(400).send("object param is invalid");
  if (!typeof lat != 'number' || !typeof lng != 'number') return res.status(400).send("body error data");
  let data = { shopperId, lat, lng };
  return ShopperPositionService.newPosition(shopperId, data)
    .then((response) => {
      return res.send(data)
    })
    .catch(error => {
      console.log(`exit with error ${error}`);
      return res.status(500).send();
    });
};