const AsyncSave = module.exports;

const ShoppersPositionRepository = require('../repositories/ShoppersPositionRepository');

// To complete
// The send of the async function
AsyncSave.send = (key, data) => {
  console.log(`AsyncSave send with key ${key}, and data: ${JSON.stringify(data)}`);
};

// To complete
// The receive of the async function
AsyncSave.receive = (data) => {
  console.log(`AsyncSave receive, with data: ${JSON.stringify(data)}`);
  ShoppersPositionRepository.insert(data);
};
