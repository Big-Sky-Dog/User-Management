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
  $('#saveBtn').on('click', function () {
    var categoryName = $.trim($('#categoryName').val());
    if (!categoryName) {
      alert('请输入分类名称');
      return;
    }
    $.ajax({
      type: 'post',
      url: `${APP.A}/category/addTopCategory`,
      data: {categoryName},
      success: function (r) {
        if(r.success) {
          alert('添加成功');
          setTimeout(function () {
            location.reload()
          }, 500)
        } else {
          alert(r.message,'添加失败');
        }
      }
    })
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