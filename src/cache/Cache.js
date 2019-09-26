const Cache = module.exports,
  { CACHE_CONNECTION: client } = require('../../config');
// The function to save on cache the data, with the given key
Cache.save = (key, data) => {
  data = JSON.stringify(data);
  client.set(key, data);
  console.log(`Cache saved with key ${key}, data: ${data}`);
};

// The function to delete from cache the data with the given key
Cache.delete = (key) => {
  console.log(`Cache deleted with key ${key}`);
  client.del(key, function (err, response) {
    if (err) return console.log("Cannot delete")
    console.log("Deleted Successfully!")
  })
};

// The function to get from cache the data with the given key
Cache.get = (key) => {
  return new Promise((resolve, reject) => {
    client.get(key, function (error, result) {
      if (error) {
        reject(error);
      }
      console.log(`Cache getted with key ${key}`);
      resolve(result);
    });
  });
};
