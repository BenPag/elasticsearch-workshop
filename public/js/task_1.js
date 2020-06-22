$(document).ready(function () {
  const c = $('#console');
  $('#clearConsole').click(function () {
    c.html('');
  });

  $('#insertSingle').click(async function () {
    const response = await doRequest('insert/single');
    appendToWindowConsole(response, $(this).text());
  });

  $('#insertBulk').click( async function () {
    const response = await doRequest('insert/bulk');
    appendToWindowConsole(response, $(this).text());
  });

  function doRequest(url) {
    return $.ajax({
      url: url,
      method: 'POST',
      success: function (response) {
        console.log(response);
      }
    });
  }

  function appendToWindowConsole(data, caller) {
    const log = c.html();
    const text = typeof data === 'object' ? JSON.stringify(data, null, 2) : data;

    c.html(`${log}${createEntry(text, caller)}`);
    $(document).trigger('consoleAppended');
  }

  function createEntry(text, caller) {
    return `<div><pre class="mb-1 p-1 d-inline-block border">${caller}<br>${text}</pre></div>`
  }

  $(document).on('taskToggled consoleAppended', function () {
    document.getElementById('consoleWrapper').scrollTop = parseInt(c.prop('scrollHeight'));
  })
});
