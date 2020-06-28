const router = require('express').Router();
const { one, two, loadData, getTaskDefinition } = require('../modules')
let singleCounter = 1;

/**
 *  Ansichten zu den Aufgaben
 */
router.get('/:taskId', async function(req, res, next) {
  const taskNo = req.params.taskId;
  const viewData = {
    taskNo: taskNo,
    title: `Aufgabe ${taskNo}`
  };

  try {
    viewData.taskDefinition = (await getTaskDefinition(taskNo)).split('<hr>');
  }
  catch (e) {
    console.log(e);
    viewData.taskDefinition = '';
  }

  if (taskNo === '2') {
    viewData.accounts = await loadData();
    viewData.accountKeys = viewData.accounts.length > 0 ? Object.keys(viewData.accounts[0]) : [];
  }

  res.render(`task_${taskNo}/index`, viewData);
});

/**
 *  Aufgabe 1
 */
router.post('/insert/single', async function(req, res, next) {
  const result = await one.executeSingleInsert(singleCounter++);
  await res.json(result);
});

router.post('/insert/bulk', async function(req, res, next) {
  const result = await one.executeBulkInsert();
  await res.json(result);
});

/**
 *  Aufgabe 2
 */
router.post('/search', async function(req, res, next) {
  const viewData = {
    accounts: await two.executeSearch(req.body)
  };
  viewData.accountKeys = viewData.accounts.length > 0 ? Object.keys(viewData.accounts[0]) : [];

  res.render(`task_2/resultList`, viewData);
});

module.exports = router;
