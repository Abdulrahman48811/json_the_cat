const request = require('request');

const fetchBreedDescription = (breed, callback) => {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breed}`, (err, response, body) => {
    if (!err) {
      const result = JSON.parse(body);

      if (result.length === 0) {
        return callback('error: this breed is not found', null);
      } else {
        return callback(err, result[0].description);
      }
    } else {
      return callback(err, 'oops, something is wrong!');
    }
  });
};

module.exports = { fetchBreedDescription };