const paintings = require('../data/cda-paintings-v2.de.json').items;
const axios = require('./axios');

// --- ToDo task 1
async function singleInsert (id = 1) {
  // --- 1. create a random person
  const person = {
    id: id
  };

  try{
    // --- 2. make put request to elasticsearch with data
    // e.g.: const response = await axios.put();

    // --- 3. return response of request
    return 'Not implemented';
  } catch (error) {
    return error;
  }
}

// --- ToDo task 1 (bonus)
async function bulkInsert () {
  // --- 1. transform data
  const ndJsonData = transformData();

  try{
    // --- 2. make post request to elasticsearch with transformed data
    // e.g.: const response = await axios.post();

    // --- 3. return response of request
    return {
      message: 'Not implemented'
    };
  } catch (error) {
    return error;
  }
}

// --- ToDo transform paintings into ndjson format
// {"index":{"_id":"1"}}
// {"account_number":1,"balance":39225,"firstname":"Amber","lastname":"Duke","age":32,"gender":"M"}
// {"index":{"_id":"6"}}
// {"account_number":6,"balance":5686,"firstname":"Hattie","lastname":"Bond","age":36,"gender":"M"}
function transformData() {
  // --- notice that the data have to end with a lf (\n)
  for(let i = 0; i < paintings.length; i++) {

  }
}

module.exports = {
  executeSingleInsert: singleInsert,
  executeBulkInsert: bulkInsert,
};
