$(function () {
  $.ajax({
    type: 'get',
    url: `${APP.A}/category/queryTopCategoryPaging`,
    data: {
      page: 1,
      pageSize: 10
    },
    success: function (r) {
      var html = template('categoryFirstTpl', r);
      $('#categoryFirstBox').html(html);
    }
  })
})