$(function () {
  $.ajax({
    type: 'get',
    url: `${APP.A}/category/addTopCategory`,
    data: {
      page: 1,
      pageSize: 10
    },
    success: function (r) {
      var html = template('categoryTpl', r);
    }
  })
})