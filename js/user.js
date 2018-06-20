$.ajax({
  type: 'get',
  async: false,//设置为同步
  url: `${APP.A}/employee/checkRootLogin`,
  success: function (r) {
    if (r.error) {
      alert('未登录，请先登录');
      setTimeout(function () {
        location.href = 'login.html';
      }, 1000)
    }
  }
})
$(function () {
  $.ajax({
    type: 'get',
    url: `${APP.A}/user/queryUser`,
    data: {
      page: 1,
      pageSize: 1000
    },
    success: function (r) {
      console.log(r);
      var html = template('userTpl', r);
      $('#userBox').append(html);
    }
  })
  $('#userBox').on('click', '.changeStatus', function () {
    var id = $(this).attr('data-user-id');
    var isDelete = $(this).attr('data-user-id');
    $.ajax({
      type: 'post',
      url: `${APP.A}/user/updateUser`,
      data: {
        id: id,
        isDelete: isDelete == 1 ? 0 : 1
      },
      success: function (r) {
        if (r.success) {
          location.reload();
        } else {
          alert(r.message);
          setTimeout(function() {
            location.href = 'login.html';
          }, 1000)
        }
      }
    })
  })
})