const axios = require('./axios');

async function search (filterObj) {
  try{
    // --- 1. create the query object depends on filter set
    const queryObj = generateQueryObj(filterObj);

    // --- 2. make post request to elasticsearch with search query
    const response = await axios.post('/accounts/_search', queryObj);

    // --- 3. return response of request
    return parseElasticResult(response);

  } catch (error) {
    return error;
  }
}

/**
 const exampleFilterObj = {
    account_number: '',
    address: '',
    age: '',
    balance: '',
    city: '',
    email: '',
    employer: '',
    firstname: '',
    lastname: '',
    state: ''
  };
 */

// --- ToDo task 2
function generateQueryObj(filterObj) {
  const query = {
    // ToDo replace match_all operation with your own
    'match_all': { }
  };

  const queryObj = {
    query: query,
    sort: [
      { 'account_number': 'asc' }
    ],
    size: 10
  };

  return queryObj;
}

function parseElasticResult(response) {
  if (response.data && response.data.hits && response.data.hits.hits) {
    console.log(response.data);
    return response.data.hits.hits.map(hit => hit._source);
  }
  return [];
}

module.exports = {
  executeSearch: search
};
