$(function () {
  page = 1;
  pageSize = 10;
  totalPage = 0;
  getData();
  $('#prev').on('click', function () {
    page--;
    if (page < 1) {
      page = 1;
      alert('已经是第一页了');
      return;
    }
    getData();
  })
  $('#next').on('click', function () {
    page++;
    if (page > totalPage) {
      page = totalPage;
      alert('没有更多数据了')
      return;
    }
    getData();
  })
})
function getData () {
  $.ajax({
    type: 'get',
    url: `${APP.A}/category/queryTopCategoryPaging`,
    data: {
      page: page,
      pageSize: pageSize
    },
    success: function (r) {
      if (r.error) {
        location.href = 'login.html';
      } else {
        var html = template('categoryFirstTpl', r);
      $('#categoryFirstBox').html(html);
      }
      totalPage = Math.ceil(r.total / pageSize);
    }
  })
}