$(document).ready(function () {
  const consoleWrapper = $('#consoleWrapper');
  const taskDefinition = $('#taskDefinition');
  const taskNo = taskDefinition.data('task_no')
  const itemKey = `workshop_showTask_${taskNo}`;

  let showTask = (localStorage.getItem(itemKey) || 'true') === 'true';
  taskDefinition.toggle(showTask);

  $('#hideTaskBtn').click(function () {
    showTask = !showTask;
    taskDefinition.toggle();
    localStorage.setItem(itemKey, showTask.toString());

    if (consoleWrapper.length > 0) {
      const newHeight = showTask ? '325px' : '550px';
      consoleWrapper.height(newHeight);
      $(document).trigger('taskToggled');
    }
  });
});


