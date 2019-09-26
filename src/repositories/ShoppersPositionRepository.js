const db = require('../utils/DB');
const { shopperPosition } = require('./TableNames');

const ShoppersPositionRepository = module.exports;

ShoppersPositionRepository.insert = (data) => {
    let { shopperId, lat, lng } = data;
    let insert = {
        shopperId,
        coordinates: db.raw(`point(${lat}, ${lng})`)
    }
    db(shopperPosition).insert(insert)
        .then((data) => {
            return data;
        })
        .catch(error => {
            console.log(error);
            return error;
        })
};
