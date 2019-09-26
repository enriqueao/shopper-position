const { shopperPosition } = require('../src/repositories/TableNames');

console.log("calling");
exports.up = knex => knex.schema.createTable(shopperPosition, (table) => {
  console.log(table)
  table.increments('id').unsigned().primary();
  table.string('shopperId');
  table.specificType('coordinates', 'POINT')
});

exports.down = knex => knex.schema.dropTable(shopperPosition);
