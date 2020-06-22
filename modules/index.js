const accounts = require('../data/accounts.json');
const config = require('../global.config');
const axios = require('./axios');

function insertAccountData() {
  const data = accounts.map((account) => {
    const index = {
      index:{
        _id: account.account_number
      }
    };
    return `${JSON.stringify(index)}\n${JSON.stringify(account)}`;
  });

  const body = data.join('\n') + '\n';
  return axios.post('/accounts/_bulk?refresh', body)
    .catch((error) => {
      console.log(error);
    });
}

async function loadAccountData() {
  try {
    const response = await axios.get('/accounts/_search?size=1000');
    return parseElasticResult(response)
  } catch (e) {
    await insertAccountData();
    return await loadAccountData();
  }
}

function parseElasticResult(response) {
  if (response.data && response.data.hits && response.data.hits.hits) {
    return response.data.hits.hits.map(hit => hit._source);
  }
  return [];
}

async function loadTaskDefinition(taskNo) {
  const response = await require('axios').default.get(`${config.taskDefinitionUrl}/taskDefinitions/${taskNo}`);
  return response.data;
}

module.exports = {
  one: require('./task_1'),
  two: require('./task_2'),
  loadData: loadAccountData,
  getTaskDefinition: loadTaskDefinition
};
