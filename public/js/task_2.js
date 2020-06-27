$(document).ready(function () {
  const tableContainer = $('#filter-result-view');
  const thead = tableContainer.find('thead th');

  tableContainer.on('scroll', function() {
    thead.css('transform', `translateY(${this.scrollTop-1}px)`);
  });

  const form = $('#elastic-filter-form');
  $('#elastic-filter-form-submit').click(function () {
    const filterData = {};
    for (let item of form.serializeArray()){
      if (item.value.trim() !== '') {
        filterData[item.name] = item.value;
      }
    }
    sendFilterRequest(filterData);
  });

  function sendFilterRequest(data) {
    return $.ajax({
      url: 'search',
      method: 'POST',
      contentType: 'application/json',
      data: JSON.stringify(data),
      success: function (response) {
        $('#filter-result-view').replaceWith(response);
      }
    });
  }
});
