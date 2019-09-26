const ShopperPositionService = module.exports;

const Cache = require('../cache/Cache');
const AsyncSave = require('../asyncSave/AsyncSave');

// To complete
ShopperPositionService.newPosition = async (shopperId, body) => {
  console.log(`Start ShopperPositionService.newPosition with body: ${JSON.stringify(body)}`);
  return new Promise(async(resolve, reject) => {
    Cache.save(shopperId, body);
    AsyncSave.receive(body);
    resolve(shopperId);
  });
};
