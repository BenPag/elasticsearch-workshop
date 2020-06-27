const paintings = require('../data/cda-paintings-v2.de.json').items;
const axios = require('./axios');

// --- ToDo task 1a
async function singleInsert (id = 1) {
  const person = {
    id: id,
    // --- ToDo fill person object with some properties and values
  };

  try{
    // --- ToDo make request to elasticsearch with data
    const response = await axios.post('');

    // --- 3. return response of request
    return response.data;
  } catch (error) {
    return error;
  }
}

// --- ToDo task 1b
async function bulkInsert () {
  // --- 1. transform data
  const ndJsonData = transformData();

  try{
    // --- ToDo make request to elasticsearch with data

    // --- ToDo return response
  } catch (error) {
    return error;
  }
}

function transformData() {
  let transformedData = '';
  for (let i = 0; i < paintings.length; i++) {
    // ToDo create index
    // ToDo stringify index
    // ToDo stringify painting
  }

  return transformedData;
}

module.exports = {
  executeSingleInsert: singleInsert,
  executeBulkInsert: bulkInsert,
};
